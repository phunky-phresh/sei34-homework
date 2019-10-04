// Strings
// These exercises will test your knowledge of string functions, conditionals, and arrays.
//For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount,
// and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

const DrEvil = function(amount) {
  if (amount === 1000000) {
    console.log(`${amount} dollars (pinky)`);
  } else
  console.log(`${amount} dollars`);
}

DrEvil(50);
DrEvil(1000000);



// MixUp
// Create a function called mixUp. It should take in two strings, and return the
//concatenation of the two strings (separated by a space) slicing out and swapping
//the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

const mixUp = function(string1, string2){
  const newString1 = string2.slice(0, 2) + string1.slice(2); //takes first 2 characters of string2 and adds strings1 without the first 2 characters
  const newString2 = string1.slice(0, 2) + string2.slice(2);
  console.log(`${newString1} ${newString2}`);
}

mixUp('cat', 'dog');
mixUp('lunch', 'dinner');
mixUp('mix', 'pod');


// FixStart
// Create a function called fixStart. It should take a single argument, a string,
//and return a version where all occurences of its first character have been replaced with '*',
//except for the first character itself. You can assume that the string is at least one character long. For example:
// fixStart('babble'): 'ba**le'


//I tried to use string.replace but couldnt get it to work and when it did, it just replaced the first appearance of the character.
const fixStart = function(string) {
  const firstCharacter = string.charAt(0); //identifies 1st character
  let newString = firstCharacter; // newString will be formed from a concatenation loop starting with 1st character
  for (let i = 1; i < string.length; i++) {
    if (string.charAt(i) === firstCharacter) {
      newString += '*';        //if character i is like first character then we concatenate a * to the newString
    } else {
      newString += string.charAt(i); //if not, then we concatenate the character itself
    }
  }
  console.log(newString);
}

fixStart('bubble');
fixStart('doodle');
fixStart('google');




// Verbing
// Create a function called verbing. It should take a single argument, a string.
//If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
//in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

const verbing = function(word) {
  let newWord;
  if (word.length >= 3 && word.slice(-3) !== 'ing') { //check if word is >= 3 characteres and does not finish in "ing"
    newWord = word + 'ing';
  }
  else if (word.length >= 3 && word.slice(-3) === 'ing') { //check if word is >= 3 characteres and finishes in "ing"
    newWord = word + 'ly';
  }
  else {
    newWord = word;
  }
  console.log(newWord);
}

verbing('swim');
verbing('swimming');
verbing('go');





// Not Bad
// Create a function called notBad that takes a single argument, a string.

// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:

//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'



//string.search() did not work because it always returns a number
const notBad = function(sentence) {

//using match
  // if (sentence.match('not') !== null && sentence.match('bad') !== null) { // check that sentence contains both "not" and "bad" words.
  //   splitSentence = sentence.split('not'); // split the sentence to then just use the first part
  //   newSentence = splitSentence[0] + 'good' + sentence.charAt(sentence.length - 1); //final sentence excludes "not..bad" part of string and adds final punctuation.
  //   console.log(newSentence);
  // }
  // else {
  //   console.log(sentence);
  // }

//this uses replace and looks for anything "not .... bad"
  const newSentence = sentence.replace(/(not)(.*)(bad)/, 'good'); //(.*) .means any character and *means any number of characteres between "not" and "bad"
  console.log(newSentence);
}





notBad('This dinner is not that bad!');
notBad('This movie is not so bad!');
notBad('This dinner is bad!');
