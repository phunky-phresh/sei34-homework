
const squareNumber = function (numberSQ) {
  const  numberSquared = numberSQ * numberSQ;
  console.log(`The result of squaring the number ${numberSQ} is ${numberSquared}`);
  return numberSquared;
};
squareNumber(3);


const halfNumber = function (numberHalf) {
  const resultHalf = numberHalf / 2;
  console.log(`Half of ${numberHalf} is ${resultHalf}`)
  return resultHalf;
};
halfNumber(10);

const percentOf = function (num1, num2) {
  const division = num1 / num2;
  const resultPercent = division * 100;
  console.log (`${num1} is ${resultPercent}% of ${num2}`)
  return resultPercent;
};
percentOf(5,10);

const areaOfCircle = function (radius) {
  const totalArea = Math.PI * radius * radius
  const totalAreaTwoDP = totalArea.toFixed(2);
  console.log (`The area for a circle with radius ${radius} is ${totalAreaTwoDP}`);
  return totalAreaTwoDP;
}
areaOfCircle(2);

// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).


const partBCalc = function (num3) {
  const resultA = halfNumber(num3)
  const resultB = squareNumber(resultA);
  const resultC = areaOfCircle(resultB);
  const resultD = percentOf(resultC,resultB);//coming with NaN
  console.log(resultD);
};

  partBCalc(5);
