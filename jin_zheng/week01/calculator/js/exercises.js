// Homework - Week01 Day2 - The Calculator

// Part 1

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
function squareNumber(num) {
  const squareNum = num ** 2;
  console.log(`The result of squaring the number ${num} is ${squareNum}.`);
  return squareNum;
}

squareNumber(3);

const t1 = squareNumber(4); //test return
console.log("test: " + t1);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
function halfNumber(num) {
  const halfNum = num / 2;
  console.log(`Half of ${num} is ${halfNum}.`);
  return halfNum;
}

halfNumber(6);

const t2 = halfNumber(4); //test return
console.log("test: " + t2);

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
function percentOf(num1, num2) {
  const perc = Math.round((num1/num2) * 100);
  console.log(`${num1} is ${perc}% of ${num2}.`);
  return perc;
}

percentOf(4,7);
const t3 = percentOf(4,7); //test return
console.log("test: " + t3);

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
function areaOfCircle(radius) {
  const area = radius**2 * Math.PI;
  console.log(`The area for a circle with radius ${radius} is ${area}.`);
  return area;
}

areaOfCircle(3);

const t4 = areaOfCircle(4); //test return
console.log("test: " + t4);

// Bonus: Round the result so there are only two digits after the decimal.
function areaOfCircleBonus(radius) {
  const area = (radius**2 * Math.PI).toFixed(2)
  console.log(`The area for a circle with radius ${radius} is ${area}.`);
  return area;
}

areaOfCircleBonus(3);

const t5 = areaOfCircleBonus(4); //test return
console.log("test: " + t5);


// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//


function meaninglessFunc(num=8) {
  // Take half of the number and store the result.
  const len = halfNumber(num);
  // Square the result of #1 and store that result.
  const radius = squareNumber(len);
  // Calculate the area of a circle with the result of #2 as the radius.
  const circleArea = areaOfCircleBonus(radius);
  // Calculate what percentage that area is of the squared result (#3).
  const perc = percentOf(circleArea, radius);

  return perc
}

meaninglessFunc(10);

const t6 = meaninglessFunc(); //test return
console.log("test: " + t6);


// Strings
//
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
function DrEvil(amount=0) {
  if (typeof(amount) === "number" && amount >= 0) {
    newStr = `${amount} dollars`
    if (amount !== 1000000) {
      }
    else {
      newStr += ' (pinky)'
    }
  return newStr;
  }
  else if (typeof(amount) === "number" && amount < 0) {
    return "Please enter a positive number.";
  }
  else {
    return "Please enter a number.";
  }
}

console.log(DrEvil(10))
console.log(DrEvil(1000000))
console.log(DrEvil(-2))
console.log(DrEvil("uij"))
console.log(DrEvil())

// MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

function mixUp(str1, str2) {
  //assumption: the strings are at least 2 characters long
    const newStr1 = str2.slice(0,2) + str1.slice(2);
    const newStr2 = str1.slice(0,2) + str2.slice(2);
    return newStr1 + " " + newStr2;
}

console.log(mixUp('pod', 'mix'));
console.log(mixUp('dog', 'dinner'));
console.log(mixUp('a', 'orange'));
console.log(mixUp('sh', 'sxuw'));


// FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

function fixStart(str) {

  //assumption: Input is string type and the string is at least one character long.
  const re =  new RegExp(str[0],"gi");
  return str[0] + str.slice(1).replace(re, "*");
}

console.log(fixStart('babble'));
console.log(fixStart('Turtle'));
console.log(fixStart('Zack is sleepy, zzzzzzzzZZZZZZ'));

// Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming' ===> XXXXXXXXXXXX----INCORRECT
//   verbing('swimming'): 'swimmingly' ====> XXXXXXXXXXXX----INCORRECT
//   verbing('go'): 'go'

function verbing(str) {
  newStr = str
  if (str.length >= 3) {
    if (str.slice(-3) === 'ing') {
      newStr += 'ly';
    }
    else {
      newStr += 'ing';
    }
  }
  return newStr;
}

console.log(verbing('Sing'));
console.log(verbing('Si'));
console.log(verbing('Shin'));

// Not Bad
//
// Create a function called notBad that takes a single argument, a string.
//

function notBad(str) {

  const index1 = str.search(/not/i);
  const index2 = str.search(/bad/i);
  if (index1 !== -1 && index2 !== -1 && index1 < index2) {
    const patten = str.slice(index1, index2+3)
    const re =  new RegExp(patten,"gi");
    return str.replace(re, "good");
  }
  else {
  return str;
  }
}

console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));
console.log(notBad('This movie is not so bad! This movie is not so bad!'));
console.log(notBad('This movie is not so bad! This movie is not that bad!')); //bug to be solved
console.log(notBad('This movie is so bad, I will not watch it again!'));


// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
