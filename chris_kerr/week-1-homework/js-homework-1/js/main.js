// The Calculator
//
// Part 1
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
//
// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

function squareNumber (inputNum1) {
  let outputNum = inputNum1 ** 2;
  outputNum = outputNum.toFixed(2);
  console.log("The result of squaring the number " + inputNum1 + " is " + outputNum);
  return outputNum;
}

function halfNumber (inputNum2) {
  let outputNum = inputNum2 / 2;
  outputNum = outputNum.toFixed(2);
  console.log("Half of " + inputNum2 + " is " + outputNum);
  return outputNum;
}

function percentOf (inputNum3, inputNum4) {
  let outputNum = inputNum3 / inputNum4 * 100;
  outputNum = outputNum.toFixed(2);
  console.log(inputNum3 + " is " + outputNum + "% of " + inputNum4);
  return outputNum;
}

function areaOfCircle (inputNum5) {    //inputNum here is radius
  let outputNum = 3.14 * inputNum5 * inputNum5;
  outputNum = outputNum.toFixed(2);
  console.log("The area of a circle radius " + inputNum5 + " is " + outputNum);
  return outputNum;
}

let squareNumberOutput;
let halfNumberOutput;
let percentOfOutput;
let areaOfCircleOutput;

function combinedCalculator () {
  inputNum = document.getElementById("inputNum").value;
  halfNumberOutput = halfNumber(inputNum);
  squareNumberOutput = squareNumber(halfNumberOutput);
  areaOfCircleOutput = areaOfCircle(squareNumberOutput);
  percentOfOutput = percentOf(areaOfCircleOutput,squareNumberOutput);

  //console.log(halfNumberOutput);
  //console.log(squareNumberOutput);

}
