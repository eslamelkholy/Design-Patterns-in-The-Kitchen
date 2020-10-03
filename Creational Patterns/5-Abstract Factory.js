/*
  Abstract Factory Pattern ( The Best One Ever At All Choices! )
  To Abstract The Factories and Clases 
  E.G >> We Have a Car and SUV And we want TO Abstract these Factories
  So It's a Combination of Factory Pattern To Get More Abstract Layer And Easy, Clean Architect
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

const cx5 = autoManufacturer("suv", "cx5");
const honda = autoManufacturer("car", "honda");

console.log(cx5);
console.log(honda);
