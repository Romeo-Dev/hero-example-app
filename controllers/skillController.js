const {Skill} = require('../models/Skill'); // import classes
const data = require('../data.json');

function getSkills() {
    return data.skills;
}

function getSkillsById(id) {
    let find = data.skills.find(item => item.id == id);
    if (!find) return undefined;
    return find; 
}

function deleteSkill(id) {
    let pos = data.skills.indexOf(this.getSkillsById(id));
    console.log(pos);
    if(pos === -1) return null;
    let removedItem = data.skills.splice(pos, 1).shift();
    return removedItem;

}

module.exports = {
    getSkills,
    getSkillsById,
    deleteSkill
}