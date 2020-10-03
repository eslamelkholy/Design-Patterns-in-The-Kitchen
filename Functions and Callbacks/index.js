// 1- Function is First-Class Citizen
// That means Function Treated as Variable
const calc = () => 3 * 4;

const number = calc();

console.log(number);

// 2- CallBack >> is a Function Called inside another Function
const calc2 = () => 4 * 4;

const printCalc = (cb) => {
  console.log(cb());
};

printCalc(calc2);
