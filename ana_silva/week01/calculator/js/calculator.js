// The Calculator
// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).



//PART 1
const squareNumber = function(number) {
  squareResult = number ** 2;
  console.log(`The result of squaring the number ${number} is ${squareResult}.`);
  return squareResult;
}

squareNumber(2);

const halfNumber = function(number) {
  halfResult = number / 2;
  console.log(`Half of ${number} is ${halfResult}.`);
  return halfResult;
}

halfNumber(6);

const percentOf = function(number1, number2) {
  fractionResult = Math.round(number1 / number2 * 100);
  console.log(`${number1} is ${fractionResult}% of ${number2}.`);
  return fractionResult;
}

percentOf(4, 9);


const areaOfCircle = function(radius) {
  areaResult = Math.PI * radius ** 2;
  console.log(`The area for a circle with radius ${radius} is ${areaResult.toFixed(2)}.`);
  return areaResult.toFixed(2);
}

areaOfCircle(2);


//PART 2

// const areaPercentage = percentOf (squareNumber(areaOfCircle(squareNumber(halfNumber(number)))), areaOfCircle(squareNumber(halfNumber(number))));

const areaPercentage = function (number) {
  const f1 = halfNumber(number);
  const f2 = squareNumber(f1);
  const f3 = areaOfCircle(f2);
  const f4 = percentOf(f3, squareNumber(f3));
};

areaPercentage(4);
