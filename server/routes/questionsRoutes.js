const express = require('express');
const path = require('path');
const router = express.Router();

// Serve questions.json
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/questions.json'));
});

module.exports = router;
