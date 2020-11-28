let sum = 0;

class Calculator {
  constructor() {}
  increase(val) {
    sum += val;
    return sum;
  }

  getTotal() {
    return sum;
  }
}

module.exports = Calculator;
