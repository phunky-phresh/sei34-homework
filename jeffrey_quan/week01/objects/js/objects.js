console.log("Working! Homework - Objects");

// Day 4 - Thursday, 3 October 2019

// https://gist.github.com/wofockham/dacf2da17c743afb2b17#file-js-homework-4-md
//
// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following
//functions:
//
// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle
//
// ```javascript
const rectangleA = {
  length: 4,
  width: 4
};

const rectangleB = {
  length: 5,
  width: 9
};
// ```

const isSquare = function(rectangle) {
  if (rectangle.length === rectangle.width) {
    return true;
  }
  return false;
};

console.log(isSquare(rectangleA));
console.log(isSquare(rectangleB));

// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following
// functions:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not
//
// ```javascript
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const triangleB = {
  sideA: 6,
  sideB: 6,
  sideC: 6
};

const triangleC = {
  sideA: 7,
  sideB: 14,
  sideC: 9
};
// ```

const isEquilateral = function(triangle) {
  if (triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC) {
    return true;
  }
  return false;
}

console.log(isEquilateral(triangleA));
console.log(isEquilateral(triangleB));
console.log(isEquilateral(triangleC));

const isIsosceles = function(triangle) {
  if (triangle.sideA === triangle.sideB || triangle.sideB === triangle.sideC || triangle.sideA === triangle.sideC) {
    return true;
  }
  return false;
}

console.log(isIsosceles(triangleA));
console.log(isIsosceles(triangleB));
console.log(isIsosceles(triangleC));

const area = function(triangle) {
  const halfPerimeter = (triangle.sideA + triangle.sideB + triangle.sideC)/2;
  const areaOfTriangle = Math.sqrt(halfPerimeter * triangle.sideA * triangle.sideB * triangle.sideC);
  return areaOfTriangle;
};

console.log(area(triangleA));
console.log(area(triangleB));
console.log(area(triangleC));

// https://www.mathopenref.com/heronsformula.html

const isObtuse = function(triangle) {

  // Pythagoras' theorem
  const squaredSideA = triangle.sideA ** 2;
  const squaredSideB = triangle.sideB ** 2;
  const squaredSideC = triangle.sideC ** 2;
  const squaredLongestSide = Math.max(squaredSideA, squaredSideB, squaredSideC);

  const sumOfSquaredShorterSides = (squaredSideA + squaredSideB + squaredSideC) - squaredLongestSide;

  if (squaredLongestSide > sumOfSquaredShorterSides) {
    return true;
  }
  return false;
};

console.log(isObtuse(triangleA));
console.log(isObtuse(triangleB));
console.log(isObtuse(triangleC));

// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object
// contains item names and prices (itemName: itemPrice). The function should return the
// total price of the shopping cart.
// Example
//
// ```
// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

//
// // Output
// cashRegister(cartForParty)); // 60.55
// ```

const groceryCart = {
  apple: "12.55",
  chips: "4.20",
  juice: "6.71",
  chocolate: "40.30"
}
//
// // Output
// cashRegister(groceryCart)); // 63.76
// ```

const cashRegister = function(cart) {
  let totalPrice = 0;
  const items = Object.keys(cart);

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const price = cart[item];
    totalPrice += parseFloat(price);
  }
  return totalPrice;
};

console.log(cashRegister(cartForParty));
console.log(cashRegister(groceryCart));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat

// # Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate
// credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be
//   the same)
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
// ```
//
// *Hint*: Remove the dashed from the input string before checking if the input credit card
// number is valid.
//
// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what
// the error is
//
// ```
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```
//
// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and
// what are some numbers that pass or fail? Ideas: check expiration date! Check out the
// Luhn Algorithm for inspiration.

const validateCreditCard = function(cardNumber) {

  // object that logs the status of the credit card being validated
  const ccStatus = {
    number: '',
    valid: false,
    error:'',
    giveStatus: function() {
      console.log(`valid: ${ this.valid }, number: ${ this.number }, error: ${ this.error }`)
    }
  };

  // stores number in credit card status object
  ccStatus.number = cardNumber;

  // assuming all credit card numbers are in the following format 'xxxx-xxxx-xxxx-xxxx'
  // check if credit card is 16 characters + 3 (accounting for -) = 19 characters exploring

  if (cardNumber.length !== 19) {
    ccStatus.error = 'Invalid length. Credit card number must be 16 numbers long.';
    ccStatus.giveStatus();
    return false;
  }

  // log the credit card into an array without the '-'
  let creditCardNumber = [];

  const creditCardNoArray = cardNumber.split('');

  for (i = 0; i < creditCardNoArray.length; i++) {
    if (creditCardNoArray[i] !== '-') {
      creditCardNumber.push(creditCardNoArray[i]);
    }
  }

  // Ana used a while loop with replace('-','') to get rid of the '-'
  // Number can also be used to convert a string to a number?

  // // credit card must be 16 digits long
  // if (creditCardNumber.length !== 16) {
  //   ccStatus.error = 'Invalid length. Credit card number must be 16 numbers long.';
  //   ccStatus.giveStatus();
  //   return false;
  // }

  // check if all characters are numbers
  for (let i = 0; i < creditCardNumber.length; i++) {
    if (isNaN(parseInt(creditCardNumber[i]))) {
      ccStatus.error = 'Invalid character/s. Must be all digits.';
      ccStatus.giveStatus();
      return false;
    }
  }
  // check if all characters are not the same
  let countIdenticalDigits = 0;

  for (let i = 0; i < creditCardNumber.length; i++) {
    if (creditCardNumber[i] === creditCardNumber[0]) {
      countIdenticalDigits += 1;
    }
  }

  if (countIdenticalDigits === 16){
    ccStatus.error = 'Invalid. All digits cannot be the same.';
    ccStatus.giveStatus();
    return false;
  }
  // Ana used Array.from(net Set(array)) to check if there are identical digits
  // Set does not include duplicates

  // check if final digit is even
  if (parseInt(creditCardNumber[creditCardNumber.length - 1]) % 2 !== 0) {
    ccStatus.error = 'Invalid last digit. Must be even.';
    ccStatus.giveStatus();
    return false;
  }

  // check if the sum of all the digits is greater than 16
  let sumOfDigits = 0;

  for (let i = 0; i < creditCardNumber.length; i++) {
    sumOfDigits += parseInt(creditCardNumber[i]);
  }

  if (sumOfDigits <= 16) {
    ccStatus.error = 'Invalid sum of digits. Must be greater than 16.';
    ccStatus.giveStatus();
    return false;
  }

  // if all checks pass, credit card is valid
  ccStatus.valid = true;
  delete ccStatus.error;
  console.log(`valid: ${ ccStatus.valid }, number: ${ ccStatus.number }`);
  return true;

};

validateCreditCard('9282-2323-3233-111'); // invalid length
validateCreditCard('92a2-b3f3-32e3-1114'); // invalid characters
validateCreditCard('3231-0393-4994-1114'); // valid
validateCreditCard('1111-1111-1111-1111'); // invalid since all digts are the same
validateCreditCard('2111-1111-1111-1110'); // invalid since sum of digits not > 16
validateCreditCard('2121-1211-1111-1110'); // valid
validateCreditCard('fiji-ferer-vrrr-berr'); // invalid length

// contains 16 digits although not formatted like the others
// invalid since last digit is not even
validateCreditCard('093-2-30230-122-9903');

validateCreditCard('0933-0230-1224-9902'); // valid


// # JavaScript Bank
//
// In this homework, you'll create a basic `bank` in Javascript. The bank has many
// `accounts` and the following capabilities that you need to write.
//
// #### Bank
//
// There is only one bank. This bank has an array of accounts. The bank needs a method that
// will return the total sum of money in the accounts. It also needs an `addAccount` method
// that will enroll a new account at the bank and add it to the array of accounts. There is
// no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common
// functionality.
//
// #### Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or
// withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values --
// you may also have your functions `console.log()` values to help you see your code
// working.
//
// You should write a basic story through a series of JavaScript commands that shows that
// the methods do indeed work as expected: add some accounts, show the total balance, make
// some deposits and withdrawals, show the new total balance.
//
// ### Tips
//
// Don't overthink this. Shorter code is probably the answer.
//
// ## Bonus
//
// - Ensure that the accounts cannot have negative values.
// - Write a 'transfer' on the bank that allows you to transfer amounts between two
// accounts.

const bank = {
  accounts: [
    {
      owner: 'David',
      balance: 10000
    },
    {
      owner: 'John',
      balance: 5000
    },
    {
      owner: 'Matt',
      balance: 200
    }
  ],

  addAccount: function(name, amount) {
    let names = [];

    // logs all the current account names
    for (let i = 0; i < this.accounts.length; i++) {
      names.push(this.accounts[i].owner);
    }

    // formats name so that it is title case, which is how all the account names are formatted
    const formattedName = name[0].toUpperCase() + name.substring(1).toLowerCase();

    // cannot create accounts with the same name
    if (names.includes(formattedName)) {
      console.log(`Unsuccessful. Cound not add "${ name }" account since it already exists.`);
      return false;
    }

    // cannot create accounts with negative balance
    if (amount < 0) {
      console.log(`Unsuccessful. Cannot add account for "${ name }" because balance is negative.`)
      return false;
    }

    // create object with details of new account
    const newAccount = {
      owner: name,
      balance: amount
    };

    // add new account to the accounts array
    this.accounts.push(newAccount);
    console.log(`"${ name }" account successfully added with a balance of $${ amount }.`);
    return true;
  },

  findAccount: function(name) {

    // this function is to find the index of the account in the accounts array
    let indexOfAccount = 0;
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].owner === name) {
        indexOfAccount = i;
      }
    }
    return indexOfAccount;
  },

  // shows all the accounts including their balances
  showAllAccounts: function() {
    for (let i = 0; i < this.accounts.length; i++) {
      const accountName = this.accounts[i].owner;
      const accountBalance = this.accounts[i].balance;
      console.log(`Name: ${ accountName }, Balance: $${ accountBalance }`);
    }
    this.totalBalance();
  },

  withdraw: function(name, amount) {
    const index = this.findAccount(name);
    const currentBalance = this.accounts[index].balance;

    // can only withdraw a positve amount
    if (amount < 0) {
      console.log(`Cannot withdraw a negative amount.`);
      return false;
    }

    // can only withrdaw if the amount is less than balance in account
    if (amount <= currentBalance) {
      this.accounts[index].balance -= amount;
      const newBalanceAfterWithdraw = this.accounts[index].balance;
      console.log(`Current balance for "${ name }" account is $${ currentBalance }. Successfully withdrew $${ amount }. New balance: $${ newBalanceAfterWithdraw }.`);
      return true;
    } else {
      console.log(`Insufficient funds to withdraw $${ amount } from "${ name }".`);
      return false;
    }
  },

  // can only deposit positive amounts
  deposit: function(name, amount) {
    const index = this.findAccount(name);
    const currentBalance = this.accounts[index].balance;
    if (amount > 0) {
      this.accounts[index].balance += amount;
      const newBalanceAfterDeposit = this.accounts[index].balance;
      console.log(`Current balance for "${ name }" is $${ currentBalance }. Successfully deposited $${ amount }. New balance: $${ newBalanceAfterDeposit }.`);
      return true;
    } else {
      console.log(`Amount to deposit must be positive.`);
      return false;
    }
  },

  transfer: function(accountFrom, amount, accountTo) {
    const indexOfTransferFromAcc = this.findAccount(accountFrom);
    const indexOfTransferToAcc = this.findAccount(accountTo);
    const transferFromBalance = this.accounts[indexOfTransferFromAcc].balance;
    const transferToBalance = this.accounts[indexOfTransferToAcc].balance;

    // can only transfer amount if sufficient balance in the 'from' account
    if (amount > 0 && amount <= transferFromBalance) {
      this.accounts[indexOfTransferFromAcc].balance -= amount;
      const newBalance = this.accounts[indexOfTransferFromAcc].balance;
      this.accounts[indexOfTransferToAcc].balance += amount;
      console.log(`Successfully transferred $${ amount } from "${ accountFrom }" to "${ accountTo }". "${ accountFrom }" account, new balance: $${ newBalance }.`);
      return true;
    } else {
      console.log(`"${ accountFrom }" account has insufficient funds to transfer $${ amount } to "${ accountTo }" account. Current balance: $${ transferFromBalance }.`);
      return false;
    }
  },

  // gives the balance for a selected account
  giveBalance: function(name) {
    const index = findAccount(name);
    const balanceForAccount = this.accounts[index].balance;
    console.log(`Balance for "${ name } account is $${ balanceForAccount }.`)
    return balance;
  },

  // finds the sum of all the balances in the accounts in the bank
  totalBalance: function() {
    let totalSum = 0;
    for (let i = 0; i < this.accounts.length; i++) {
      totalSum += this.accounts[i].balance;
    }
    console.log(`Total balance in the bank is $${ totalSum }.`);
    return totalSum;
  }
};

bank.showAllAccounts(); // shows three accounts
bank.addAccount('Ben', -92); // cannot add account with negative balance
bank.addAccount('Max', 400); // successfully added
bank.addAccount('JOhn', 50000); // cannot create this account since John already exists
bank.showAllAccounts(); // now shows four accounts
bank.withdraw('John', 500);
bank.deposit('David', 2500);
bank.showAllAccounts(); // shows updated balances (see John and David)
bank.transfer('Max', 500, 'Matt'); // unsuccessful since balance for Max is below $500
bank.transfer('Max', 100, 'Matt');
bank.showAllAccounts(); // shows updated balances (see Max and Matt)

// ## Additional
//
// Begin exploring the [JavaScript Koans](https://github.com/liammclennan/JavaScript-Koans).
// Fork, clone and start trying them.
