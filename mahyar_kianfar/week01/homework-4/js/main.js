// Geometry Function Lab
// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// const rectangleA = {
//   length: 4,
//   width: 4

const isSquare = function(length, width) {
  if (length === width) {

  }
}


const areCal = function(length, width) {
  const area = length * width;
  return area;
}

const rectangleA = {
  length: 4,
  width: 4
};
const perimeterCal = function(rectangleA) {
  const perimeter = 2 * (rectangleA.length * rectangleA.width);
  return perimeter;
}

//   Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };

const triangleA = {
  sideA: 4,
  sideB: 3,
  sideC: 5,
  //height: 10
};
const isEquilateral = function() {
  if (triangleA.sideA === triangleA.sideB && triangleA.sideA === triangleA.sideC &&
    triangleA.sideB === triangleA.sideC) {
    console.log("equilateral");
  } else {
    return 'not';
  }
}

const isIsosceles = function() {
  if ((triangleA.sideA && triangleA.sideB) > triangleA.sideC) {
    console.log("isIsosceles");
  } else {
    return "not a isIsosceles"
  }
}
const triangleArea = function() {
  var perimeter = (triangleA.sideA + triangleA.sideB + triangleA.sideB) / 2;
  if ((triangleA.sideA > triangleA.sideB) && (triangleA.sideA > triangleA.sideC)) {
    var base = triangleA.sideA;
  } else if ((triangleA.sideB > triangleA.sideA) && (triangleA.sideB > triangleA.sideC)) {
    var base = triangleA.sideB;
  } else {
    var base = triangleA.sideC;
    const area = (perimeter * base) / 2;
    return area;
  }

}

// The Cash Register
// Write a function called cashRegister that takes a shopping
//cart object. The object contains item names and prices
//(itemName: itemPrice). The function should return the total price of the shopping cart. Example
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
};

const cashRegister = function() {
  //const price = Object.value(cartForParty);
  var totalPrice = 0;
  for (var prices in cartForParty) {
    var total = Number(cartForParty[prices]);
    totalPrice += total;
  }
  console.log(totalPrice);
  //
  //const totalPrice =
}

/*Credit Card Validation
You're starting your own credit card business. You've come up with a new way to validate credit
cards with a simple function called validateCreditCard that returns true or false.

Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16
The following credit card numbers are valid:

9999-9999-8888-0000
6666-6666-6666-1666
The following credit card numbers are invalid:

a923-3211-9c01-1112 invalid characters
4444-4444-4444-4444 only one type of number
1111-1111-1111-1110 sum less than 16
6666-6666-6666-6661 odd final number
Example
validateCreditCard('9999-9999-8888-0000'); // Returns: true
Hint: Remove the dashed from the input string before checking if
the input credit card number is valid.

Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is

{ valid: true, number: 'a923-3211-9c01-1112' }
{ valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
Double Bonus: Make your credit card scheme even more advanced!
 What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date!
Check out the Luhn Algorithm for inspiration.*/

const CreditCardValidation = function(cardNumber) {
  var total = 0;
  var deleteDash = cardNumber.slice(0, 4) + cardNumber.slice(5, 9) + cardNumber.slice(10, 14) + cardNumber.slice(15, 19);
  const lastisNotEven = deleteDash[deleteDash.length - 1];
  for (var i = 0; i < deleteDash.length; i++) {
    var sum1 = parseInt(deleteDash[i]);
    total += sum1;
    console.log(deleteDash.length);
    console.log(deleteDash);

    if ((deleteDash[i] != deleteDash[i + 1]))

    {
      //(isNaN(deleteDash))
      //(deleteDash.split('').every(char => char === deleteDash[0]))
      //(deleteDash.length > 16)
      //&& ((lastisNotEven % 2) !==0 )
      //(total < 16) &&  (deleteDash.length > 16) &&  (total < 16))
      return true;

    } else {
      return false;
    }
  }

}


// if (cardNumber.length > 19) {
//     console.log('fail');
// }if(isNaN(cardNumber)){
//   console.log("is not number");}{

// var lastEven =   cardNumber[cardNumber.length - 1 ];
// if ((lastEven % 2) !==0 ) {
//   console.log('lastEven');






function functionName(string) {
  if (((string.split('').every(char => char === string[0])))) {
    return true;
  } else {
    return false;
  }


}