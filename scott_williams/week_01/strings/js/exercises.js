// # Strings
//
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// ## DrEvil **********************************
//
// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
// ```
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
// ```
//
console.log("DREVIL");
const DrEvil = function(dollars) {
  // add '(pinky)' at the end if the amount is 1 million
  if (dollars === 1000000){
    const dollarsStatement = console.log(`${ dollars } dollars (pinky)`);
  } else { //just add dollars to end of number
    const dollarsStatement = console.log(`${ dollars } dollars`);
    return dollarsStatement;
  }
}

DrEvil(10);

// ## MixUp *********************************************
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```
//
const mixUp = function(stringOne, stringTwo) {
  //Slice first string
  const firsttwoStringOne = stringOne.slice(0,2);// create a const of first two chars of first string
  const remainderStringOne = stringOne.slice(2);// create const of remainder
  //Slice second string
  const firsttwoStringTwo = stringTwo.slice(0,2);// create a const of first two chars of second string
  const remainderStringTwo = stringTwo.slice(2);// create const of remainder
  const concatTwo = console.log(`${ firsttwoStringTwo }${ remainderStringOne } ${ firsttwoStringOne }${remainderStringTwo}`); // return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each.
  return concatTwo;
}

mixUp("mixxer", "pool");

// ## FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```
//
console.log("FIXSTART");
const fixStart = function(stringToAsterix) {
  const firstChar = stringToAsterix.slice(0,1); //select first character
  //console.log(firstChar); // to confirm first char is in new string
  let newStringToAsterix = firstChar; //place the first character in a new string

  //Loop through the string from the second char, replacing any char that is the same as the first char with an *, else leave char as is.
  for (let i = 1; i < stringToAsterix.length; i++ ){
    if (stringToAsterix[i] === firstChar){
      newStringToAsterix = newStringToAsterix + "*";
    } else {
        newStringToAsterix = newStringToAsterix + stringToAsterix[i];
    }
  }
  console.log(newStringToAsterix);
}

fixStart("BCBBagb");

// ## Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```
//
console.log("VERBING");
const verbing = function(verb) {
  if (verb.length < 3) { //If the string length is less than 3, it should leave it unchanged
    const verbAdjust = console.log(verb);
    console.log(verbAdjust);
    return verbAdjust;
  } else if (verb.endsWith("ing")) { // If ends in ing, add ly
    const verbAdjust = `${ verb }ly`;
    console.log(verbAdjust);
    return verbAdjust;
  } else { // If greater than 2 chars and does not end in ing, add ing
    //** need to get last char of string and add it to itself
    const lastLetter = verb.charAt(verb.length -1 );
    // console.log(lastLetter);
    // add last letter again and ing to verb
    const verbAdjust = `${ verb }${ lastLetter }ing`;
    console.log(verbAdjust);
    return verbAdjust;
  }
}

verbing("Swim");

// ## Not Bad
//
// Create a function called notBad that takes a single argument, a string.
// - It should find the first appearance of the substring 'not' and 'bad'.
// - If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// - If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
//
// For example:
// ```
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
// ```
console.log("NOT BAD");
const notBad = function (stringEvaluate) {
  //first substring to search for in string
  const word1 = "not";
  //if first string not found in sentence, return the sentence
  if (stringEvaluate.includes(word1) === false ) {
    console.log(stringEvaluate);
    return stringEvaluate;
  } else {
    //Now that string includes word1, confirm if word2 is found after word one
      //Evaluate remaining string
    const remainingStringIndex = stringEvaluate.indexOf(word1);
    //console.log(remainingStringIndex); // the index of where word1 is found in string
    remainingString = stringEvaluate.slice(remainingStringIndex);
    //console.log(stringEvaluate.slice(remainingStringIndex)); // the remaining string from word1
    const word2 = "bad";
    //Evaluate if word2 is in remaining string
    if (remainingString.includes(word2) === false) {
      console.log(stringEvaluate);
      return stringEvaluate;
    } else {
      //Get string up to where word1 is found
      const beginStringEvaluate = stringEvaluate.slice(0,remainingStringIndex);
      // console.log(stringEvaluate.slice(0,remainingStringIndex));
      // add the word good to the end of the string
      stringEvaluate = `${ beginStringEvaluate }good!`
      console.log(stringEvaluate);
      return stringEvaluate;
    }
  }
}

notBad("This dinner is not that bad!");


//If you made it this far then you are rewarded with three ducks. Lucky you:
//    _      _      _
//    >(.)__ <(.)__ =(.)__
//    (___/  (___/  (___/
