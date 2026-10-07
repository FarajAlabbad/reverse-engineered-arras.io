console.log(
    "%c[TROUBLESHOOT]%c If servers aren't showing up, try disabling showhiddenlobbies.js.",
    "color: #FFA500; font-weight: bold; background: #222; padding: 2px 5px; border-radius: 3px;",
    "color: inherit; font-weight: normal;"
);

(function () {
    const windowFetch = window.fetch;

    window.fetch = async (req, options) => {
        const res = await windowFetch(req, options);

        if (res && res.url && res.url.includes("/status")) {
            console.log('[showhiddenlobbies] intercepted /status:', res.url);
            try {
                // Clone the response first to prevent body already read errors
                const clonedRes = res.clone();
                const json = await clonedRes.json();
                
                if (json && json.status) {
                    for (const key of Object.keys(json.status)) {
                        json.status[key].hidden = false;
                    }
                }
                
                const modifiedBody = JSON.stringify(json);
                const modifiedResponse = new Response(modifiedBody, {
                    status: res.status,
                    statusText: res.statusText,
                    headers: res.headers
                });
                
                // Emulate original response url property
                Object.defineProperty(modifiedResponse, 'url', { value: res.url });
                return modifiedResponse;
            } catch (e) {
                console.error('[showhiddenlobbies] Error modifying status response:', e);
            }
        }
        return res;
    };
})();