/**
 * Flyweight Design Pattern
 * Minimzie Recreating the Same Item in Memory Twice
 * The Browser By Default Using this Pattern To Avoid Loading Images Twice
 * it's very Similar to Singltone
 * [Preventing The Creation of More items Into the Memory]
 * It's Very Important with Hooks Use Effect Because if we gives it [] as Dependeny
 * It Will Rendre Twice so this is a very good way to avoid it
 */

let instance = null;

class Car {
  constructor(doors, engine, color) {
    if (instance) return instance;
    this.doors = doors;
    this.engine = engine;
    this.color = color;
    instance = this;
  }
}

const civic = new Car(4, "V6", "grey");
const honda = new Car(2, "V8", "red");

console.log(civic);
console.log(honda);
