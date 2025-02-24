// Import necessary modules
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();

// Serve static files (like CSS and JS)
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve the HTML file (now it's h.html instead of index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'h.html')); // Serve h.html file
});

// Define a simple API route
app.get('/api/data', (req, res) => {
  res.json({
    message: 'Hello from the backend!',
    data: [1, 2, 3, 4, 5]
  });
});

// Start the server on port 5000
app.listen(5000, () => {
  console.log('Server running at http://localhost:5000/');
});



