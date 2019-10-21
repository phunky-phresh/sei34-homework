// //Array and Functions Bonus Material
// //
// const maxOfTwoNumbers = function(num1, num2) {
//   if (num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// }
// console.log(maxOfTwoNumbers(4,15));
// console.log(maxOfTwoNumbers(33,5));
//
// const maxOfThree = function(num1, num2, num3) {
//   if (num1 > num2 && num1 > num3) {
//     return num1;
//   } else if (num2 > num1 && num2 > num3) {
//     return num2;
//   } else {
//     return num3;
//   }
// }
//
// console.log(maxOfThree(20,30,15));
//
//
// const vowelFinder = function(letter) {
//   const array = ["a", "e", "i", "o", "u"];
//   for (let i = 0; i < array.length; i++) {
//   if(array[i] === letter){
//     return true;
//   }
//   }
//   return false;
// }
// console.log(vowelFinder("i"));
// console.log(vowelFinder("a"));
// console.log(vowelFinder("h"));
// //console.log(vowelFinder("e"));
//
// const numArray = [1,2,3,4];
//
// const sumArray = function() {
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(numArray.reduce(reducer));
// }
//
// sumArray();
//
//
// const multiplyArray = function() {
//   let sum = 1;
//   for (let i = 0; i < numArray.length; i++) {
//     sum = sum * numArray[i];
// }
// return sum;
// }
// console.log(multiplyArray());
//
//
// const sumArray1 = function() {
//   //console.log(numArray[2]);
//   let sum = 0
//   for (let i = 0; i < numArray.length; i++) {
//      // return numArray[i]
//       sum = sum + numArray[i];
//     }
//     return sum;
//   }
//
// console.log(sumArray1());
// // Bonus
// //
//
// //Kian's solution
// const reverseString = function(string) {
//   let newString = ""
//   for (let i = string.length-1; i >= 0; i--) {
//     newString += string[i];
//   }
//   return newString;
// }
//
// console.log(reverseString("potato"));
// // Homework: The Word Guesser

const answers = ["F", "O", "X"];
let guess = ['\_', '\_', '\_'];
//create a const = false that later becomes true
let guessedR = false
const guessLetter = function(attempt) {
  //const input = guess.push();
  for (let i = 0; i < answers.length; i++) {
  console.log(answers[i]);
    if (answers[i] === attempt) {
    //console.log(true);
      guess[i] = attempt;
      console.log(`You guessed ${attempt}. Well done!`);
      guessedR = true;
   }
   if (guessedR === true) {
     // console.log(guess);
   }
}
}
console.log(guessLetter());
// guessLetter("F");
// guessLetter("X");
// guessLetter("J");
//
//guessLetter("F");
// log "___" 3 blank values in array
// when guessed correctly push value to array
