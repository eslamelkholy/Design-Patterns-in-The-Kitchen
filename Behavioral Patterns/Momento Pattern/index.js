/**
 * Momento Design Pattern
 * Is Basically Providing Temporary State of an Object
 * And Restoration of This Object From Conversion
 * Use Case: Serialization and DeSerialization
 * Example:
 * https://www.dofactory.com/javascript/design-patterns/memento
 */

class Person {
  constructor(name, street, city, state) {
    this.name = name;
    this.street = street;
    this.city = city;
    this.state = state;
  }
  hydrate() {
    var memento = JSON.stringify(this);
    return memento;
  }
  dehydrate(memento) {
    var m = JSON.parse(memento);
    this.name = m.name;
    this.street = m.street;
    this.city = m.city;
    this.state = m.state;
  }
}

class CareTaker {
  constructor() {
    this.mementos = {};

    (this.add = function (key, memento) {
      this.mementos[key] = memento;
    }),
      (this.get = function (key) {
        return this.mementos[key];
      });
  }
}

var mike = new Person("Mike Foley", "1112 Main", "Dallas", "TX");
var john = new Person("John Wang", "48th Street", "San Jose", "CA");
var caretaker = new CareTaker();

// save state

caretaker.add(1, mike.hydrate());
caretaker.add(2, john.hydrate());

// mess up their names

mike.name = "King Kong";
john.name = "Superman";

// restore original state

mike.dehydrate(caretaker.get(1));
john.dehydrate(caretaker.get(2));

console.log(mike.name);
console.log(john.name);
