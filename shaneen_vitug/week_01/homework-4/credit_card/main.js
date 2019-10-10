// # Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate
//credit cards with a simple function called validateCreditCard that returns true or false.

const validateCreditCard = function (creditCardNumber) {
  if (typeof creditCardNumber != "string") {
    return false;
  }
  const regex = /-/g
  let noDash = creditCardNumber.replace(regex, "");   //remove dash
  const isDigitsSixteen = noDash.length === 16;   //check length is 16 -- 1st condition
  // Number.isNan(noDash) === false; // 2nd condition if all are numbers
  const set = new Set (noDash); //atleast 2 different digits
  const isDifferentDigits = set.size > 1; // 3rd condition
  const isFinalDigitEven = Number(noDash.split("")[15]) % 2 === 0; // final digit is even -- 4th condition
  const isSumGreaterThanSixteen = noDash.split("").map(Number).reduce((a, c) => a + c);    //reduce function -- last condition
  return (
    isDigitsSixteen &&
    !Number.isNaN(noDash) &&
    isDifferentDigits &&
    isFinalDigitEven &&
    isSumGreaterThanSixteen > 16
  );
};

// totalSum: () => {
//     const sumOfAccounts = bank.accounts.reduce((accumulator, currentValue) => {
//       return accumulator + currentValue.currentBal
//     }, 0);

// Here are the rules for a valid number:
//
// - Number must be 16 digits, **all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
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
// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.
//
// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// ```
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```
//
// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
