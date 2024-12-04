const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// Endpoint to get items
app.get('/items', (req, res) => {
    fs.readFile('items.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading items');
        }
        res.send(JSON.parse(data));
    });
});

// Endpoint to save items
app.post('/items', (req, res) => {
    const items = req.body;
    fs.writeFile('items.json', JSON.stringify(items), (err) => {
        if (err) {
            return res.status(500).send('Error saving items');
        }
        res.send('Items saved successfully');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
