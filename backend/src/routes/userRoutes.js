const express = require('express');
const router = express.Router();

// Placeholder for user registration/login
router.post('/register', (req, res) => {
  res.json({ message: 'User registered' });
});

router.post('/login', (req, res) => {
  res.json({ token: 'dummy-token' });
});

module.exports = router;
