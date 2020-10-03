/**
  Singleton Design Pattern
  Use Case: When you need Only One Instance At Every Creation Of New Object
  e.g Database Connection , Logs Over alll The Application, ....
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

const civic = new Car(4, "A10", "green");
const honda = new Car(10, "A5", "Black");

console.log(civic);
console.log(honda);
