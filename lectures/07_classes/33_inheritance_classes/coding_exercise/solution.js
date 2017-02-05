class Wizard {
  constructor(power_level) {
    this.power_level = power_level;
  }

  power() {
    return this.power_level;
  }
}

let Gandalf = new Wizard(100);
