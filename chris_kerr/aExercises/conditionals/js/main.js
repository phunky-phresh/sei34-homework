// Exercises: if/else statements
//
// What number's bigger?
//
// Write a function named greaterNum that:
//
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

let input1;
let input2;

function greaterNum(input1, input2) {
  if (input1 > input2) {
    console.log(input1 + " is larger than " + input2);
  } else if (input1 < input2) {
    console.log(input2 + " is larger than " + input1);
  } else {console.log("Theses numbers cannot be compared");}
}

// The World Translator
//
// Write a function named helloWorld that:
//
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

let languageCode;

function helloWorld(languageCode) {
  if (languageCode === "es") {
    console.log("Hola, Mundo");
  } else if (languageCode === "de") {
    console.log("Hallo, Welt");
  } else {
    console.log("Hello, World");
  }
}

// The Grade Assigner
//
// Write a function named assignGrade that:
//
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

let gradeNumber;

function assignGrade(gradeNumber) {
  if (gradeNumber > 90 && gradeNumber <= 100) return ("A");
  if (gradeNumber > 80 && gradeNumber <= 90) return ("B");
  if (gradeNumber > 70 && gradeNumber <= 80) return ("C");
  if (gradeNumber > 50 && gradeNumber <= 70) return ("D");
  if (gradeNumber <= 50) return ("F");
}

console.log(assignGrade(26));
console.log(assignGrade(88));
console.log(assignGrade(100));

// The Pluralizer
//
// Write a function named pluralize that:
//
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

let inputNoun;
let inputNounNumber;
let pluralNoun;
let singularNoun;

function pluralize(inputNoun, inputNounNumber) {

    if (inputNoun === "sheep") {
    pluralNoun = inputNoun;
    singularNoun = inputNoun;
    //console.log(pluralNoun);
    //console.log(singularNoun);
  } else if (inputNoun === "goose" || inputNoun === "geese") {
    pluralNoun = "geese";
    singularNoun = "goose";
    //console.log(pluralNoun);
    //console.log(singularNoun);
  } else if (inputNoun.endsWith("s")) {
    pluralNoun = inputNoun;
    singularNoun = inputNoun.slice(0,inputNoun.length-1);
    //console.log(pluralNoun);
    //console.log(singularNoun);
  } else {
    pluralNoun = inputNoun + "s";
    singularNoun = inputNoun;
    //console.log(pluralNoun);
    //console.log(singularNoun);
  }

  if(inputNounNumber === 1) {
    console.log(inputNounNumber + " " + singularNoun);
  } else {
    console.log(inputNounNumber + " " + pluralNoun);
  }
}
