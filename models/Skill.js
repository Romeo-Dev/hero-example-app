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

    this.setDescription = (newDesc) => {
        this.description = newDesc;
    };

    this.setMemSlot = (newSlot) => {
        if (typeof newSlot != 'number') return;
        if (newSlot > 0 && newSlot < 10){
            this.memSlot = newSlot;
        }else {
            return;
        }
    };

    this.setRange = (newRange) => {
        if (typeof newRange != 'number') return;
        this.range = newRange;
    };

    this.setCostAp = (newCost) => {
        if (typeof newCost != 'number') return;
        if (newCost > 0 && newCost < 10){
            this.costAP = newCost;
        }else {
            return;
        }
    };

    this.setCostSp = (newCost) => {
        if (typeof newCost != 'number') return;
        if (newCost > 0 && newCost < 10){
            this.costSP = newCost;
        }else {
            return;
        }
    };
}