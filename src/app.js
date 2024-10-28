const express = require('express');
const router = express.Router();

// In-memory user data (for simplicity)
const users = [
  { id: 1, name: 'Zeydan User 1' },
  { id: 2, name: 'Humdan User 2' },
  { id: 3, name: 'Jehan User 3' }
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

