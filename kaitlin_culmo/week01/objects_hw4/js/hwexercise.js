// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following functions:
//
// HELP ****** isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle
//
// ```javascript
// const rectangleA = {
//   length: 4,
//   width: 4
// };
// ```
const rectangleA = {
  length: 4,
  width:4
}

const rectangleB = {
  length: 8,
  width:4
}

const isSquare = function ( rectangle ) {
  //console.log( rectangle.width );
  if (rectangle.length === rectangle.width) {
    console.log('I am a square');
  } else {
    console.log('I am not a square');
  }
}
isSquare( rectangleA );
isSquare( rectangleB );

  console.log('rectangle area:', rectangleA.length * rectangleA.width );
  console.log('rectangle perimeter:',(rectangleA.length * 2) + (rectangleA.width * 2) );



//
// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not
//
// ```javascript
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// ```

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
}


const isEquilateral = function ( triangle ) {
  if (triangle.sideA === triangle.sideB === triangle.sideC) {
    console.log( 'I am equilateral' );
  } else {
    console.log( 'I am not equilateral' );
  }
}

isEquilateral( triangleA );

const isIsosceles = function ( triangle ) {
  if (triangle.sideB === triangle.sideC) { //how do i do this so all sides (A,B,C) are considered
    console.log( 'I am isosceles' );
  } else {
    console.log( 'I am not isosceles' );
  }
}

isIsosceles( triangleA );


//console.log('triangle area:', triangleA.sideA * triangleA.sideB * triangleA.sideC );

const areaTriangle = function( triangle ) {
  const a = triangle.sideA;
  const b = triangle.sideB;
  const c = triangle.sideC;
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s-a) * (s-b) * (s-c));
  return area;
}
console.log('area of triangle is', areaTriangle(triangleA) );


const isObtuse = function ( triangle ) {
  const a = triangle.sideA;
  const b = triangle.sideB;
  const c = triangle.sideC;
  const condition1 = (c < a + b);
  const condition2 = ((c * c) > (a * a) + (b * b));
  if ( condition1 && condition2 ) {
    console.log( 'This triangle is obtuse' );
  } else {
    console.log( 'This triangle is not obtuse ');
  }
}

isObtuse( triangleA );


// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object
// contains item names and prices (itemName: itemPrice). The function should return the
// total price of the shopping cart.
// Example
//
//
// // Input
// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// // Output
// cashRegister(cartForParty)); // 60.55

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
}

const cashRegister = function ( invoice ) { //grab all the values
  let total = 0;
  const price = Object.values( invoice );
  for (let i = 0; i < price.length; i++) {   //console.log( prices[i] );
  const floatPrice = parseFloat(price[i])
  total = total + floatPrice;
  }
  return total;
}

console.log(cashRegister( cartForParty ) );

// Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way
// to validate credit cards with a simple function called validateCreditCard that
// returns true or false.
//
// Here are the rules for a valid number:
//
// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits
//   cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16
//
// The following credit card numbers are valid:
//
// - `9999-9999-8888-0000`
// - `6666-6666-6666-1666`
//
// The following credit card numbers are invalid:
//
// - `a923-3211-9c01-1112` invalid characters
// - `4444-4444-4444-4444` only one type of number
// - `1111-1111-1111-1110` sum less than 16
// - `6666-6666-6666-6661` odd final number
//
// ## Example
// ```
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.

function validateCreditCard ( cardNumber ) {

  cardNumber = cardNumber.split("");

  for (let i = 0; i < cardNumber.length; i++)
    if (cardNumber[i] === "-") {
      cardNumber.splice(i, 1);
      i--
    }
}

let outputObject = {
  valid: false,
  number: cardNumber.join(""),
  errors: [],
}

if ( validateSixteenDigits(cardNumber) === false ) outputObject.errors.push("The card is not 16 digits long.")
if ( validateTwoOrMoreDigits (cardNumber) === false ) outputObject.errors.push("The card is not 2 or more digits.")
if ( validateFinalDigitEven (cardNumber) === false ) outputObject.errors.push("The card does not end in even digit.")
if ( validateSumSixteen (cardNumber) === false ) outputObject.errors.push("The sum does not equal 16.")

if (outputObject.errors.length === 0) outputObject.valid = true;

console.log(outputObject);

function validateSixteenDigits( cardNumber ) {
  if (cardNumber.length === 16) {
    for (let i = 0; i < cardNumber.length; i++) {
      if (cardNumber[i]%1 === 0) return true;
    }
    return false;
  }
  return false;
}

function validateTwoOrMoreDigits ( cardNumber ) {
  for (let i = 0; i < cardNumber.length - 1; i++)
  if (cardNumber[i] != cardNumber[i+1]) {
    return true;
  }
  return false;
}


function validateSumSixteen( cardNumber ) {

}
//
// }
