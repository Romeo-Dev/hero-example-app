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

router.post('/', (req, res) => {
    let skill = skillController.addSkill(req.body);
    res.status(skill? 201: 400).json(skill? skill : createError(400, 'Skill not be created, bad request or missing parameters'));
});

router.put('/:id([0-9]+)', (req, res) => {
    console.log(req.body);
    let upSkill = skillController.updateSkill(req.params.id, req.body);
    res.status(upSkill? 201: 400).json(upSkill? upSkill : createError(400, 'Skill not be updated, missing or not validated request'));
});
module.exports = router;