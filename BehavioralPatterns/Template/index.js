/**
 * Template Design Pattern
 * The **Intent** of This Pattern is To Make it Possible to Define a Family of Classes that Are All Variations of A Family of Component
 */

class Shipping {
  calculate() {
    throw new Error('calculate() must be implemented');
  }
}

class UPS extends Shipping {
  constructor() {
    super();
    this.calculate = function (packageMoney) {
      console.log('Passed Package Money Here');
      console.log(packageMoney);
      // calculations...
      return '$45.95';
    };
  }
}

class Fedex extends Shipping {
  constructor() {
    super();
    this.calculate = function (packageMoney) {
      console.log('Passed Package Money Here');
      console.log(packageMoney);
      // calculations...
      return '$43.20';
    };
  }
}

var packageMoney = { from: '76712', to: '10012', weigth: 'lkg' };
var ups = new UPS();
var fedex = new Fedex();

console.log('UPS Strategy: ' + ups.calculate(packageMoney));
console.log('USPS Strategy: ' + fedex.calculate(packageMoney));
