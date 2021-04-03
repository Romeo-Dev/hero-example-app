const { Hero } = require('../models/Hero.js'); // import classes
const data = require('../data.json');

function getHeros() {
    return data.heros;
}

function findById(id) {
    let hero = data.heros.filter((item) => item.id == id);
    return hero.shift();
}

function deleteHero(id) {
    let deleted = this.findById(id);
    if (deleted) {
        let pos = data.heros.indexOf(deleted);
        let removedItem = data.heros.splice(pos, 1);

        return removedItem;
    } else {
        return null;
    }

}

function addHero({ name, race, clas }) {
    let newHero = new Hero(name, race, clas);
    if (newHero === undefined) return undefined;
    data.heros.unshift(newHero);
    return newHero;
}

function updateHero(id, { name = null, race = null, clas = null }) {
    let old = this.findById(id);
    if (old === undefined) return undefined;
    // Update item statemaents
    let updateH = new Hero(old.name, old.race, old.class, old.id);
    updateH.setName(name ?? updateH.name);
    updateH.setRace(race ?? updateH.race);
    updateH.setClass(clas ?? updateH.class);
    console.log(updateH);

    // Update list items
    let index = data.heros.indexOf(old);
    if (index === -1) return undefined;
    data.heros[index] = updateH;
    return updateH;
}


module.exports = {
    getHeros,
    findById,
    deleteHero,
    addHero,
    updateHero
}