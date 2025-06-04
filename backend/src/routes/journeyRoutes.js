const express = require('express');
const router = express.Router();

// Return sample journey structure
router.get('/:emotionId', (req, res) => {
  const { emotionId } = req.params;
  res.json({
    id: emotionId,
    steps: [
      { id: 1, text: 'Respire fundo e observe' },
      { id: 2, text: 'Escreva três sentimentos que surgirem' }
    ]
  });
});

module.exports = router;
