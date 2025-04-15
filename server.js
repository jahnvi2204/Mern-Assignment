// server.js
const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse JSON requests
app.use(express.json());

// In-memory array to store users
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// Welcome route
app.get('/welcome', (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST a new user
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  
  const newUser = {
    id: users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1,
    name,
    email
  };
  
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT (update) a user
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email } = req.body;
  
  if (!name && !email) {
    return res.status(400).json({ error: 'Name or email is required for update' });
  }
  
  const userIndex = users.findIndex(user => user.id === userId);
  
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  users[userIndex] = {
    ...users[userIndex],
    name: name || users[userIndex].name,
    email: email || users[userIndex].email
  };
  
  res.json(users[userIndex]);
});

// DELETE a user
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(user => user.id === userId);
  
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  const deletedUser = users[userIndex];
  users = users.filter(user => user.id !== userId);
  
  res.json({ message: 'User deleted successfully', user: deletedUser });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});