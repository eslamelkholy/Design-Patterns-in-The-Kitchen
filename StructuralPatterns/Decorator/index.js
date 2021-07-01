/**
 * Decorator Design Pattern
 * is Very Similar to Mixins And Heavily used at Angular
 * We will go through example With Mixins
 */
/**
 * Mixins Design Pattern
 * Use Case: Added Or Mix Other Function with Your Class
 * A Great Way to Mix Functions & Instances of Classes After They Have Been Created
 * E.G Added Function To Class we Have Created Eariler
 * We are Going to Implement it With The Awesome Design Patterns Abstract Factory
 */

class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}
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

class SUV {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }

  @carMixin  // This How it will work in TypeScript
}
class SUVFactory {
  createCar(type) {
    switch (type) {
      case "cx5":
        return new SUV(4, "A10", "green");
      case "sante fe":
        return new SUV(10, "A5", "red");
    }
  }
}

const carMixin = {
  Engine() {
    console.log("This Function Has Been Added By Mixins Design Pattern");
    console.log(`The Engine ${this.engine} is Doing GREATE!!!!`);
  },
};

// Setup Facoties
const carfactory = new CarFactory();
const suvfactory = new SUVFactory();

// Abstract Layer That Controls All The Factory At The App Right Here
const autoManufacturer = (type, model) => {
  switch (type) {
    case "car":
      return carfactory.createCar(model);
    case "suv":
      return suvfactory.createCar(model);
  }
};
// Assign Mixin to Car Class
Object.assign(Car.prototype, carMixin);

const cx5 = autoManufacturer("suv", "cx5");
const honda = autoManufacturer("car", "honda");

honda.Engine();
console.log(cx5);
console.log(honda);
