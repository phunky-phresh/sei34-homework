
// Geometry Function Lab
//
// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// const rectangleA = {
//   length: 4,
//   width: 4
// };

const rectangle = {
  length: 4,
  width: 12
}

function isSquare(input) {
  if (input.length === input.width) {
    console.log("square");
  } else {console.log("not a square");
  }
}

function area(input) {
  console.log(input.length * input.width);
}

function perimeter(input) {
  console.log(input.length + input.length + input.width + input.width);
}

// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

const triangleA = {
  sideA: 4,
  sideB: 4,
  sideC: 5
};

const triangleB = {
  sideA: 4,
  sideB: 4,
  sideC: 4
};

const triangleC = {
  sideA: 4,
  sideB: 6,
  sideC: 9
};

function isEquilateral (input) {
  // All sides same length
  if (input.sideA === input.sideB) {
    if (input.sideB === input.sideC ) {
      console.log("Equilateral");
    } else {console.log("Not equilateral")}
  } else {console.log("Not equilateral")}

}

function isIsosceles (input) {
  //At least two sides equal
  if (input.sideA === input.sideB || input.sideA === input.sideC || input.sideC === input.sideB) {
    console.log("Isosceles");
  } else (console.log("Not isosceles"))
}

function areaTriangle (input) {
  //Herons formual is A = sqrt( s * (s - a) * (s - b) * (s - c))
  //where s = (a + b + c) / 2
  let a = input.sideA;
  let b = input.sideB;
  let c = input.sideC;
  let s = (a + b + c) / 2;
  let areaRad = Math.sqrt(s*(s-a)*(s-b)*(s-c));
  console.log(area);
}

function isObtuse (input) {
  //cosine rule to determine each angle, then check if any above 90 degrees or pi/2 radians
  //Math.PI returns pi
  //C = Arccos ((a2 + b2 - c2) / 2ab) where C is the angle between lines a & b
  //Math.acos() returns in radians
  let a = input.sideA;
  let b = input.sideB;
  let c = input.sideC;

  let cAngleRad = Math.acos( (a**2 + b**2 - c**2) / (2 * a * b) );
  let cAngle = cAngleRad * 180 / Math.PI;

  let aAngleRad = Math.acos( (c**2 + b**2 - a**2) / (2 * c * b) );
  let aAngle = aAngleRad * 180 / Math.PI;

  let bAngleRad = Math.acos( (a**2 + c**2 - b**2) / (2 * a * c) );
  let bAngle = bAngleRad * 180 / Math.PI;

  if (aAngle > 90 || bAngle > 90 || cAngle > 90) {
    console.log("Is Obtuse");
  } else {
    console.log("Is not obtuse");
  }
}

// The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
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
// Output
// cashRegister(cartForParty)); // 60.55

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

function cashRegister(input) {
  let valueList = Object.values(input);
  let tally = 0;
  for (let i = 0; i < valueList.length; i++) {
    tally += Number (valueList[i]); 
  }
}

// Homework: Credit Card Validation
// You're starting your own credit card business. You need to come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
//
// 9999777788880000
// 6666666666661666
// The following credit card numbers are invalid:
//
// a92332119c011112 invalid characters
// 4444444444444444 only one type of number
// 1111111111111110 sum less than 16
// 6666666666666661 odd final number
// In order to run the function, you'll need to know how to load javascript on an HTML page. From there, you will open your developer console to call the function.
//
//
// Bonus #1: A valid credit card number may also contain dashes, to make a card number easier to read. For example, the following credit card numbers are now also valid:
//
// 9999-7777-8888-0000
// 6666-6666-6666-1666
// Update your program to allow such numbers. (Hint: Remove the dashes from the input string before checking if the input credit card number is valid.)
//

// Bonus #2: Return an object indicating whether the credit card is valid, and if not, what the error is
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
//
// Bonus #3: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
//

function validateCreditCard(cardNumber) {

  cardNumber = cardNumber.split("");

  for (let i = 0; i < cardNumber.length; i++) {
    if (cardNumber[i] === "-") {
      cardNumber.splice(i,1);
      i--
    }
  }

  let outputObject = {
    valid: false,
    number: cardNumber.join(""),
    errors: [],
  }

  if (validateSixteenDigits(cardNumber) == false ) outputObject.errors.push("The card is not 16 digits long.");
  if (validateMoreThanOneNum(cardNumber) == false ) outputObject.errors.push("The card needs more than one type of number.");
  if (validateSumGreaterThanSixteen(cardNumber) == false ) outputObject.errors.push("The sum of digits is less than 16.");
  if (validateFinalNumber(cardNumber) == false ) outputObject.errors.push("The final card number is not even.");

  if (outputObject.errors.length === 0) outputObject.valid = true;

  console.log(outputObject);

}

function validateSixteenDigits(cardNumber) {
  if(cardNumber.length === 16) {
    for (let i = 0; i < cardNumber.length; i++) {
      if (cardNumber[i]%1 === 0) return true;
    }
    return false;
  }
  return false;
}

function validateMoreThanOneNum(cardNumber) {
  for (let i = 0; i < cardNumber.length - 1; i++) {
    if (cardNumber[i] != cardNumber[i+1]) {
      return true;
    }
  }
  return false;
}

function validateSumGreaterThanSixteen(cardNumber) {
  let runningSum = Number (0);
  for (let i = 0; i < cardNumber.length; i++) {
    runningSum += Number (cardNumber[i]);
  }
  if (runningSum > 16) {
    return true;
  } else {
    return false;
  }
}

function validateFinalNumber(cardNumber) {
  let stringyCardNumber = cardNumber.toString();
  let finalDigit = cardNumber[cardNumber.length-1];
  if (finalDigit%2 === 0) return true;
  return false;
}



// JavaScript Bank
//
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
//
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips
//
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
//
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.

let accounts = [
  {
    name: "Chris",
    balance: 200,
  },
  {
    name: "Simon",
    balance: 600,
  },
  {
    name: "John",
    balance: 1200,
  },
];

function accountAdd(name, startingBalance) {
  let newAccount = {name: name, balance: startingBalance};
  accounts.push(newAccount);
}

function deposit(name, value) {
  //find correct arrayItem, to then know which balance to update, will only find first instance of name
  let accountId = 0;
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].name === name) {
      accountId = i;
      break;
    }
  }
  accounts[accountId].balance += value;;
  console.log(`${accounts[accountId].name} has deposited \$${value} to reach a new account balance of \$${accounts[accountId].balance}`);
}

function withdraw(name, value) {
  //find correct arrayItem, to then know which balance to update, will only find first instance of name
  let accountId = 0;
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].name === name) {
      accountId = i;
      break;
    }
  }
  if (accounts[accountId].balance >= value) {
    accounts[accountId].balance -= value;;
    console.log(`${accounts[accountId].name} has withdrawn \$${value} to reach a new account balance of \$${accounts[accountId].balance}`);
  } else {
    console.log("You do not have a sufficient balance.");
  }
}

function transfer(outgoingName, incomingName, value) {
  //find correct arrayItem, to then know which balance to update, will only find first instance of name
  let outgoingAccountId = 0;
  let incomingAccountId = 0;
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].name === outgoingName) {
      outgoingAccountId = i;
      break;
    }
  }
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].name === incomingName) {
      incomingAccountId = i;
      break;
    }
  }
  if (accounts[outgoingAccountId].balance >= value) {
    accounts[outgoingAccountId].balance -= value;
    accounts[incomingAccountId].balance += value;
    console.log(`${accounts[outgoingAccountId].name} has transfered \$${value} to ${accounts[incomingAccountId].name} to reach a new account balance for ${accounts[outgoingAccountId].name} of \$${accounts[outgoingAccountId].balance} and ${accounts[incomingAccountId].name} of \$${accounts[incomingAccountId].balance}`);
  } else {
    console.log("You do not have a sufficient balance.");
  }
}

//story
console.log("Mark wants to create a new account with $1000");
accountAdd("Mark",1000);
console.log(accounts);
console.log("Chris then withdraws $50");
withdraw("Chris",50);
console.log("Simon then doposits $500, and immediately transfers it to John");
deposit("Simon", 500);
transfer("Simon", "John", 500);
console.log("The final state of things is:");
console.log(accounts);
