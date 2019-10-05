// # Array and Functions Bonus Material


// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function (a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};


// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function (a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
};


// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const vowelOrNot = function (character) {
  if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
    return true;
  } else {
    return false;
  }
};


// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers
// in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
const sumArray = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i ++) {
    sum += arr[i];
  }
  return sum;
};
const multiplyArray = function (arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i ++) {
    product *= arr[i];
  }
  return product;
};
// ## Bonus


// 5. Define a function `reverseString` that computes the reversal of a string.
// For example, reverseString("jag testar") should return the string "ratset gaj".
const reverseString = function (string) {
  return string.split("").reverse().join("");
};


// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
const findLongestWord = function (wordsArr) {
  let foo = "";
  for (let i = 0; i < wordsArr.length; i++) {
    if (foo.length < wordsArr[i].length) {
      foo = wordsArr[i];
    }
  } return foo.length;
};


// 7. Write a function `filterLongWords` that takes an array of words and a number `i` and returns the array of words that are longer than i.
const filterLongWords = (arr, num) => arr.filter(word => word.length > num);
