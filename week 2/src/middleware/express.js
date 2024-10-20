// Import the Express module
const express = require('express');
const app = express();

// Example middleware function
const loggerMiddleware = (req, res, next) => {
    console.log('req.method');
    console.log('req url');
    // Pass control to the next middleware
    next();
};

// Use the middleware
app.use(loggerMiddleware);

// Route to handle requests
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});