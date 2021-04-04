const express = require('express');
const router = express.Router();
const {createError} = require('../helpers/error');
const skillController = require('../controllers/skillController');

router.get('/', (req, res) => {
    const skills = skillController.getSkills(); 
    res.status(skills? 200 : 404).json(skills? skills : createError(404, 'Resources collection  not found'));
});

router.get('/:id([0-9]+)', (req, res) => {
    let skill = skillController.getSkillsById(req.params.id);
    res.status(skill? 200 : 404).json(skill? skill : createError(404, 'skill not found on list'));
});

router.delete('/:id([0-9]+)', (req, res) => {
    let skill = skillController.deleteSkill(req.params.id);
    res.status(skill? 200 : 404).json(skill? skill : createError(404, 'skill not found on list'));
});

module.exports = router;