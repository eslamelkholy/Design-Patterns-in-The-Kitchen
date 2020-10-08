/**
 * Strategy Design Pattern
 * Is Basically a Way To Encapsulate Different Algorithm Or Functions
 * And Reuse This Code Multiple Time
 * Example: Shipping Companies And How To Handle 3 shipping companies UPS, USPS, and Fedex
 */

class Shipping {
  constructor() {
    this.company = "";
  }
  setStrategy(company) {
    this.company = company;
  }
  calculate(packageMoney) {
    return this.company.calculate(packageMoney);
  }
}

class UPS {
  constructor() {
    this.calculate = function (packageMoney) {
      // calculations...
      return "$45.95";
    };
  }
}

class USPS {
  constructor() {
    this.calculate = function (packageMoney) {
      // calculations...
      return "$39.40";
    };
  }
}

class Fedex {
  constructor() {
    this.calculate = function (packageMoney) {
      // calculations...
      return "$43.20";
    };
  }
}

var packageMoney = { from: "76712", to: "10012", weigth: "lkg" };

// the 3 strategies

var ups = new UPS();
var usps = new USPS();
var fedex = new Fedex();

var shipping = new Shipping();

shipping.setStrategy(ups);
console.log("UPS Strategy: " + shipping.calculate(packageMoney));
shipping.setStrategy(usps);
console.log("USPS Strategy: " + shipping.calculate(packageMoney));
shipping.setStrategy(fedex);
console.log("Fedex Strategy: " + shipping.calculate(packageMoney));
