console.log("Working! Homework - Calculator");

// Week 1, Day 2
// Day 2 - Tuesday, 1 October 2019

// https://gist.github.com/wofockham/8f953ac7f33125898071

// The Calculator

// Part 1
// Write a function called squareNumber that will take one argument (a number),
// square that number, and return the result. It should also log a string like
// "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2,
// and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the
// first number represents of the second number, and return the result.
// It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius),
// calculate the area based on that, and return the result. It should also log a string like:
// "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

const squareNumber = function (number) {
  const squaredNumber = number * number;
  console.log(`The result of squaring the number ${ number } is ${ squaredNumber }.`);
  return squaredNumber;
};

const halfNumber = function (number) {
  const halfOfNumber = number / 2;
  console.log(`Half of ${ number } is ${ halfOfNumber }.`);
  return halfOfNumber;
};

const percentOf = function (num1, num2) {
  const percentage = (num1 / num2) * 100;
  console.log(`${ num1 } is ${ percentage }% of ${ num2 }.`);
  return percentage;
};

const areaOfCircle = function (radius) {
  const area = Math.PI * radius * radius;
  console.log(`The area of a circle with radius ${ radius } is ${ area.toFixed(2) }.`);
  return area.toFixed(2);
};

squareNumber(2);
halfNumber(10);
percentOf(2,4);
areaOfCircle(10);

// Part 2
// Write a function that will take one argument (a number) and perform the following
// operations, using the functions you wrote earlier:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result(#3).

const multipleMathFunctions = function (number) {
  const halfNum = halfNumber(number);
  const squareOfNum = squareNumber(halfNum);
  const areaCircle = areaOfCircle(squareOfNum);
  const percent = percentOf(areaCircle, squareOfNum);
};

multipleMathFunctions(2);
