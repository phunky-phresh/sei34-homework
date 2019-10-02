// max of two numbers
const maxOfTwo = function(num1, num2) {
  return num1 > num2 ? num1 : num2;
};
console.log(maxOfTwo(3,12));
console.log(maxOfTwo(12,3));

//max of three numbers
const maxOfThree = function(num1, num2, num3) {
  return maxOfTwo( maxOfTwo(num1, num2), num3);
};
console.log(maxOfThree(8,123,45));
console.log(maxOfThree(45,8,123));
console.log(maxOfThree(123,45,8));

//sum of nums in Array
const sumArray = function(arr) {
  return arr.reduce((total, x) => total + x);
};
console.log(sumArray([1,2,3,4]));

//mult of nums in array
const multiplyArray = function(arr) {
  return arr.reduce((total, x) => total * x);
};
console.log(multiplyArray([1,2,3,4]));

//reverse of letters in string
const reverseString = function(str) {
  const arr = str.split('');
  const reversed = arr.map((x, i) => arr[arr.length - i - 1]);
  return reversed.join('');
};
console.log(reverseString('jag testar'));


// testing array for next two
const wordArray = ['long', 'short', 'longest', 'shortest', 'tiny']

//longest word from array
const findLongestWord = function(arr) {
  let longest = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
};
console.log(findLongestWord(wordArray));

const filterLongWords = function(arr, i) {
  return arr.filter(x => x.length > i);
}
console.log(filterLongWords(wordArray, 4));
