const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/proxy', async (req, res) => {
    try {
        const gscriptUrl = 'https://script.google.com/macros/s/AKfycbzNmoWy3qpCe2q6C2qwb6o5PivzN7X6AQDFuM73yv453A42aEuLVyVV27nCLIgBq8xtpw/exec';
        const response = await fetch(gscriptUrl, {
            method: 'POST',
            body: JSON.stringify(req.body),
            redirect: 'follow'
        });
        const data = await response.text();
        res.send(data);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));