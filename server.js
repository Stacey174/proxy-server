const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());

app.post('/proxy', async (req, res) => {
    try {
        const gscriptUrl = 'https://script.google.com/macros/s/AKfycbzfeCQ1KvWaaPH7ZhXN4j9WwwrYuAYZnZLmHWGr-2A3NVE8tJg5RuChrNE1gpNUgE-aog/exec';
        const response = await fetch(gscriptUrl, {
            method: 'POST',
            body: JSON.stringify(req.body),
            redirect: 'follow'
        });
        res.json(await response.json());
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.listen(process.env.PORT || 3000);