// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns
// the largest of them. Use the if-then-else construct available in Javascript.
// You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(maxOfTwoNumbers(5, 1));






console.log(" ");
// Define a function maxOfThree that takes three numbers as arguments and returns
// the largest of them.

const numbersArray = [34, 99, 78, 1444];

const maxOfThree = function (array) { //I decided to write a more global version to use with more than 3 numbers
  let greatestNumber = ''; //initialize a variable where we will store the highest number found after each cycle
  for (let i = 0; i < array.length; i++) {
    greatestNumber = maxOfTwoNumbers(greatestNumber, array[i]); //reuse function from before and store highest number after comparing each array item with the stored highest number
  }
  return greatestNumber; //returns the highest number found after i cycles
}
console.log(maxOfThree(numbersArray));






console.log(" ");
// Write a function that takes a character (i.e. a string of length 1) and returns
// true if it is a vowel, false otherwise.

const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
const isVowel = function(character) {
  for (let i = 0; i < vowels.length; i++) {
    if (vowels[i] === character) { //we compare the input with every vowel in the array until we find a match or until end of array
      return true;
    }
  }
  return false; //if no match then it's not a vowel
}

console.log(isVowel('a'));
console.log(isVowel('z'));
console.log(isVowel('b'));
console.log(isVowel(''));
console.log(isVowel('u'));








console.log(" ");
// Define a function sumArray and a function multiplyArray that sums and multiplies
// (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4])
// should return 10, and multiplyArray([1,2,3,4]) should return 24.


const myArray = [1, 2, 3, 4];

const sumArray = function(array){
  let sum = 0; //initialize sum
  for (let i = 0; i < array.length; i++) {
    sum += array[i]; //add each item of the array to sum
  }
  return sum; //returns final sum value
}

console.log(sumArray(myArray));


const multiplyArray = function(array) {
  let multiplication = 1; //initialize multiplication with 1, because if 0, then it's always 0
  for (let i = 0; i < array.length; i++) {
    multiplication *= array[i]; //multiply each item of the array by the previous result
  }
  return multiplication; //returns final multiplication value
}

console.log(multiplyArray(myArray));







console.log(" ");
// Bonus
// Define a function reverseString that computes the reversal of a string.
// For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function(string) {
  let newString = ''; //initialize the resultant string in a variable
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i]; //get each character of string from the end, and concatenate to the resultant string
  }
  return newString; //final concantenated reversed string
}

console.log(reverseString('jag testar')); //ratset gaj
console.log(reverseString('race car'));







console.log(" ");
// Write a function findLongestWord that takes an array of words and returns the
// length of the longest one.

const animals = ['cat', 'monkey', 'lion', 'gorilla', 'bear', 'hippopotamus', 'bird'];

const findLongestWord = function(array) {
  let longestWord = '';   //initialize the variable that will store the longest word
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longestWord.length) {   //if the length of the current array element is higher than the stored longest word
      longestWord = array[i];   //then make it the new longest word
    }
  }
  return longestWord.length; //at the end return the length of the longest word stored/found
}

console.log(findLongestWord(animals));








console.log(" ");
// Write a function filterLongWords that takes an array of words and an number i
// and returns the array of words that are longer than i.

const filterLongWords = function (array, number) {
  let arrayLongWords = [];  // initialize the array that will store the longest words
  for (let i = 0; i < array.length; i++) {  // go through the elements of the input array
    if (array[i].length > number) {     // check if array[i] > number provided
      arrayLongWords.push(array[i]);    //if true, add value of array[i] to the new array
    }
  }
  return arrayLongWords;  //return final array after for loop finished
}

console.log(filterLongWords(animals, 5));








console.log(" ");
// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to
// guess the word (like Hangman without the hangman, or like Wheel of Fortune without
// the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'),
// and one to hold the current guessed letters (e.g. it would start with '_', '_', '_'
// and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to
// reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and
// congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various
// letters to check that your program works.


const wordLetters = ['F', 'O', 'X']; //array of the letters to be guessed
const guessedLetters = ['_','_','_']; //array of the letters that have been guessed

const guessLetter = function (letter){
  for (let i = 0; i < wordLetters.length; i++) {  //will check if letter is in any position of the array
    if (letter === wordLetters[i]) {
      guessedLetters[i] = letter;   //if it is then letter substitutes _ in the guessed array
    }
  }

  if (guessedLetters.includes(letter)) {
    console.log(`${guessedLetters.join('')} Congratulations! You found a new letter.`);
  } else {   //if letter was not guessed it shouldnt be in the guessed array
      console.log(`${letter} does not exist. Guess again.`)   //alert that letter was not found
  }

  if (guessedLetters.includes('_') === false) {     //check if all letters were found (so no more "_")
    console.log(`Congratulations! You guessed the word ${wordLetters.join('')}.`);
  }
}

guessLetter('A');
guessLetter('C');
guessLetter('O');
guessLetter('I');
guessLetter('F');
guessLetter('X');



console.log(" ");
// Bonus: Make it more like Wheel of Fortune:
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if
// they found a letter (multiplying the reward if multiple letters found), otherwise
// subtract from their reward.
// When they guess the word, log their final reward amount.


const wordLettersWOF = ['F', 'O', 'X']; //array of the letters to be guessed
const guessedLettersWOF = ['_','_','_']; //array of the letters that have been guessed


let rewardAmount = 0;

const guessLetterWOF = function (letter){
  for (let i = 0; i < wordLettersWOF.length; i++) {  //will check if letter is in any position of the array
    if (letter === wordLettersWOF[i]) {
      guessedLettersWOF[i] = letter;   //if it is then letter substitutes _ in the guessed array
      rewardAmount += Math.random()*1000;  //reward of a number between 0 and $1000;
    }
  }
  if (guessedLettersWOF.includes(letter)) { //if letter found in word
    console.log(`${guessedLettersWOF.join('')} Congratulations! You found a new letter. Your total reward so far is ${Math.floor(rewardAmount)}.`);
  }
  else {   //if letter not found
    rewardAmount -= Math.random()*1000;   //loss of randomly between 0-1000 dollars;
    console.log(`${letter} does not exist. Guess again.`)   //alert that letter was not found
  }
  if (guessedLettersWOF.includes('_') === false) {     //check if all letters were found (so no more "_")
    console.log(`Congratulations! You guessed the word ${wordLettersWOF.join('')} and won $${Math.floor(rewardAmount)}.`); //so reward doesn't have decimal places.
  }
  if (rewardAmount < 0) {
    rewardAmount = 0;
  }
  return rewardAmount; //to update the global variable after each guess
}

guessLetterWOF('A');
guessLetterWOF('C');
guessLetterWOF('O');
guessLetterWOF('I');
guessLetterWOF('F');
guessLetterWOF('X');




console.log(" ");
// Bonus: Make it like Hangman:
// Keep track of all the guessed letters (right and wrong) and only let the user
// guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract
// or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman),
// inform the user that they lost and show a hangman on the log.



const wordLettersHM = ['F', 'O', 'X']; //array of the letters to be guessed
const correctLettersHM = ['_','_','_']; //array of the letters that have been guessed
let guessesSoFar = [];
let numberGuesses = 0;

const guessLetterHM = function (letter){
  for (let i = 0; i < wordLettersHM.length; i++) {  //will check if letter is in any position of the array
    if (letter === wordLettersHM[i]) {
      correctLettersHM[i] = letter;   //if it is then letter substitutes _ in the guessed array
    }
  }

  if (correctLettersHM.includes(letter)) {  //if letter in array, alert that letter was found
    console.log(`${correctLettersHM.join('')} Congratulations! You found a new letter.`);
  }
  else {   //otherwise alert that letter was not found
    console.log(`${letter} does not exist.`);
    if (!guessesSoFar.includes(letter)) {
      guessesSoFar.push(letter);
      numberGuesses++;
      console.log(numberGuesses);
      console.log(guessesSoFar);
    }
  }

  if (numberGuesses === 6) {  //if end of game
    console.log("You lost!");
    console.log("   _____   ");
    console.log("   |   |   ");
    console.log("   |   ()/ ");
    console.log("   |  /||  ");
    console.log("   | _/ |_ ");
    console.log("___|_______");

    return;  //end of function and game
  }

  if (correctLettersHM.includes('_') === false) {     //check if all letters were found (so no more "_")
    console.log(`Congratulations! You guessed the word ${correctLettersHM.join('')}.`);
  }

  console.log(`You have ${ 6 - numberGuesses } guesses left.`);
  return numberGuesses;  //to update the global variable after each guess
}


guessLetterHM('C');
guessLetterHM('A');
guessLetterHM('Z');
guessLetterHM('O');
guessLetterHM('I');
guessLetterHM('A');
guessLetterHM('U');
guessLetterHM('X');
guessLetterHM('S');
