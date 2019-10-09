
const maxOfTwoNumbers = function (num1,num2) {

  if  (num1>num2){
  return num1;
  }
  else {
  return num2;
  }
};
console.log(`The greater number of 5 and 10 is ${ maxOfTwoNumbers(5, 10) }`);



// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (a,b,c) {
  if (a>b && a>c){
    console.log(a);
    return a;
  } else if (b>a && b>c) {
    console.log (b);
    return b;
  } else {
    console.log(c);
    return c;
  }

}
maxOfThree(105,40,55);

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const checkVowel = function (x) {
  if (x.length === 1 && x === 'a' || x === 'i' || x === 'o' || x === 'e' || x ==='u')
  console.log (true);
  else {
    console.log(false);
  }
};
checkVowel('e');

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.





// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.


//////////////////////////////////////////////////////



// # Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
const letters = ['F','O','X'];
const guesses = [];
console.log("Guess the letters '_', '_', '_'");

const guessLetter = function(x) {
for (i=0; 1 < letters.length; i++) {

if (x === 'F') {
   guesses.push[0]='F';
  console.log("congratualions you found the first letter");
  console.log(guesses);
}
else if (x === 'O') {
  guesses.push[1] = 'O';
  console.log("congratualions you found the second letter");
  console.log (guesses);
}
// else if (x ==='X') {
//   'X' = guesses.push[2];
//   console.log("congratualions you found the thrid letter");
//   console.log (guesses);
// }
// else {
//   console.log("Try Again");
// }
}
};

guessLetter('F');
guessLetter('O');
guessLetter('P');
guessLetter('O');
guessLetter('X');

//

// // let correctWord = ["F", "O", "X"];
// // let correctGuesses = []
// // for (let i = 0; i < correctWord.length; i ++) { //construct empty array of same length as correctWord
// //   correctGuesses.push("_");
// // }
// // let guessList = [];
// // let guessTally = 0;
// //
// // function guessedLetter(input) {
// //   //first check unique guess
// //   for (let i = 0; i < guessList.length; i++){
//     if (input === guessList[i]) {
//       console.log("Already guessed");
//       return
//       }
//     }
//   guessList.push(input); //add guess list to input
//
//   let wrongLoopTally = 0;
//   for (i = 0; i < correctWord.length; i ++) {
//     if (input === correctWord[i]) {
//         correctGuesses[i] = correctWord[i];
//         console.log(`Congratulations you have corrected guessed ${input}! To give you progress of ${correctGuesses}.`);
//         reward("correct");
//         guessTally--;
//     } else {
//       wrongLoopTally++
//     }
//   }
//
//   //trigger reward negative if incorrect guess
//   if (wrongLoopTally === correctWord.length) {
//     reward("wrong");
//     guessTally++;
//   }
//   //testing to see if the whole word is complete
//   let count = 0;
//   for (let i = 0; i < correctGuesses.length; i++) {
//     if (correctGuesses[i] === "_") {
//       count = count + 1;
//     }
//   }
//   if (count === 0) console.log(`You guessed the word correctly, and have won \$${rewardTally}!`);
//   if (guessTally >= 6) {
//     console.log("You've lost the game!");
//     console.log("      +---+");
//     console.log("      |   |");
//     console.log("      O   |");
//     console.log("     /|\  |");
//     console.log("     / \  |");
//     console.log("          |");
//     console.log("========='''");
//   }
// }
// // - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').
// // - Write a function called guessLetter that will:
// // - Take one argument, the guessed letter.
// // - Iterate through the word letters and see if the guessed letter is in there.
// // - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// // - When it's done iterating, it should log the current guessed letters ('F__')
// // and congratulate the user if they found a new letter.
// // - It should also figure out if there are any more letters that need to be guessed,
// // and if not, it should congratulate the user for winning the game.
// // - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
// //
// // ## Bonus: Make it more like Wheel of Fortune:
// // - Start with a reward amount of $0
// // - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.
//
// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
