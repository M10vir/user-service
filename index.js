const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Health check route
app.get('/health', (req, res) => {
  res.status(200).send('Service is healthy!');
});

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to User Service! Part - 2');
});

// Import the app logic from src/app.js
const userRoutes = require('./src/app');
app.use('/users', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

