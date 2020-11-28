// Calculator Using Cached
const calcObject1 = require("./SingletonUsingModuleCached");
const calcObject2 = require("./SingletonUsingModuleCached");

calcObject1.increase(5);
calcObject2.increase(5);

console.log(calcObject1.total());
