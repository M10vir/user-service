// src/app.js
const express = require('express');
const router = express.Router();

// Updated user data
const users = [
  { id: 1, name: 'Updated User 1' },
  { id: 2, name: 'Updated User 2' },
  { id: 3, name: 'Updated User 3' }
];

// Health check route
router.get('/health', (req, res) => {
  res.status(200).send('Service is healthy!');
});

// Get all users
router.get('/', (req, res) => {
  res.json(users);
});

// Get a user by ID
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

module.exports = router;

