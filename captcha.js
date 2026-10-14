const http = require("http");
const { WebSocketServer } = require("ws");

const TOKEN_TTL = 4.5 * 60 * 1000;
const LOCAL_ORIGIN = /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/;

const tokens = new Map();    // siteKey -> token (cached for plain requests, same as before)
const requests = new Map();  // siteKey -> [{ fresh, respond }]
const asked = new Set();     // siteKeys the browser is currently working on
let socket = null;

// Ask the arras.io tab for a token (once per siteKey until it answers).
function ask(siteKey) {
    if (!socket || asked.has(siteKey)) return;
    asked.add(siteKey);
    socket.send(siteKey);
}

function cache(siteKey, token) {
    tokens.set(siteKey, token);
    setTimeout(() => {
        if (tokens.get(siteKey) === token) tokens.delete(siteKey);
    }, TOKEN_TTL);
}

function deliver(siteKey, token) {
    const waiting = requests.get(siteKey) ?? [];
    const freshAt = waiting.findIndex(w => w.fresh);
    if (freshAt !== -1) {
        // Turnstile tokens are single-use: a "?fresh" request gets a token of its own and it isn't cached.
        waiting.splice(freshAt, 1)[0].respond(token);
    } else {
        for (const w of waiting.splice(0)) w.respond(token);
        cache(siteKey, token);
    }
    if (waiting.length) ask(siteKey);   // somebody is still waiting, get another token
    else requests.delete(siteKey);
}

const server = http.createServer((req, res) => {
    // The sim page (http://localhost:3000) fetches tokens from here, so it needs CORS.
    const origin = req.headers.origin;
    if (origin && LOCAL_ORIGIN.test(origin)) res.setHeader("Access-Control-Allow-Origin", origin);
    if (req.method === "OPTIONS") {
        res.writeHead(204, { "Access-Control-Allow-Methods": "GET", "Access-Control-Max-Age": "600" });
        return res.end();
    }

    const url = new URL(req.url, "http://localhost");
    const siteKey = url.pathname.slice(1);
    if (!siteKey || siteKey === "favicon.ico") return res.end();

    const fresh = url.searchParams.has("fresh");
    if (!fresh && tokens.has(siteKey)) return res.end(tokens.get(siteKey));

    if (!requests.has(siteKey)) requests.set(siteKey, []);
    const waiter = { fresh, respond: token => res.end(token) };
    requests.get(siteKey).push(waiter);

    // caller went away: don't spend a token on a dead request
    res.on("close", () => {
        const list = requests.get(siteKey);
        if (!list) return;
        const i = list.indexOf(waiter);
        if (i !== -1) list.splice(i, 1);
        if (!list.length) requests.delete(siteKey);
    });

    ask(siteKey);
}).listen(8080, () => console.log("Waiting for client connection."));

const wss = new WebSocketServer({ server });

wss.on("connection", ws => {
    if (ws.protocol !== "arras-captcha") return ws.close();
    if (socket) return ws.close();

    socket = ws;
    ws.addEventListener("close", () => {
        if (socket === ws) socket = null;
        asked.clear();
        console.log("Client disconnected.");
    });
    ws.addEventListener("error", e => {
        console.log("Client socket error:", e.message ?? e);
    });
    ws.addEventListener("message", e => {
        const [siteKey, token] = String(e.data).split("|");
        if (!siteKey || !token) return;
        asked.delete(siteKey);
        deliver(siteKey, token);
        console.log("Received token for", siteKey);
    });

    console.log("Client connected.");

    for (const siteKey of requests.keys()) ask(siteKey);
});
