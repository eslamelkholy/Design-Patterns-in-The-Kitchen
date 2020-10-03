/*
  Factory Pattern is a Mechanism To Create Other Objects
  Use Case: When You Need A Factory To Handle Most Of Your Classes
  And Simply Use This Factory Method to Create your New Object
  E.g >> The Type Of The Users [Admin, User, Guest, ....]
*/

class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

// This Class will Include Function the Create the Car From The Factory Automatic
class CarFactory {
  createCar(type, doors, engine, color) {
    switch (type) {
      case "civic":
        return new Car(doors, engine, color);
      case "honda":
        return new Car(doors, engine, color);
    }
  }
}

const factory = new CarFactory();

const civic = factory.createCar("civic", 4, "A10", "green");
const honda = factory.createCar("honda", 10, "A5", "red");

console.log(civic);
console.log(honda);
