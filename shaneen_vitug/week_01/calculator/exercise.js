//Try and fix the console.log it repeats multiple times for some functions


//Part1
const squareNumber = function (number) {
  const result = Math.sqrt(number).toFixed(2);
  console.log(`The result of squaring the number ${number} is ${result}.`);
  return result;
};

squareNumber(8);

const halfNumber = function (number) {
  const result = (number / 2).toFixed(2);
  console.log(`Half of ${number} is ${result}.`);
  return result;
};

halfNumber(8);

const percentOf = function (num1, num2) {
  const result = ((num1 / num2) * 100).toFixed(2);
  console.log(`${num1} is ${result}% of ${num2}.`);
  return result;
};

percentOf(8, 27);

const areaOfCircle = function (radius) {
  const result = (Math.PI * radius * radius).toFixed(2);
  console.log(`The area for a circle with radius ${radius} is ${result}.`);
  return result;
};

areaOfCircle(8);

//Part2
const specialFunction = function (number) {
  const result = percentOf(areaOfCircle(squareNumber(halfNumber(number))), squareNumber(halfNumber(number)));
  console.log(`The result of the number ${number} using this special function is ${result}`);
  return result;
};

specialFunction(8);
