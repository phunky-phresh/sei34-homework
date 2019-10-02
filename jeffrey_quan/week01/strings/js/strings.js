console.log("Working! Topic - Strings");

// Tuesday, 1st of October 2019

// https://gist.github.com/wofockham/8f953ac7f33125898071

// # Strings
//
// These exercises will test your knowledge of string functions, conditionals, and arrays.
// For many of them, you will want to consult the JavaScript strings reference to find
// useful string methods to call.
//
// ## DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount,
// and return '<amount> dollars', except it will add '(pinky)' at the end if the amount
// is 1 million. For example:
// ```
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
// ```

const drEvil = function (amount) {
  let message = `${ amount } dollars`;
  if (amount === 1000000) {
    message += ` (pinky)`;
  }
  console.log(message);
  return message;
}

drEvil(1000000);
drEvil(500);

// ## MixUp
//
// Create a function called mixUp. It should take in two strings, and return the
// concatenation of the two strings (separated by a space) slicing out and swapping
// the first 2 characters of each.
// You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```

const mixUp = function (stringA, stringB) {
  const newStringA = stringB.substring(0,2) + stringA.substring(2);
  const newStringB = stringA.substring(0,2) + stringB.substring(2);
  const newString = newStringA + " " + newStringB;
  console.log(newString);
  return newString;
}

mixUp('mix', 'pod');
mixUp('dog', 'dinner');
mixUp('frog', 'rainbow');

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
// note: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
// the mdn states that substr is considered a legacy function and should be avoided
// could also use slice(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

// ## FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and
// return a version where all occurences of its first character have been replaced with '*',
// except for the first character itself. You can assume that the string is at least one
// character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```

const fixStart = function (string) {

  // converts string into an array of its characters
  const stringArray = string.split('');

  // don't start with i = 0 because the first character will remain as it is
  // replace the other occurrence of the first character within the string
  for (let i = 1; i < stringArray.length; i++) {
    if (stringArray[i] === stringArray[0]){
      stringArray[i] = '*';
    }
  }

  // joins the characters in the array to form a string
  const newString = stringArray.join('');
  console.log(newString);
  return newString;
}

// Another solution
// const fixStart = function (string) {
//
//   let newString = string.charAt(0);
//
//   for (let i = 1; i < string.length; i++) {
//     if (string.charAt(i) === string.charAt(0)) {
//       newString += '*';
//     } else {
//       newString += string.charAt(i);
//     };
//   };
//   console.log(newString);
//   return newString;
// }

fixStart('babble');
fixStart('nano');
fixStart('paper');
fixStart('anaconda');

// ## Verbing
//
// Create a function called verbing. It should take a single argument, a string.
// If its length is at least 3, it should add 'ing' to its end, unless it already ends in
// 'ing', in which case it should add 'ly' instead. If the string length is less than 3,
// it should leave it unchanged. For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```

const verbing = function (string) {
  // initialize new string
  let newString = '';

  if (string.length >= 3) {
    if (string.substring(string.length - 3, string.length) === 'ing') { // can use endsWith() method
      newString = string + 'ly';
    } else {
      newString = string + 'ing';
    }
    console.log(newString);
    return newString;
  }
  console.log(string);
  return string;
}

// Another solution:
// const verbing = function (string) {
//   if (string.length < 3) {
//     console.log(string);
//     return string;
//   } else {
//     if (string.substring(string.length - 3, string.length) === 'ing') {
//       const newString = string + "ly";
//       console.log(newString);
//       return newString;
//     } else {
//       const newString = string + "ing";
//       console.log(newString);
//       return newString;
//     }
//   }
// }

verbing('swim');
verbing('swimming');
verbing('go');
verbing('hop');
verbing('at');

// ## Not Bad
//
// Create a function called notBad that takes a single argument, a string.
// - It should find the first appearance of the substring 'not' and 'bad'.
// - If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring
// with 'good' and return the result.
// - If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the
// original sentence.
//
// For example:
// ```
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
// ```

const notBad = function (string) {

  // intialize a new string
  let newString = '';

  // check if string includes the string 'not' and 'bad'. If both are found, checks if the first occurence of not is before the first occurence of bad
  if (string.includes('not') && string.includes('bad') && string.indexOf('not') < string.indexOf('bad')) {
    const stringToReplace = string.substring(string.indexOf('not'), string.indexOf('bad') + 3);
    newString = string.replace(stringToReplace, 'good');
  } else {
    newString = string;
  }
  console.log(newString);
  return newString;
}

notBad('This dinner is not that bad!');
notBad('This movie is not so bad!');
notBad('This dinner is bad!');
notBad('The food was not so good.');
notBad('The movie was not so bad. Not bad at all.');

// Alex's solution:
// const notBad = function (str) {
//  newStr = str.replace(/(not)(.*)(bad))/, "good");
//  console.log(newStr);
// return newStr;
// }

// indexOf - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
// substring - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
// replace - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
