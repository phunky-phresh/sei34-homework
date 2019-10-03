// Homework - Week01 Day4 - Geometry Function Lab
//
// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
const rectangleA = {
  length: 4,
  width: 4
}

function isSquare(ob) {
  return ob.length === ob.width;
}
function area(ob) {
  return ob.length*ob.width;
}
function perimeter(ob) {
  return (ob.length+ob.width)*2
}

console.log(isSquare(rectangleA));
console.log(area(rectangleA));
console.log(perimeter(rectangleA));




// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const triangleB = {
  sideA: 5,
  sideB: 9,
  sideC: 5
};

function isEquilateral(ob) {
  return (ob.sideA === ob.sideB && ob.sideA === ob.sideC )
}
function isIsosceles(ob) {
  return (ob.sideA === ob.sideB || ob.sideA === ob.sideC || ob.sideB === ob.sideC)
}

function areaTri(ob){
  const s = (ob.sideA + ob.sideB + ob.sideC)/2;
  return Math.sqrt(s*((s-ob.sideA)*(s-ob.sideB)*(s-ob.sideC))).toFixed(2)
}

function isObtuse(ob) {
  let ls =[ob.sideA, ob.sideB, ob.sideC];
  const max = Math.max(...ls)
  for (let i in ls) {
    if (ls[i] === max) {
      ls[i] = 1;
      break
    }
  }
    return max**2 > ls.sort().reduce(function(a,c) {
      return a + c**2
    })-1;
}






console.log('Equileteral A:' + isEquilateral(triangleA));
console.log('Isosceles A:' + isIsosceles(triangleA));
console.log('AreaTri A:' + areaTri(triangleA));
console.log('Obtuse A:' + isObtuse(triangleA));

console.log('Equileteral A:' + isEquilateral(triangleB));
console.log('Isosceles A:' + isIsosceles(triangleB));
console.log('AreaTri A:' + areaTri(triangleB));
console.log('Obtuse A:' + isObtuse(triangleB));

// The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// // Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
}

const shoppingList = {
  banana: "10.00",
  handkerchief: "5.00",
  Tshirt: "25.00",
}
//
// // Output
// cashRegister(cartForParty)); // 60.55

function cashRegister(cart) {
  let price = 0;
  for (let value in cart) {
    price += Number(cart[value]);
  }
  return price;
}

console.log(cashRegister(cartForParty));
console.log(cashRegister(shoppingList));







// Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//

function validateCreditCard(numStr) {

  //variable setup:

  let message = 'error: ';
  const num = numStr.replace(/-/g, '')
  const li = num.split('');
  const set = new Set(num);
  let sum = li.reduce(function(accumulator, currentValue) {
    return Number(accumulator) + Number(currentValue);
  })

  //rules messages:

  if (num.length !== 16) {
    message += '\nwrong length;'
  }
  if (isNaN(num)) {
    message += '\ncontains non-numbers;'
  }
  if (set.size === 1) {
    message += '\nsame digits'
  }
  if (Number(num.slice(-1))%2 !== 0) {
    message += '\nends with odd number'
  }
  if (sum <=  16) {
    message += '\nThe sum of all the digits must be greater than 16';
  }

  // the Luhn Algorithm  check
  let luhnSum = 0;
  for (let i = 0; i < 8; i++) {
    let digit = Number(li[i+1]);
    if (digit *2 < 10) {
      digit *= 2;
    }
    luhnSum += digit
  }
  if (luhnSum%10 !== 0) {
    message +='\nfail the Luhn algorithem'
  }
  console.log('LuhnSum: ' + luhnSum);
  return (message === 'error: ') ? "valid":message
}

console.log(validateCreditCard('6364-6666-6666-1166'));
console.log(validateCreditCard('9999-9999-8888-0400')); //valid
console.log(validateCreditCard('a923-3211-9c01-1112'));
console.log(validateCreditCard('4444-4444-4444-4444'));
console.log(validateCreditCard('1111-1111-1111-1110'));
console.log(validateCreditCard('6866-6666-6666-6861'));

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
//
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// Hint: Remove the dashed from the input string before checking if the input credit card number is valid.
//
// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }


// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.




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


function Account(num, name, bal) {
  this.accountNo = num;
  this.accountName = name;
  this.balance = Math.max(0 , bal);

  this.withdraw = function(amount){
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdraw: ${amount}. balance: ${this.balance}`);
    } else {
      console.log(`Insufficient fund.`);
    }

  };

  this.deposit = function(amount){
    this.balance += amount;
    console.log(`Deposit: ${amount}. balance: ${this.balance}`);
  }
}


function findAccount(num) {
  for (let i = 0; i < bank.accounts.length; i++) {
    if (num === bank.accounts[i].accountNo) {
      return i;
    }
  }
  return false;
}
// bank:
// array of accounts
// addAccount: method
// transfer: method
let bank = {
  accounts: [],

  addAccount: function (num, name, bal = 0) {
    if (findAccount(num) === false) {
      newAccount = new Account(num, name, bal);
      this.accounts.push (newAccount);
      console.log(`Account ${num} is created.`);
    } else {
      console.log('AccountNo is not available.');
    }
  },


  transfer: function (fromAcc1, toAcc2, amount) {
    const acc1 = this.accounts[findAccount(fromAcc1)];
    const acc2 = this.accounts[findAccount(toAcc2)];
    if (findAccount(fromAcc1)!== false && findAccount(toAcc2)!== false) {
      if (amount <= acc1.balance) {
        console.log(`Account ${ acc1.accountNo }'s balance: ${ acc1.balance }. \nAccount ${ acc2.accountNo }'s balance: ${ acc2.balance }.`);
        acc1.balance -= amount;
        acc2.balance += amount;
        console.log(`Successful transfer.\nAccount ${ acc1.accountNo }'s balance: ${ acc1.balance }. \nAccount ${ acc2.accountNo }'s balance: ${ acc2.balance }.`);
      } else {
        console.log("Insufficient fund.");
      }
    } else {
      console.log("Invalid account.");
    }
  }
}


// test


bank.addAccount(1, "JK", 200);
bank.addAccount(2, "Jl", 100);
bank.addAccount(3, "Jp", 100);
bank.addAccount(1, "i", 200); // AccountNo is not available.

const test = new Account (4,"pi",100)
test.withdraw(20);
test.withdraw(100); //Insufficient fund.
test.deposit(100);


//bank.transfer(002, 001, 10);
console.log(findAccount(001));
console.log(findAccount(004)); //false
console.log(findAccount(002));


console.log(bank.transfer(001,003,10));
console.log(bank.transfer(002,003,200));//Insufficient fund
console.log(bank.transfer(002,004,50));//Invalid account.



// Tips
//
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
//
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// Additional
//
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.
