//PART 1

const squareNumber = function(num) {
  const square = num * num;
  console.log(`The square of ${num} is ${square}.`);
  return square;
};
//squareNumber(16);

const halfNumber = function(num) {
  const half = num / 2;
  console.log(`Half of ${num} is ${half}.`);
  return half;
};
//halfNumber(6);

const percentOf = function(first, second) {
  const percent = Math.round(first / second * 100);
  console.log(`${first} is ${percent}% of ${second}.`);
  return percent;
};
//percentOf(4,8);

const areaOfCircle = function(radius) {
  const area = Math.PI * radius * radius;
  const areaRounded = area.toFixed(2);
  console.log(`Circle with radius ${radius} has area ${areaRounded}`);
  return areaRounded;
};
//areaOfCircle(2);

//PART 2
const allTogetherNow = function(num) {
  const halfNum = halfNumber(num);
  const squared = squareNumber(halfNum);
  const circleArea = areaOfCircle(squared);
  const perc = percentOf(circleArea, squared);
  console.log(`Answer is ${perc}%`);
  return perc;
};
//allTogetherNow(4);
