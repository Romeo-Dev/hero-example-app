const express = require('express');
const router = express.Router();
const heroController = require('../controllers/heroController');

const errMessage = {
    status: 404,
    message: 'Resource not found'
}

router.get('/', (req, res) => {
    res.status(200).json(heroController.getHeros());
});

router.get('/:id([0-9]+)', (req, res) => {
    let hero = heroController.findById(req.params.id);
    res.status(hero? 200 : 404).json(hero? hero : errMessage);
})

module.exports = router;