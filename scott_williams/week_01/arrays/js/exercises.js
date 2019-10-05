// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function(a, b) {
  if ( a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(maxOfTwoNumbers(2, 4));

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function(a, b, c) {
  if ( a > b) {
    if (a > c) {
      return a;
    } else {
      return c;
    }
  } else {
      if (b > c) {
        return b;
      } else {
        return c;
      };
  }
}

console.log(maxOfThree(209, 140, 81));

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const char1 = function(char) {
  //create vowels to test
  const vowels = ["a", "e", "i", "o", "u"];
  //compare the argument to each vowel with a for loop
  for (let i = 0; i < vowels.length; i++){
    //if the char equals a vowel, return true
    if (char === vowels[i]) {
      return true;
    }
  }
    //if after all the loops have finished there was no true, then return a false
    return false;
}

console.log(char1("a"));

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
//

//declare the array of numbers
const numberGroup = [1, 2, 3, 4];

// defina a function 'sumArray'
const sumArray = function(arrayNumbers) {
    //declare a variable to hold the sum
    let resultSum = 0;
    for (let i = 0; i < arrayNumbers.length; i++) {
      resultSum += arrayNumbers[i]; // add the numbers
    }
    return resultSum;
}

console.log(sumArray(numberGroup));


//function 'multiplyArray'
const multiplyArray = function(arrayNumbers) {
    //declare a variable to hold the sum
    let resultMultiply = 1;
    for (let i = 0; i < arrayNumbers.length; i++) {
      resultMultiply *= arrayNumbers[i]; // multiplies the numbers
    }
    return resultMultiply;
}

console.log(multiplyArray(numberGroup));

// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

//define a function 'reverseString'
const reverseString = function(string1) {
  //declare the reverse string that I want to output
  let revString = "";
  //loop through each character of string and add each character to the front of the revString
  for(let i = 0; i < string1.length; i++) {
      revString = `${ string1.charAt(i) } ${ revString }`;
  }
  //return the reverse string
  return revString;
}

console.log(reverseString("jag testar"));

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

//set array of words
const words = ["It", "was", "the", "best", "of", "times"];

const findLongestWord = function (wordArray) {
  //declare the const to hold the longest word. Let the const hold the first array entry
  let longestWord = wordArray[0];
  // loop through the remaining words and compare them to the first word. If longer, update the longest word
  for (let i = 1; i < words.length; i++) {
    if  (wordArray[i].length > longestWord.length){
      longestWord = wordArray[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord(words));


// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

//set array of words
const wordsToReview = ["I", "learnt", "nothing", "about", "Byzantium", "at", "school"];

const filterLongWords = function(words, numLong) {
  // declare a new array to store words longer than i.
  const longWordArray = [];
  // review each word length against the numLong number and push longer words into the new array
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > numLong) {
      longWordArray.push(words[i]);
    }
  }
  // return the new long word array for use outside of the function
  return longWordArray;
}

console.log(filterLongWords(wordsToReview, 2));

// # Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').
// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.
// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
//

//Declare the global array to
const hangmanWord = ["F", "O", "X"];

// declare the current guess array to begin with. Make sure there is a space at the end of each element so that the blanks are separate
const currentGuess = ["\_ ", "\_ ", "\_ "];

//Create a function to iterate through the word letters and see if the guessed letter is in there
const guessLetter = function(guessedLetter) {
  // convert guessedLetter to uppercase to make it easier for the person guessing
  guessedLetter = guessedLetter.toUpperCase();
  //Loop the uppercase guessedLetter through each array letter of the hangmanWord
  for (let i = 0; i < hangmanWord.length; i++) {
    if (guessedLetter === hangmanWord[i]) { // If guess letter equals the hangmanWord letter then
      currentGuess[i] = hangmanWord[i]; // replace the position of the currentGuess with the hangmanWord letter
      console.log(`You found a letter "${ currentGuess[i] }"`); // congratulate the user on finding a letter
      // figure out if any more letters need to be guessed. Need to count the instance of "|_" in the array
      if ( currentGuess.includes("\_ ")) {
        console.log(`Keep going, you have not guessed the whole word. The word looks like ${ currentGuess.join('')}`);
      } else {
        // if no more letters need to be guessed, congratulate the winner. if count of "|_" equals 0, congratulate winner. Show the winning array, joined together into a string
        console.log(`Congratulations, you guessed ${ hangmanWord.join('') }.`);
      }
    }
  }
}

guessLetter("r");
guessLetter("t");
guessLetter("F");
guessLetter("x");
guessLetter("r");
guessLetter("o");
guessLetter("r");

// This is where I had to stop...ran out of time. Time to go hunting. It is 'duck season':
//    _      _      _
//    >(.)__ <(.)__ =(.)__
//    (___/  (___/  (___/
//
// or is it rabbit season, I forget:
//         ((`\
//     ___ \\ '--._
//  .'`   `'    o  )
// /    \   '. __.'
// _|    /_  \ \_\_
//{_\______\-'\__\_\


// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.
//
// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
