const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use('/wasm', express.static(path.join(__dirname, 'wasm')));
app.use('/reverse_engineering', express.static(path.join(__dirname, 'reverse_engineering')));
app.use('/mods', express.static(path.join(__dirname, 'mods')));

const fs = require('fs');
app.get('/api/mods', (req, res) => {
  const modsPath = path.join(__dirname, 'mods');
  if (!fs.existsSync(modsPath)) fs.mkdirSync(modsPath);

  const results = [];

  function scan(dir, base) {
    let entries;
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch (e) {
      return;
    }
    for (const entry of entries) {
      if (entry.isDirectory()) {
        // Skip folders whose names start with "-"
        if (entry.name.startsWith('-')) continue;
        scan(path.join(dir, entry.name), base + entry.name + '/');
      } else if (entry.isFile() && entry.name.endsWith('.js')) {
        results.push(base + entry.name);
      }
    }
  }

  scan(modsPath, '');
  res.json(results);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'simulation.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
