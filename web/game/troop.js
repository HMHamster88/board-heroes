export class Troop {
    constructor(creature) {
      this.creature = creature;
      this.amount = creature.growth;
      this.health = creature.health;
      this.buffs = [];
      this.debuffs = [];
    }
  }
  