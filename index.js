const express = require('express');
const axios = require('axios'); // Import axios
const path = require('path');

const app = express();
const port = 3000;

// Replace this with your GitHub raw JSON URL
const GITHUB_JSON_URL = 'https://raw.githubusercontent.com/HappyStevison/quoter/main/data.json';

// Serve static files (e.g., HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Route to fetch quotes
app.get('/quotes', async (req, res) => {
    try {
        const response = await axios.get(GITHUB_JSON_URL); // Use axios here
        const data = response.data;
        res.json(data.quotes); // Send only the quotes array
    } catch (error) {
        console.error('Error fetching quotes:', error.message);
        res.status(500).send('Failed to fetch quotes');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});