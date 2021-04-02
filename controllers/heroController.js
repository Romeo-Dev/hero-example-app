const data = require('../data.json');

function getHeros() {
    return data.heros;
}

function findById(id) {
    let heros = data.heros;
    let hero = heros.filter((item) => item.id == id);
    return hero.shift(); 
}


module.exports = {
    getHeros,
    findById
}