//  Homework - Week01 Day3 -

//Part 1 - Array and Functions Bonus Material

// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

function maxOfTwoNumbers(num1, num2) {
  return num1>num2 ? num1:num2;
}

console.log(maxOfTwoNumbers(13, 20))
console.log(maxOfTwoNumbers(4,3))

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

//use Math.max method.
function maxOfThree(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

console.log(maxOfThree(2,10,4));
console.log(maxOfThree(2,2,2));

// use if-then-else structure
function maxOfThreeIfThenElse(num1, num2, num3) {
  let max = num1;
  if (num1 < num2 || num1 < num3) {
    if (num2 > num3) {
      max = num2;
    } else {
      max = num3;
    }
  }
  return max
}

console.log(maxOfThreeIfThenElse(2,4,3));
console.log(maxOfThreeIfThenElse(10,4,3));
console.log(maxOfThreeIfThenElse(10,4,15));


// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isVowel(char) {
  return ['a', 'b', 'c', 'd', 'e'].includes(char)
}

console.log(isVowel('a'));
console.log(isVowel('t'));

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

function sumArray(arg) {
  return arg.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  })
}

console.log(sumArray([0,1,2,3,4]));
console.log(sumArray([0,1,2,-1,-2]));


function multiplyArray(arg) {
  return arg.reduce(function(accumulator, currentValue) {
    return accumulator * currentValue;
  })
}

console.log(multiplyArray([1,2,3,4]));
console.log(multiplyArray([1,2,1,-2]));
console.log(multiplyArray([1,2,1,-2,0]));
// Bonus
//
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

function reverseString(str) {
  let newStr = '';
  const start = str.length-1;
  for (let i = start; i>=0; i--) {
    newStr += str.charAt(i);
  }
  return newStr
}

console.log(reverseString('hello, world!'));

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

function findLongestWord(arg) {
  let lengthOfWords = arg.map(x => x.length);
  return Math.max(...lengthOfWords);
}

console.log(findLongestWord(['ok', 'fine', 'sure', 'great','zoopydoopy']));


// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
//
function filterLongWords(arg, num) {
  return arg.filter(x => x.length > num);
}

console.log(filterLongWords(['ok', 'fine', 'sure', 'great','zoopydoopy'],4));
console.log(filterLongWords(['ok', 'fine', 'sure', 'great','zoopydoopy']),10);

// Part 2 - Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').


const inputWord = window.prompt('Enter a word.');
const word = inputWord.toUpperCase().split(''); //create input array

let guess = [];
for (let i=0; i<word.length; i++) {
  guess.push('_');
} //create guess array

let reward = 0; // Start with a reward amount of $0

let guessed = [];
let stateOfHangman = 0;


function guessLetter(letter) { // Write a function called guessLetter that will: Take one argument, the guessed letter.
  const guess_copy = [...guess]
  for (let i=0; i < word.length;i++) {
    if (letter === word[i]) {
      guess[i] = word[i]; // If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
      console.log('The word is: ' + guess.join('')); // When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
    }
  } // Iterate through the word letters and see if the guessed letter is in there.
  if (JSON.stringify(guess) === JSON.stringify(guess_copy)){
    reward = Math.max(0, reward - Math.round((Math.random()*10))); //otherwise subtract from their reward.
    stateOfHangman +=1; // Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
    notFoundLetterAlert = `Guess again. The word is ${guess.join('')}. Accumulated reward: ${reward}.`;
    alert(notFoundLetterAlert)
  } else {
    if (reward === 0) { // Every time a letter is guessed, generate a random amount and reward the user if they found a letter
      reward += Math.round(Math.random()*10);
    } else {
      reward *= Math.round(Math.random()*10); //(multiplying the reward if multiple letters found)
    }
    stateOfHangman -=1 // Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
    foundLetterAlert = `Congrats, you found a letter. The word is ${guess.join('')}. Accumulated reward: ${reward}.`;
    alert(foundLetterAlert)
  }
  return guess
}

while (JSON.stringify(guess) !== JSON.stringify(word)) { // It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
  let inputLetter = window.prompt('Guess a letter.').toUpperCase();
  if (!guessed.includes(inputLetter)) {
    guessed.push(inputLetter);
    guessLetter(inputLetter);
  } // Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
  console.log(`State of hangman: ${stateOfHangman}.`);
  if (stateOfHangman === 6) { // Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
    alert('You lost.')
    console.log('   +---+\n   |   |\n   |   |\n   O   |\n       |\n       |\n =======')
    break
  }
}
finalAlert = `Congrats, you won! Your final reward: ${reward}.` // When they guess the word, log their final reward amount.
alert(finalAlert)
