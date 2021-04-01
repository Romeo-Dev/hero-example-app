const data = require('../data.json');

function getHeros() {
    return data.heros;
}


module.exports = {
    getHeros
}