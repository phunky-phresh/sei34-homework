
const rectangleA = {
  length: 4 ,
  width: 4
  }

  const isSquare = function (recatangle) {
    if (rectangle.length === rectangle.width){
    return "the rectangle is square";
    }
    else {
      return "rectangle not square";
    }
  }

  const calcArea = function (rectangle) {
  let areaTotal = rectangle.length * recatangle.width);
  return areaTotal;
  }

  const calcPerimeter = function (rectangle) {
  let perimeter = rectangle.length * 2 + recatangle.width * 2;
  return perimeter;
  }



  const triangleA = {
    sideA: 7,
    sideB: 5,
    sideC: 4,
  }:

const isEquilateral = function (triangle) {
  const sides = Object.values(triangle); //get each side into an Array
  const newSides = Array.from(new Set (sides)); //makes new array without duplicates

  if (newSides.length===1) { //if array only has one element, then all sides are the same
    return "triangle is equilateral"
  }
  else {
    return "the triangle is not equilateral"
  }
}

console.log(isEquilateral(triangleA));

const isIsosceles = function (triangle) {
  const sides = Object.values(triangle); //get each side into an Array
  const newSides = Array.from(new Set (sides)); //makes new array without duplicates

  if (newSides.length===2) { //if array only has one element, then all sides are the same
    return "triangle is isosceles";
  }
  else {
    return "the triangle is not isosceles";
  }
}

console.log(isIsosceles(triangleA));

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function (cart) {
  let sum = 0; //initalise the final sum
  for (let i = 0; i < Objects.keys(cart).length; i==) {
    sum += Number(Object.values (cart)[i]); //add the value (converted to a number) to sum
  }
  return sum;
}

// Output
console.log(cashRegister(cartForParty)); // 60.55

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




function validateCreditCard(creditCardNum){

// Number must be 16 digits,
if (creditCardNum.length !==16) {
  return false;
}

//all of them must be numbers

for (var i = 0; i<creditCardNum.length; i++) {
  //store the current digit
  var currentNumber = creditCardNum[i];

  //turn the digiti from a string to an interger
  currentNumber = Number.parseInt(currentNumber);

  // check that the digit is a number
if (!Number.isInteger(currentNumber)){
  return false;
  }
}

// You must have at least two different digits represented (all of the digits cannot be the same)

var obj = {};
for (var i = 0; i < creditCardNum.length; i++) {
  obj [creditCardNum[i]] = true;
}
if (Object.keys(obj).length<2) {
  return false;
}

// The final digit must be even
if (creditCardNum[creditCardNum.length-1] % 2 !==0 ) {
  return false;
}
var sum = 0;
for (var i = 0; i < creditCardNum.length; i++) {
  sum += Number(creditCardNum[i]);
  }
if (sum<=16) {
  return false;
  }
return true;
};

console.log(validateCreditCard('9999777788880000')); //true
console.log(validateCreditCard('6666666666661666')); //true
console.log(validateCreditCard('a92332119c011112')); //false
console.log(validateCreditCard('4444444444444444')); //false
console.log(validateCreditCard('1111111111111110')); //true
console.log(validateCreditCard('6666666666666661')); //false
