// credit card length must be === 16
// sum of numbers < 16
// final number must be even

const validateCreditCard = function(number) {
  //console.log(number.toString());
  //first remove hiphens from string. then convert to a number.
    var card = number.replace(/-/g, ""); //removes hiphens from number
    //console.log(newStr);
    let cardNumber = Number(card);
    // console.log(cardNumber);
    let cardLast = card.slice(-1); //grabs last value on string
    let cardEven = Number.isInteger(cardLast/2); //checks if cardLast is even or odd
    let numberArray = card.split('', 16); //could use for new set and check for duplicates
      // console.log(numberArray);
      // for (let i = 0;numberArray.length > i; i++)
      // // console.log(numberArray[i]);
      // if (numberArray[i] === numberArray[15]) {
      //   console.log(false);
      // }
    // let cardNumber = numberArray.map(returnInt);
    // console.log(cardNumber);

    //find sum of numbers (check if greater than 16)
    let sum = 0
    for (let i = 0; card.length > i; i++) {
      sum = sum + Number(card[i]);
    }
    // comparisons
    if (card.length === 16) {
      var length = true;
    } if (cardEven === true){
      var lastNum = true;
    } if (sum > 16 === true){
      var cardSum = true;
    } if (length === true && lastNum === true && cardSum  === true) {
        // return true;
      // console.log(`Your Credit Card ${number} is valid.`);
      const validCard = {}
        validCard.valid = "true";
        validCard.number = `${number}`;
        return validCard;
    }

    else {
      console.log("Please Check: 1. Card number is 16 digits long. 2. Card number has at least two different numbers. 3. Final digit must be even. 4. Card number sum is greater than 16")


    // } if (card.endsWith()) {
    //
    // }
    // let cardNumber = Number(card); // changes string to number
    // console.log(cardNumber);
  }
}
  // if (number.length === 16) { //convert numbers to string for length
  //   return true;
  // } else {
  //   return false;
  // }
// }

console.log(validateCreditCard("9999-6666-8888-0002"));
validateCreditCard("9999-6666-8888-000");
validateCreditCard("1111-1111-1111-1110");
validateCreditCard("1111-1111-1111-1113");
console.log(validateCreditCard("1111-1111-1111-1116"));
// validateCreditCard("6666-6666-6666-6666");
