const express = require('express');
const { server } = require('../config/config');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming request body (for POST and PUT)
app.use(express.json());

// Routes

// GET route - retrieve data
app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
});

// GET route - retrieve specific data
app.get('/users', (req, res) => {
    res.json([
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' }
    ]);
});

// POST route - add data
app.post('/users', (req, res) => {
    const newUser = req.body;
    res.status(201).json({ message: 'User added!', user: newUser });
});

// PUT route - update data
app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    res.json({ message: User (userId), updatedUser });
});

// DELETE route - delete data
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: User (userId) });
});

// Start the server
app.listen(PORT, () => {
    console.log( server);
});