// server.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/sum', (req, res) => {
    const a = parseInt(req.query.a) || 0;
    const b = parseInt(req.query.b) || 0;
    res.json({ result: a + b });
});

module.exports = app;

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}
