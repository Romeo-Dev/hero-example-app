const express = require('express');
const router = express.Router();
const {createError} = require('../helpers/error')
const heroController = require('../controllers/heroController');

router.get('/', (req, res) => {
    res.status(200).json(heroController.getHeros());
});

router.get('/:id([0-9]+)', (req, res) => {
    let hero = heroController.findById(req.params.id);
    res.status(hero? 200 : 404).json(hero? hero : createError(404, 'Hero not found on list'));
});

router.delete('/:id([0-9]+)', (req, res) => {
    let hero = heroController.deleteHero(req.params.id);
    res.status(hero? 200 : 400).json(hero? hero : createError(400, 'Hero can not be deleted'));
});

router.post('/', (req, res) => {
    let hero = heroController.addHero(req.body);
    res.status(hero? 201 : 400).json(hero? hero : createError(400, 'Hero can not be created, missing parameters'));
});

router.put('/:id([0-9]+)', (req, res) => {
    let hero = heroController.updateHero(req.params.id, req.body);
    res.status(hero? 202 : 400).json(hero? hero : createError(400, 'Hero can not be updated, missing parameters'));
});

module.exports = router;