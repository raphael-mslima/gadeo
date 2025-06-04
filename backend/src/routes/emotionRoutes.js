const express = require('express');
const router = express.Router();

// List emotional states
router.get('/', (req, res) => {
  res.json([
    { id: 1, label: 'Confuso' },
    { id: 2, label: 'Angustiado' },
    { id: 3, label: 'Buscando clareza' }
  ]);
});

module.exports = router;
