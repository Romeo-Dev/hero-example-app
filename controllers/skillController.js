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

function addSkill({name, description, memSlot, range, costAP, school, cooldown, costSP = 0}) {
    let skill = new Skill(name, description,parseInt(memSlot), parseInt(range), parseInt(costAP), school, parseInt(cooldown),parseInt(costSP));
    if(skill === undefined) return undefined;
    data.skills.unshift(skill);
    return skill;
}

function updateSkill(ids, {
        name = null,
        description = null,
        memSlot =null,
        range = null,
        costAP = null,
        school = null,
        cooldown = null,
        costSP = 0
    }) {
    let find = this.getSkillsById(ids);
    let upSkill = new Skill(find.name, find.description, find.memSlot, find.range, find.costAP, find.school, find.cooldown, find.costSP, find.id);
    //Updated find with req.body
    upSkill.setName(name ?? find.name);
    upSkill.setDescription(description ?? find.description);
    upSkill.setMemSlot(parseInt(memSlot) ?? find.memSlot);
    upSkill.setRange(parseInt(range) ?? find.range);
    upSkill.setCostAp(parseInt(costAP) ?? find.costAP);
    upSkill.setSchool(school ?? find.school);
    upSkill.setCooldown(parseInt(cooldown) ?? find.cooldown);
    upSkill.setCostSp(parseInt(costSP) ?? find.costSP);
    /* Substitution to json data and return updated
        *Skill for response 
    */
   let idx = data.skills.indexOf(find);
   if (idx === -1 ) return undefined;
   data.skills[idx] = upSkill;

   return upSkill;
}

module.exports = {
    getSkills,
    getSkillsById,
    deleteSkill,
    addSkill,
    updateSkill
}