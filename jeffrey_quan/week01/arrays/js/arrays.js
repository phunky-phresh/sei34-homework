console.log("Working! Homework - Arrays");

// Day 3 - Wednesday, 2 October 2019

// https://gist.github.com/wofockham/61148df9403b3cfc2138

// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and
// returns the largest of them. Use the if-then-else construct available in Javascript.
// You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function(a, b) {
  if (a > b) {
    return a;
  }

  return b;
};

console.log(`The larger out of 4 and 5 is ${ maxOfTwoNumbers(4,5) }.`);
console.log(`The larger out of -7 and -14 is ${ maxOfTwoNumbers(-7,-14) }.`);
console.log(`The larger out of 9 and 2 is ${ maxOfTwoNumbers(9,2) }.`);

// 2. Define a function `maxOfThree` that takes three numbers as arguments and
// returns the largest of them.

const maxOfThree = function(a, b, c) {
  return Math.max(a, b, c);
};

console.log(`The largest out of 2, 6 and 7 is: ${ maxOfThree(2,6,7) }.`);
console.log(`The largest out of 10, 90 and 3 is: ${ maxOfThree(10,90,3) }.`);
console.log(`The largest out of -5, -22 and 0 is: ${ maxOfThree(-5,-22,0) }.`);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

// 3. Write a function that takes a character (i.e. a string of length 1) and
// returns true if it is a vowel, false otherwise.

const isVowel = function(character) {

  const vowels = ['A','E','I','O','U','a','e','i','o','u'];

  // returns true if the vowel array contains the character
  if (vowels.includes(character)) {
    console.log(`${ character } is a vowel.`);
    return true;
  } else {
    console.log(`${ character } is not a vowel.`);
    return false;
  }

};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

// Another solution:

// const isVowel = function(character) {
//   const c = character.toUpperCase();
//   if (c === 'A' || c === 'E' || c === 'I' || c === 'O' || c === 'U') {
//     console.log(`${ character } is a vowel.`);
//     return true;
//   } else {
//     console.log(`${ character } is not a vowel.`);
//     return false;
//   }
// };

// for (var i in myArray) - check this 'in' method

isVowel('e');
isVowel('A');
isVowel('f');
isVowel('09');

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and
// multiplies (respectively) all the numbers in an array of numbers.

// For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])`
// should return 24.

const sumArray = function(array) {

  let sum = 0;

  for (let i = 0; i < array.length; i++) {
      sum += array[i];
  }

  return sum;

};

console.log( sumArray([1,2,3,4]));

const multiplyArray = function(array) {

  let multiple = 1;

  for (let i = 0; i < array.length; i++) {
    multiple *= array[i];
  }

  return multiple;

};

console.log( multiplyArray([1,2,3,4]) );
console.log( multiplyArray([2,2,3,3]) );

// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string.
// For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function(string) {

  // initialize new string to hold the reversal of original string
  let reverseStr = '';

  // adds each character of the string starting at the end
  for (let i = string.length - 1; i >= 0; i--) {
    reverseStr += string.charAt(i);
  }

  return reverseStr;

};

// Another solution:
//
// const reverseString = function(string) {
//   const stringArray = string.split('');
//   const reverseStringArray = [];
//
//   for (let i = 0; i < stringArray.length; i++) {
//     reverseStringArray[i] = stringArray[stringArray.length - 1 - i];
//   }
//
//   return (reverseStringArray.join(''));
// };

// Another (shorter) solution:
//
// const reverseString = function(string) {
//   return (string.split('').reverse().join(''));
// };

console.log( reverseString('jag testar') );
console.log( reverseString('raggamuffin') );

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

// 6. Write a function `findLongestWord` that takes an array of words and returns the
// length of the longest one.

const findLongestWord = function(words) {

  // initlize the longest length variable
  let longestLength = 0;

  // compare the current value of longest length with the length of each word iteratively
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestLength) {
      longestLength = words[i].length;
    }
  }

  return longestLength;

};

console.log( findLongestWord(['bob','chair','dictionary']));
console.log( findLongestWord(['john','lion','armchair']));

// 7. Write a function `filterLongWords` that takes an array of words and an number `i`
// and returns the array of words that are longer than i.

const filterLongWords = function(words,i) {

  // initialize array to hold the words longer than i in length
  let longWords = [];

  for (let j = 0; j < words.length; j++) {
    if (words[j].length > i) {
      longWords.push(words[j]);
    }
  }

  return longWords;

};

console.log( filterLongWords(['sun', 'moon', 'table', 'country', 'teacher'], 4));
console.log( filterLongWords(['sun', 'moon', 'table', 'country', 'teacher'], 3));

// # Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite tries to guess
// the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel
//   and fortune).
//
// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'),
// and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_'
// and end with 'F', 'O', 'X').
// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.
// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to
// reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various
// letters to check that your program works.

Solution: Make it more like Wheel of Fortune

const word = ['P','A','P','E','R'];
const guesses = ['_','_','_','_','_'];
let reward = 0;

const guessLetter = function(letter) {

  // converts any lowercase guesses to uppercase to compare with the word array
  const guessedLetter = letter.toUpperCase();

  let correctGuess = false;

  // initialize message variable to contain message to display after each guess
  let message = '';

  // if the guessed letter matches with letter/s in the word, then store in the same corresponding index
  for (let i = 0; i < word.length; i++) {
    if (word[i] === guessedLetter) {
      guesses[i] = word[i];
      correctGuess = true;
      reward += 100; // each correct letter receives $100 per occurrence
    }
  }

  if (correctGuess) {
    message = `Congratulations, you found a letter! Reward: $${ reward }.`;
  } else {

    // each incorrect guess results in deduction of $100.
    if (reward >= 100) {
      reward -= 100;
    } else {
      reward = 0; // if reward balance was below $100, set to $0 for incorrect guess
    }

    message = `Sorry, the letter ${ letter } is not in the word. Reward: $${ reward }.`;

  }

  console.log( message );

  // show the current status of guesses ever after incorrect guesses
  // used join with comma to clearly show the separation between letters
  console.log(`${ guesses.join(',')} `);

  // if the guesses array does not contain any '_', no more letters to guess
  if ( !guesses.includes('_') ) {
    console.log(`Congratulations! You have won the game. Total reward is $${ reward }.`);
  }

};

guessLetter('p');
guessLetter('e');
guessLetter('f');
guessLetter('r');
guessLetter('t');
guessLetter('l');
guessLetter('z');
guessLetter('b');
guessLetter('m');
guessLetter('a');

// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if
// they found a letter (multiplying the reward if multiple letters found), otherwise subtract
// from their reward.
// - When they guess the word, log their final reward amount.
//
// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a
// letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add
// to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform
// the user that they lost and show a hangman on the log.

// Solution: Make it like Hangman:

// const word = ['P','A','P','E','R'];
// const guesses = ['_','_','_','_','_'];
// let allGuesses = [];
//
// // counts the number of incorrect guees
// let incorrectAttempts = 0;
//
// // function to be triggered when there are 6 incorrect attempts
// const drawHangman = function() {
//   console.log(`#######`);
//   console.log(`##  |  `);
//   console.log(`##  O  `);
//   console.log(`## /|\\ `);
//   console.log(`## / \\`);
//   console.log(`##     `);
//   console.log(`#######`);
// };
//
// const guessLetter = function(letter) {
//   if (incorrectAttempts < 6) {
//     // converts any lowercase guesses to uppercase to compare with the word array
//     const guessedLetter = letter.toUpperCase();
//
//     let correctGuess = false;
//
//     // initialize message variable to contain message to display after each guess
//     let message = '';
//
//     // if the guessed letter matches with letter/s in the word, then store in the same corresponding index
//     for (let i = 0; i < word.length; i++) {
//       if (word[i] === guessedLetter) {
//         guesses[i] = word[i];
//         correctGuess = true;
//       }
//     }
//
//     if (correctGuess) {
//       message = `Congratulations, you found a letter!`;
//     } else {
//       if (!allGuesses.includes(guessedLetter)) {
//         incorrectAttempts += 1;
//       }
//       message = `Sorry, the letter ${ letter } is not in the word. You have ${ incorrectAttempts } incorrect attempt/s.`;
//     }
//
//     allGuesses.push(guessedLetter);
//
//     console.log( message );
//
//     // show the current status of guesses ever after incorrect guesses
//     // used join with comma to clearly show the separation between letters
//     console.log(`${ guesses.join(',') } `);
//
//     // if the guesses array does not contain any '_', no more letters to guess
//     if ( !guesses.includes('_')) {
//       console.log(`Congratulations! You have won the game.`);
//     }
//   } else {
//
//     if (incorrectAttempts === 6) {
//       drawHangman();
//       return;
//     }
//   }
// };
//
// guessLetter('p');
// guessLetter('f');
// guessLetter('e');
// guessLetter('f');
// guessLetter('r');
// guessLetter('t');
// guessLetter('l');
// guessLetter('z');
// guessLetter('b');
// guessLetter('m');
// guessLetter('a'); // does not run because number of incorrect attempts is 6
