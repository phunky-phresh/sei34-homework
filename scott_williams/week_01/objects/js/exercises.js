// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following functions:
//
// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle
//
// ```javascript
// const rectangleA = {
//   length: 4,
//   width: 4
// };
// ```
//


// declare the object
const rectangleA = {
  length: 4,
  width: 5
};

// isSquare function returns true if rectangle is a square
const isSquare = function( shape ) {
  // get the values from the keys of the object 'shape' and put them in variables
  const length = shape.length;
  const width = shape.width;
  // use logic statement to determine if true or false for the two sides to be equal, and therefore a square.
  return length === width;
}

// returns the area of a rectangle
const area = function ( shape ) {
  // get the values from the keys of the object 'shape' and put them in variables
  const length = shape.length;
  const width = shape.width;
  // calculate the area
  return length * width;
}

// // returns the perimert of a rectangle
const perimeter = function ( shape ) {
  // get the values from the keys of the object 'shape' and put them in variables
  const length = shape.length;
  const width = shape.width;
  // calculate the perimeter
  return (length + width) * 2;
}

// console log running of above functions
console.log( `Is this rectangle a square?`, isSquare( rectangleA ) );
console.log( `The area of the rectangle is:`, area( rectangleA ) );
console.log( `The perimeter of the rectangle is:`, perimeter( rectangleA ) );

// ### Part 2, Triangle *****************************
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

// declare the triangle object
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

// create a function to determine if the triangle object only has three entries
const testTriangle = function ( shape ) {
  // convert the object of item values to an array. This will make it easy to count the number of entries in the object
  const objectToArray = Object.values( shape );
  const numberOfProperties = objectToArray.length;
  // console.log( numberOfProperties );
  // if the object does not have 3 sides, console log a message
  if ( numberOfProperties !== 3 ) {
    console.log(`This is not a triangle. It has ${ numberOfProperties } sides.`);
    return numberOfProperties !== 3;
  };
}


// isEquilateral returns if all sides of triangle are equal length
const isEquilateral = function ( shape ) {
  // run a function to ensure object on has three entries
  testTriangle ( shape );

  const side1 = shape.sideA;
  const side2 = shape.sideB;
  const side3 = shape.sideC;
  // use logic statement to determine if true or false for all sides to be equal, and therefore an equliateral triangle.
  return ( ( side1 === side2 ) && ( side2 === side3 ) );
  // below is old code that I had used before I realised how to shorten the true/false without an if statement.
  // if  ( side1 === side2 ) && ( side2 === side3 ) ) {
  //    return true;
  //    } else {
  //    return false;
  //    }
}

// isIsoscele returns if two sides are of equal length
const isIsoscele = function ( shape ) {
  // run a function to ensure object on has three entries
  testTriangle ( shape );

  const side1 = shape.sideA;
  const side2 = shape.sideB;
  const side3 = shape.sideC;
  if ( ( side1 === side2 ) || ( side2 === side3 ) || ( side1 === side3 ) ) {
    return true;
  } else {
    return false;
  }
}

// areaTriangle returns the area of the triangle
const areaTriangle = function ( shape ) {
  // run a function to ensure object on has three entries
  testTriangle ( shape );

  const side1 = shape.sideA;
  const side2 = shape.sideB;
  const side3 = shape.sideC;
  // Heron's formula to calculate area of triangle
  const semiPerimeter = ( ( side1 + side2 + side3 ) / 2);
  const areaSquared = ( semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3) );
  const area = Math.sqrt( areaSquared );

  // call the function roundNumber to round the area
  return roundNumber ( area );
}

// function to round a number to two decimal places
const roundNumber = function ( num ) {
  const numFixed = num.toFixed(2); // when you round to two decimal palces, the number becomes a string
  const convertedNum = Number.parseFloat ( numFixed );// convert the string back to a number
  return convertedNum
}

// isObtuse determines if the triangle is obtuse or not
const isObtuse = function ( shape ) {
  // run a function to ensure object on has three entries
  testTriangle ( shape );

  const sideOne = shape.sideA;
  const sideTwo = shape.sideB;
  const sideThree = shape.sideC;

  // Use Pythagorean Theorem to determine if a triangle is acute, right or obtuse. If a^2 + b^2 < c^2 it is obtuse if the formula is true, with 'c' being the longest side

    //create squared numbers
    const oneSquared = Math.pow(sideOne, 2);
    const twoSquared = Math.pow(sideTwo, 2);
    const threeSquared = Math.pow(sideThree, 2);

  if ( sideOne > sideTwo && sideOne > sideThree ) {
      // sideOne must be the longest side
      if ( ( twoSquared + threeSquared ) < oneSquared ) {
        return true;
      } else {
        return false;
      }
    } else if ( sideTwo > sideOne && sideTwo > sideThree ) {
      // sideTwo must be the longest side
      if ( ( oneSquared + threeSquared ) < twoSquared ) {
        return true
      } else {
        return false;
      }
    } else {
      // sideThree must be the longest side
      if ( ( oneSquared + twoSquared ) < threeSquared ) {
        return true
      } else {
        return false;
      }
    }
} // end of isObtuse function

console.log( `Is the triangle an equliateral?`, isEquilateral( triangleA ) );
console.log( `Is the triangle an isosceles?`, isIsoscele( triangleA ) );
console.log( `The area of the triangle is:`, areaTriangle( triangleA ) );
console.log( `Is the triangle obtuse?`, isObtuse( triangleA ) );

// # The Cash Register **************************
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example
//
// ```
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
// ```

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function ( price ) {
  // start with an empty trolley by declaring the variable. It needs to be a 'let' variable since it will be getting updated
  let trolley = 0;
  // convert the object of item values to an array. This will make it easy to loop through and add up the cost of the shopping cart
  const objectToArray = Object.values( price );
  // loop through the shopping cart items
  for ( let i = 0; i < objectToArray.length; i++ ) {
    // for each array item, change to number format and add their value to the trolley
    trolley += Number.parseFloat ( objectToArray[i] );
  }
  return trolley;
}

console.log( cashRegister( cartForParty ) );

// Homework: Credit Card Validation ****************
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

console.log("CREDIT CARD");

// declare the function
const validateCreditCard = function( cardNumber ) {

    // Before we start, let's convert the number to a string to then create a repeat number to confirm if all digits are the same
    const cardString = cardNumber.toString(); // change number to string
    const firstString = cardString.charAt(0); // grab the first digit of string
    const repeatString = firstString.padEnd(16, firstString); // repeat first string digit 16 digits. You will use this to come to cardString to determine if all digits are same as first digit.
    const lastNumber = Number.parseFloat( cardString[15] ); // turn last digit of string back into a number so you can later use the number in the modulus operator to determine if the last digit is even or odd

    if ( !Number.isInteger( cardNumber ) ) { // validation one: must be an integer number
      console.log("Error1");
      return false;
    } else if ( cardString.length !== 16 ) { // validation two: must be 16 digits
      console.log("Error2");
      return false;
    } else if ( cardString === repeatString ) {
      console.log("Error3");
      return false;
    } else if ( lastNumber % 2 !== 0 ) {
      console.log("Error4");
      return false;
    } else {
      return true;
    }
}

const creditCardTest1 = 7777777777777778;

console.log( validateCreditCard( creditCardTest1 ) );



// ******************************
// Bonus #1: A valid credit card number may also contain dashes, to make a card number easier to read. For example, the following credit card numbers are now also valid:
//
// 9999-7777-8888-0000
// 6666-6666-6666-1666
// Update your program to allow such numbers. (Hint: Remove the dashes from the input string before checking if the input credit card number is valid.)

console.log("BONUS #1");

const dashRemover = function ( cardNumber ) {
  console.log( Number.parseInt( cardNumber ) );
  console.log("tt");
  // determine if cardNumber is an integer
  if ( Number.parseInt( cardNumber ) ) {
    return;
  }
  console.log("test");
  // now that we have established that the cardNumber is not an integer
  const cardString = cardNumber.toString(); // change number to string
  // loop through each digit of the string
  for ( let i = 0; i < cardNumber.length; i++ ) {
    // look for the "-" character

    // test
    console.log( cardString[i]);
    if ( cardString[i] !== "-" ) {
      cardNumber = cardString[i]
    }
  }
}

const validateCreditCardBonus = function( cardNumber ) {
    // add the function check for "-" in number and if so, remove them.
    dashRemover ( cardNumber );

    // Before we start, let's convert the number to a string to then create a repeat number to confirm if all digits are the same
    const cardString = cardNumber.toString(); // change number to string
    const firstString = cardString.charAt(0); // grab the first digit of string
    const repeatString = firstString.padEnd(16, firstString); // repeat first string digit 16 digits. You will use this to come to cardString to determine if all digits are same as first digit.
    const lastNumber = Number.parseFloat( cardString[15] ); // turn last digit of string back into a number so you can later use the number in the modulus operator to determine if the last digit is even or odd

    if ( !Number.isInteger( cardNumber ) ) { // validation one: must be an integer number
      console.log("Error1");
      return false;
    } else if ( cardString.length !== 16 ) { // validation two: must be 16 digits
      console.log("Error2");
      return false;
    } else if ( cardString === repeatString ) {
      console.log("Error3");
      return false;
    } else if ( lastNumber % 2 !== 0 ) {
      console.log("Error4");
      return false;
    } else {
      return true;
    }
}

const creditCardTest2 = "7777-7777-7777-7778";

console.log( validateCreditCardBonus( creditCardTest2 ) );


// ******************************
// Bonus #2: Return an object indicating whether the credit card is valid, and if not, what the error is
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
//

/******

SW
Need to declare an object.
Need to add items to object as I go along
Need to console.log the object at the end

********/


// Bonus #3: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

// # JavaScript Bank *************************
//
// In this homework, you'll create a basic `bank` in Javascript. The bank has many `accounts` and the following capabilities that you need to write.
//
// #### Bank
//
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an `addAccount` method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// #### Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions `console.log()` values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//

console.log("BIG BANK");

/// define a varaible to hold the account name you are looking at
const thisAccount = "Darth Vadar";

const addAccount1 = {
  name: "Darth Vadar",
  amount: 55
}

const deposit1 = {
  name: "Darth Vadar",
  amount: 100
}

const withdrawal1 = {
  name: "Darth Vadar",
  amount: 5,
}

const transfer1 = {
  from: "Darth Vadar",
  to: "Jane Walker",
  amount: 20
}

const bigBank = {
  accounts: [
              {
                accountName: "John Smith",
                currentBalance: 10.37,
              },
              {
                accountName: "Jane Walker",
                currentBalance: 40.00,

              },
              {
                accountName: "Han Solo",
                currentBalance: 23.10,
              }
            ],
  total: function () { /// method to total all accounts in bank
        /// establis the return variable for the total
        let totalBalance = 0;
        /// loop through the accounts, adding up the balances
        for ( let i = 0; i < this.accounts.length; i++ ){
          totalBalance += this.accounts[i].currentBalance;
          }
        return totalBalance;
  }, // end method for total sum of money in the accounts
  addAccount: function ( add ) { /// method to add a new account
        /// loop through to test if accountName already exists
        const newAccountName = add.name;
        const newAmount = add.amount;
        for ( let i = 0; i < this.accounts.length; i++ ) {
          if ( newAccountName == this.accounts[i].accountName) {
            return `This account name \"${ newAccountName }\" already exists. Please pick a different account name.`;
            }
          }
        this.accounts.push( {accountName: newAccountName, currentBalance: newAmount} );
        const indexNewAccount = this.accounts.length -1;
        return this.accounts[indexNewAccount].currentBalance;
  }, // end method to add an account
  makeDeposit: function ( depositTransaction ) {
      const accName = depositTransaction.name;
      const deposit = depositTransaction.amount;
      let newBal = 0;
      /// loop through to find accountName
      for ( let i = 0; i < this.accounts.length; i++ ) {
        if ( accName === this.accounts[i].accountName ){
          // console.log("Winner");
          this.accounts[i].currentBalance += deposit;
          newBal = this.accounts[i].currentBalance;
        }
      }
      return newBal;
  }, // end method to make deposit
  makeWithdrawal: function ( withdraw ) {
      const accName = withdraw.name;
      const withdrawal = withdraw.amount;
      let newBal = 0;
      /// loop through to find accountName
      for ( let i = 0; i < this.accounts.length; i++ ) {
        if ( accName === this.accounts[i].accountName ) {
            /// confirm there is enough money to withdraw before making withdrawal
            if ( this.accounts[i].currentBalance > withdrawal ) {
              this.accounts[i].currentBalance -= withdrawal;
              newBal = this.accounts[i].currentBalance;
            } else {
              console.log(`You do not have enough funds to make a withdrawal of ${ withdrawal}. You only have ${ this.accounts[i].currentBalance } in your account.`);
            }
        }
      }
      return newBal;
  }, // end method to make withdrawal
  accountBal: function ( accName ) {
    for ( let i = 0; i < this.accounts.length; i++ ) {
      if (accName === this.accounts[i].accountName) {
        // thisAccount = accName;
        return this.accounts[i].currentBalance;
      }
    }
  }, // end method to find out current balance of an account
  transfer: function ( transfer ) {
    const accName1 = transfer.from;
    const accName2 = transfer.to;
    const trfAmount = transfer.amount;

    let indexFromAccount = false;
    let indexToAccount = false;
    for ( let i = 0; i < this.accounts.length; i++ ) {
      if (accName1 === this.accounts[i].accountName) {
        indexFromAccount = i;
      }
      if (accName2 === this.accounts[i].accountName) {
        indexToAccount = i;
      }
    }
    if (indexFromAccount === false ) {
      console.log("Transfer from account does not exist.");
      return;
    }
    if (indexToAccount === -1 ) {
      console.log("Transfer to account does not exist.");
      return;
    }
    // console.log( "test",accName1 );
    // console.log( trfAmount );
    withdrawalTrans = {
      name: accName1,
      amount: trfAmount
    }
    depositTrans = {
      name: accName2,
      amount: trfAmount
    }
    this.makeWithdrawal( withdrawalTrans );
    this.makeDeposit( depositTrans );
  }
} // end object bigBank

// Console log the total of all accounts by running the total method
console.log( `Total of all accounts is: $${bigBank.total()}.` );

// add a new account to the bank by Darth Vadar for $55
console.log( `New account opened by ${ addAccount1.name } for $${ bigBank.addAccount( addAccount1 )}.`);
console.log( `Total of all accounts is: $${ bigBank.total() }.` );

// make a deposit into an account
console.log( `${deposit1.name} makes a $${deposit1.amount} deposit. His new balance is $${ bigBank.makeDeposit( deposit1 ) }.` );
console.log( `Total of all accounts is: $${bigBank.total()}` );

// make a withdrawal of an account
console.log(`${withdrawal1.name} needs money for the Death Star. He withdraws $${withdrawal1.amount}. His new balance is $${bigBank.makeWithdrawal ( withdrawal1 )}.` );
console.log( `Total of all accounts is: $${bigBank.total()}` );
console.log(`The bank balance of ${ thisAccount } is: $${bigBank.accountBal( thisAccount )}.`);


// make a transfer between accounts
console.log(`${ transfer1.from } attempts to transfer $${ transfer1.amount } to ${ transfer1.to }.` );
console.log(`${ transfer1.from} had a bank balance of $${ bigBank.accountBal( transfer1.from )}`);
console.log(`${ transfer1.to} had a bank balance of $${ bigBank.accountBal( transfer1.to )}`);
bigBank.transfer( transfer1 );
console.log(`The revised bank of ${transfer1.from} is $${ bigBank.accountBal ( transfer1.from ) }.` );
console.log(`The revised bank balance of ${transfer1.to} is $${ bigBank.accountBal ( transfer1.to )}.`);
console.log( `Total of all accounts is: $${bigBank.total()}` );



// ### Tips
//
// Don't overthink this. Shorter code is probably the answer.
//
// ## Bonus
//
// - Ensure that the accounts cannot have negative values.
// - Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
//
// ## Additional
//
// Begin exploring the [JavaScript Koans](https://github.com/liammclennan/JavaScript-Koans). Fork, clone and start trying them.
//

/// Amanda's answer code
// const bigBank = {
//   accounts: [
//               {
//                 accountName: "John Smith",
//                 currentBalance: 10.37,
//                 // method depost money - see below
//                 // method withdraw money
//               },
//               {
//                 accountName: "Jane Walker",
//                 currentBalance: 40.00,
// ​
//               },
//               {
//                 accountName: "Han Solo",
//                 currentBalance: 23.10,
// ​
//               }
//             ],
//   showTotalBalance: function(){
// 	// you were on the right track here!!
// 	// Declare the totalBalance outside the for loop
//       let totalBalance = 0;
// 	  // when you're inside an object we use "this" to refer to itself
// 	  // instead of "bigBank.accounts" we use "this.accounts"
//       for ( let i = 0; i < this.accounts.length; i++ ){
//         totalBalance += this.accounts[i].currentBalance;
//       }
//       return totalBalance;
//   }, // method for total sum of money in the accounts
//   addAccount: function () {
// ​
//   }, // method to add an account
//   makeDeposit: function( accountName, amount ){
// 	// instead of creating a makeDeposit method for each account
// 	// create a makeDeposit() for the whole bank object and
// 	// pass in the the accountName to find the right account
// 	// prior to adding $$$
//
//     // 1. find correct account using accountName
// ​
//     // 2. add amount to currentBalance
// ​
// ​
//   },
//   makeWithdraw: function(){
// ​
//   },
// }; // end of bigBank
// ​
// console.log('total balance', bigBank.showTotalBalance());
// console.log('makeDeposit', bigBank.makeDeposit("Jane Walker", 100));
