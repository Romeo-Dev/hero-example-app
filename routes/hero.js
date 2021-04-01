const express = require('express');
const router = express.Router();
const heroController = require('../controllers/heroController');

router.get('/', (req, res) => {
    res.status(200).json(heroController.getHeros());
});

module.exports = router;