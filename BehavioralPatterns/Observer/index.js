/**
 * Observer Pattern
 * List of Objects Based On Event and Updating Data based on this Event
 * It's Like Publish and Subscribe at Meteorjs and Angular
 * You Can Easily Implement This Design Pattern at React Using Hooks
 * and Makes The UseEffect Dependencies to Handle the Changes in the Event
 * This Article Perfect With Real Case Senario
 * https://medium.com/javascript-in-plain-english/react-hooks-and-the-observer-pattern-1e4274f0e5f5
 * Enjoy
 */

class Car {
  constructor(gas) {
    this.gas = gas;
  }

  setGasLevel(val) {
    this.gas = val;
    this.notifyAll();
  }

  register(observer) {
    this.actions.push(observer);
  }

  unregister(observer) {
    this.actions.remove.filter(function (el) {
      return el !== observer;
    });
  }

  notifyAll() {
    return this.actions.forEach(
      function (el) {
        el.update(this);
      }.bind(this)
    );
  }
}

class consumption {
  update(car) {
    car.gas = car.gas + 1;
  }
}
