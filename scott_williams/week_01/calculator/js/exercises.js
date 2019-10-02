// # The Calculator
//
// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// - Bonus: Round the result so there are only two digits after the decimal.

const squareNumber = function(numberToSquare) {
  const squaredNumber = numberToSquare * numberToSquare; //square the parameter
  console.log(`The result of squaring the number ${ numberToSquare } is ${ squaredNumber }.`); //log a string like "The result of squaring the number 3 is 9."
  return squaredNumber;
}

squareNumber(3);

const halfNumber = function(numberToHalve) {
  const halvedNumber = numberToHalve / 2; //take one argument (a number), divide it by 2
  console.log(`Half of ${ numberToHalve } is ${ halvedNumber }.`);
  return halvedNumber;
}

halfNumber(5);

const percentOf = function(firstNumber, secondNumber) {
  const percentOfNumbers = firstNumber / secondNumber * 100; // take two numbers, figure out what percent the first number represents of the second number
  console.log(`${ firstNumber } is ${ percentOfNumbers}% of ${ secondNumber }.`);
  return percentOfNumbers;
}

percentOf(40, 20);

const areaOfCircle = function(theRadius) {
  const areaCircleCalculated = Math.PI * theRadius * theRadius; // calculate area based on radius: PI * r^2
  const areaCircleCalculatedRounded = (areaCircleCalculated.toFixed(2)); // Round the result so there are only two digits after the decimal
  console.log(`The area for a circle with radius ${ theRadius } is ${ areaCircleCalculatedRounded }.`);
  return areaCircleCalculatedRounded;
}

areaOfCircle(2);

// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).

const partTwoCalculator = function (numberEnter) {
  const half = halfNumber(numberEnter); //Take half of the number and store the result.
  const square = squareNumber(half); //Square the result of #1 and store that result.
  const areaC = areaOfCircle(square); //Calculate the area of a circle with the result of #2 as the radius.
  const finalAnswer = percentOf(areaC, square); //Calculate what percentage that area is of the squared result (#3)
  console.log(`The difficult calculation for finding the meaning of life equals ${ finalAnswer }.`);
  return finalAnswer;
}

partTwoCalculator(5);
