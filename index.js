const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Global Middleware to parse JSON request bodies
app.use(express.json());

// 1. Health check route
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Express server running' });
});

// 2. GET route with URL parameters
app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ id: userId, name: `User ${userId}` });
});

// 3. POST route to create data
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  // Example success response with created resource
  res.status(201).json({
    message: 'User created successfully',
    user: { id: Date.now(), name, email }
  });
});

// Start listening
app.listen(PORT, () => {
  console.log(`Server live at http://localhost:${PORT}`);
});