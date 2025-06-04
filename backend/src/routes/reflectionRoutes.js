const express = require('express');
const router = express.Router();

// Save a reflection entry (placeholder)
router.post('/', (req, res) => {
  const { text } = req.body;
  res.json({ message: 'Reflection saved', text });
});

module.exports = router;
