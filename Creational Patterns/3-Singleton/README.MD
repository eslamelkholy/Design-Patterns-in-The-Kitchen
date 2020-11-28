# Singleton Design Patterns

### Singleton Objects That have one Single Instance With Single Point Of Access

### Useful For Maintaing Central State

- Nodejs Module System Provide Basic Implementation for Singleton
- That's Because Modules Are Cached when They Accessed Using Require() statement
- But This Behaviour Changes When We Use Classes

### Examples

### 1- Will Return The Same Result With Many Different Objects

```javascript
let value = 0; // This Private Variable

module.export = {
  add: (val) => val + staticVal,
  multiply: (val) => val * staticVal,
};
```

### 2- Create Instance And Cached It In The Module File

```javascript
class Calculator {
  constructor(initialVal) {
    this.initialVal = initialVal;
  }
  increase(val) {
    this.initialVal += parseInt(val);
  }
  total() {
    return this.initialVal;
  }
}
module.exports = new Calculator(0);
```

### 3- Another Singleton Implementation

```javascript
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
```
