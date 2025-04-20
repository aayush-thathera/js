const express = require('express');
const app = express();
app.use(express.json()); // Middleware to parse JSON data

// POST request to create a new resource
app.post('/users', (req, res) => {
    const user = req.body;  // Get the JSON body
    console.log(user);  // Log the received user data
    res.status(201).json({ message: 'User created', user });
});

// GET request to fetch user data
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;  // Get dynamic route parameter
    res.json({ userId });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
