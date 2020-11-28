/**
 * Composition
 * Definition:
 * Describe Exactly what Object Can Do
 */

class Monster {
  constructor(name) {
    this.name = name;
  }
}

function basicMonsterFunctionality({ name }) {
  return {
    attack: () => console.log(`${name} Attacked`),
    walk: () => console.log(`${name} Walked`),
  };
}

function swimmer({ name }) {
  return { swim: () => console.log(`${name} Swam`) };
}

function flyer({ name }) {
  return { fly: () => console.log(`${name} Flew`) };
}

function flyingSwimMonsterCreator(name) {
  const monster = new Monster(name);
  return { ...monster, ...basicMonsterFunctionality(monster), ...swimmer(monster), ...flyer(monster) };
}

function swimmingMonsterCreator(name) {
  const monster = new Monster(name);
  return { ...monster, ...basicMonsterFunctionality(monster), ...swimmer(monster) };
}

const swimMonster = swimmingMonsterCreator("Swimming Monster");
console.log("================================");
console.log("Swim Monster Goes Here");
swimMonster.swim();
swimMonster.attack();
swimMonster.walk();

const flyingSwimmingMonster = flyingSwimMonsterCreator("Flyting Monster");
console.log("================================");
console.log("Flying And Swim Monster Goes Here");
flyingSwimmingMonster.fly();
flyingSwimmingMonster.swim();
flyingSwimmingMonster.attack();
flyingSwimmingMonster.walk();
