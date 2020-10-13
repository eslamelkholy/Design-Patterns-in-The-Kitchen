/**
 * Inheritance
 * Definition :
 * Describe Exactly What is Objects and How They're Related to Each Others
 * But The Problem here is When if Someone Wants To Add New Type
 * That Can ( Swim & Fly )
 * Some here i will Duplicates The Fly & Swim Logic in this Class
 */

class Monster {
  constructor(name) {
    this.name = name;
  }

  attack() {
    console.log(`${this.name} Attacked`);
  }

  walk() {
    console.log(`${this.name} Walked`);
  }
}

class FlyingMonster extends Monster {
  fly() {
    console.log(`${this.name} Flew`);
  }
}

class SwimmingMonster extends Monster {
  swim() {
    console.log(`${this.name} swim`);
  }
}

/**
 * Duplicating Code Fly & Swim and that a Very Bad Way
 * So No Way to Do This Without Duplicate Logic
 */

class SwimmingFlyingMonster extends Monster {
  fly() {
    console.log(`${this.name} Flew`);
  }

  swim() {
    console.log(`${this.name} swim`);
  }
}

const bear = new Monster("Bear");
bear.attack();
bear.walk();

const eagle = new FlyingMonster("Eagle");
eagle.walk();
eagle.attack();
eagle.fly();

const shark = new SwimmingMonster("Shark");
shark.attack();
shark.walk();
shark.swim();
