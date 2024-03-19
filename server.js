const express = require('express');
const app = express();
const path = require('path');

// Define the public directory to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Define a simple endpoint
// app.get('/api/message', (req, res) => {
//     res.send('Hello from the server!');
// });

// Endpoint to add two numbers
app.get('/api/addTwoNumbers', (req, res) => {
    // Retrieve query parameters from the request URL
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);

    // Check if both query parameters are provided
    if (!num1 || !num2) {
        return res.status(400).send('Please provide valid numbers in the URL parameters.');
    }

    // Perform addition
    const sum = num1 + num2;

    // Send the result as JSON
    res.json({ data: sum });
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
