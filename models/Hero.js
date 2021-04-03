function Hero(name, race, clas, id = null) {
    this.id = id ?? Math.floor(Math.random() * 101);
    this.name = name;
    this.race = race;
    this.class = clas;

    // Setter class
    this.setName = (newName) => {
        this.name = newName;
    }; this.setClass = (newName) => {
        this.class = newName;
    }; this.setRace = (newName) => {
        this.race = newName;
    };
}

module.exports = {
    Hero
}