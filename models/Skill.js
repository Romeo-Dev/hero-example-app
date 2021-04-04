function Skill(name, description, memSlot, range, costAP, school, cooldown, costSP = 0, id = null) {
    this.id = id ?? Math.floor(Math.random() * 101);
    this.name = name;
    this.school = school;
    this.cooldown = cooldown;
    this.description = description;
    this.memSlot = memSlot;
    this.range = range;
    this.costAP = costAP;
    this.costSP = costSP;

    // Setter Method

    this.setName = (newName) => {
        this.name = newName;
    };

    this.setSchool = (newName) => {
        this.school = newName;
    };

    this.setCooldown = (newCooldown) => {
        if (typeof newCooldown != 'number') return;
        if (newCooldown > 0 && newCooldown < 10){
            this.cooldown = newCooldown;
        }else {
            return;
        }
    };

    this.setName = (newName) => {
        this.name = newName;
    };

    this.setName = (newName) => {
        this.name = newName;
    };

    this.setName = (newName) => {
        this.name = newName;
    };

    this.setName = (newName) => {
        this.name = newName;
    };

    this.setName = (newName) => {
        this.name = newName;
    };

    this.setName = (newName) => {
        this.name = newName;
    };
}