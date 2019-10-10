// Geometry Function Lab
// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following
// functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle


const rectangleA = {
 length: 5,
 width: 4,
};

const isSquare = function(rectangle) {
  if(rectangle.length === rectangle.width) {
    return "The rectangle is a square.";    //rectangle + "etc etc" doesnt work becasue it cant concatenate the object with a string. When passing an object it doesnt give its name, but instead its contents.
  } else {
    return "The rectangle is not a square.";
  }
}

const areaRectangle = function(rectangle) {
  const area = rectangle.length * rectangle.width;
  return area;
}

const perimeterRectangle = function(rectangle) {
  const perimeter = 2 * rectangle.length + 2 * rectangle.width;
  return perimeter;
}


console.log(isSquare(rectangleA));
console.log("Rectangle area is", areaRectangle(rectangleA));
console.log("Rectangle perimeter is", perimeterRectangle(rectangleA));






console.log("");
// Part 2, Triangle
// Given the following a triangle object like the one below, write the following
//functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not


const triangleA = {
  sideA: 7,
  sideB: 5,
  sideC: 4,
};


const isEquilateral = function(triangle) {
  const sides = Object.values(triangle); //get each side value into an array
  const newSides = Array.from(new Set(sides)); // makes a new array without duplicates

  if (newSides.length === 1) { //if array only has one element, then all sides are the same
    return "The triangle is equilateral.";
  }
  else {
    return "The triangle is not equilateral.";
  }
}

console.log(isEquilateral(triangleA));








const isIsosceles = function(triangle) {
  const sides = Object.values(triangle); //get each side value into an array
  const newSides = Array.from(new Set(sides)); // makes a new array without duplicates

  if (newSides.length === 2) { //if only one duplicate it means only two sides are equal and not all three
    return "The triangle is isosceles.";
  }
  else {
    return "The triangle is not isosceles.";
  }
}

console.log(isIsosceles(triangleA));









const areaTriangle = function(triangle) {
  const a = triangle.sideA; //get value of each side to simplify
  const b = triangle.sideB;
  const c = triangle.sideC;
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s-a) * (s-b) * (s-c));
  return area;
}

console.log(areaTriangle(triangleA));









//function power of 2 => to simplify later
const p2 = function(number) {
  return Math.pow(number, 2);
}


const isObtuse = function(triangle) {
  let sides = Object.values(triangle); //array with sides values
  sides.sort(); //order sides by value
  const a = sides[0];
  const b = sides[1];
  const c = sides[2];
  if (p2(c) > (p2(a) + p2(b)) && c < (a+b)) { //has to fulfill these two expressions
    return "The triangle is obtuse.";
  }
  else {
    return "The triangle is not obtuse.";
  }
}

console.log(isObtuse(triangleA));








console.log("");
// The Cash Register
// Write a function called cashRegister that takes a shopping cart object.
// The object contains item names and prices (itemName: itemPrice).
// The function should return the total price of the shopping cart. Example

// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};


const cashRegister = function(cart) {
  let sum = 0; // initialize the final sum
  for (let i = 0; i < Object.keys(cart).length; i++) { //for each of the properties
    sum += Number(Object.values(cart)[i]); //add the value (converted to number) to sum
  }
  return sum;
}

console.log(cashRegister(cartForParty)); // 60.55










console.log("");

// Homework: Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to
// validate credit cards with a simple function called validateCreditCard that
//returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
//
// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number


// Example
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// Hint: Remove the dashed from the input string before checking if the input credit
//  card number is valid.
//
// Bonus: Return an object indicating whether the credit card is valid, and if not,
// what the error is
//
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// Double Bonus: Make your credit card scheme even more advanced! What are the rules,
// and what are some numbers that pass or fail? Ideas: check expiration date!
// Check out the Luhn Algorithm for inspiration.




// const myCard = {
//   number: "4237-8423-8948-9378",
//   valid: true,
//   expirationDate: "08/18",
//   error: "",
// }

const myCard = {
  number: "1111-1111-1111-11c6",
  valid: true,
  expirationDate: "08/21",
  error: "",
}


const validateCreditCard = function(card) {
  let cardNumber = card.number;
  while (cardNumber.includes('-')) {  //remove dashes from card number
    cardNumber = cardNumber.replace('-', '');
  }

  if (cardNumber.length !== 16) {   //check if right length
    card.error += "Number has the wrong length. ";
    card.valid = false;
  }

  newCardNumber = Number(cardNumber); // make the string of numbers be a number
  if (typeof(newCardNumber) !== "number") {
    card.error += "Card number is not a number. ";
    card.valid = false;
  }

  let sum = 0; // initialize the final sum
  const cardNumberArray = [];
  for (let i = 0; i < cardNumber.length; i++) { //for each of the digits
    sum += Number(cardNumber[i]); //add the value (converted to number) to sum
    cardNumberArray[i] = cardNumber[i];
  }

  if (sum < 16) {
    card.error += "Invalid card number. "; //sum digits has to be >= 16
    card.valid = false;
  }

  if (Number(cardNumberArray[cardNumberArray.length -1]) % 2 !== 0) { //last digit has to be even
    card.error += "Invalid last digit. ";
    card.valid = false;
  }

  const uniqueNumber = Array.from(new Set(cardNumberArray)); //card has to have more than 1 type of digit
  if (uniqueNumber.length === 1) {
    card.error += "Invalid card number. ";
    card.valid = false;
  }

  // Check expiration date statement goes here

  return card;
}

console.log(validateCreditCard(myCard));










console.log("");
// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many
// accounts and the following capabilities that you need to write.
//
// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method
// that will return the total sum of money in the accounts. It also needs an addAccount
// method that will enroll a new account at the bank and add it to the array of accounts.
// There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common
// functionality.
//
// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or
// withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values --
// you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows
// that the methods do indeed work as expected: add some accounts, show the total balance,
// make some deposits and withdrawals, show the new total balance.
//
// Tips
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.


// functions:
// transferBetweenAccounts
//


const bank = [
  {ownerName: "John Doe", balance: 1000},
  {ownerName: "Mary Joana", balance: 5600},
  {ownerName: "Peter Rabbit", balance: 490},
  {ownerName: "Popeye", balance: 30},
]



const addAccount = function(name, value) {
  bank.push({ownerName: name, balance: value});
  console.log("New account created:", bank[bank.length-1]);
}


const showBalance = function(name) {
  for (let i = 0; i < bank.length; i++) {
    if (bank[i].ownerName === name) {
      console.log(`${name}'s current balance is ${bank[i].balance} dollars.`);
    }
  }
}


const deposit = function(name, value) {
  for (let i = 0; i < bank.length; i++) {
    if (bank[i].ownerName === name) {
      bank[i].balance += value;
      console.log("Deposit successful.");
      return showBalance(name);
    }
  }
}


const withdraw = function(name, value) {
  for (let i = 0; i < bank.length; i++) {
    if (bank[i].ownerName === name) {
      if (bank[i].balance - value < 0){
        console.log("Not enough balance.");
        console.log(showBalance(name));
        return false;
      } else {
        bank[i].balance -= value;
        console.log("Withdraw successful.");
        console.log(showBalance(name));
        return true;
      }
    }
  }
}



const transfer = function(from, to, value) {
  withdraw(from, value) && deposit(to, value);
}




addAccount("Jo Bo", 50);
console.log('');
showBalance("Peter Rabbit");
console.log('');
deposit("Mary Joana", 250);
console.log('');
withdraw("Popeye", 35);
console.log('');
transfer("Peter Rabbit", "Popeye", 1000);
