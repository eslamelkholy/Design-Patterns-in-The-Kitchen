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
  createCar(type) {
    switch (type) {
      case "civic":
        return new Car(4, "A10", "green");
      case "honda":
        return new Car(10, "A5", "red");
    }
  }
}

const factory = new CarFactory();

const civic = factory.createCar("civic");
const honda = factory.createCar("honda");

console.log(civic);
console.log(honda);
