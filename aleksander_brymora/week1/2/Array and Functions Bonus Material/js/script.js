const maxOfTwoNumbers = function (num1, num2) {
    if (num1 > num2) { return num1 }
    else { return num2 }
}
console.log(maxOfTwoNumbers(3, 2));
console.log(maxOfTwoNumbers(3, 5));
console.log(maxOfTwoNumbers(10, 2));
console.log('---------------------------------');

const maxOfThreeNumbers = function (num1, num2, num3) {
    let high = num1;
    if (num2 > high) { high = num2 }
    if (num3 > high) { high = num3 }
    return high;
}
console.log(maxOfThreeNumbers(3, 2, 1));
console.log(maxOfThreeNumbers(3, 2, 5));
console.log(maxOfThreeNumbers(10, 2, 15));
console.log('---------------------------------');

const vowel = function (letter) {
    const regex = RegExp('[eyioa]');
    if (regex.test(letter)) { return true }
    else { return false }
}
console.log(vowel('e'));
console.log(vowel('f'));
console.log(vowel('a'));
console.log('---------------------------------');

const sumArray = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4]));
console.log('---------------------------------');

const multiplyArray = function (arr) {
    let multi = arr[0];
    for (let i = 0; i < arr.length; i++) {
        multi *= arr[i];
    }
    return multi;
}
console.log(multiplyArray([1, 2, 3, 4]));
console.log('---------------------------------');

const reverseString = function (str) {
    let newStr = '';
    for (let i = (str.length - 1); i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
console.log(reverseString('hello'));
console.log(reverseString('some long sentence'));
console.log('---------------------------------');

const findLongestWord = function (words) {
    let long = words[0];
    let longIndex = 0;
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > long.length) {
            long = words[i];
            longIndex = i;
        }
    }
    return long;
}
console.log(findLongestWord(["Saab", "Volvo", "BMW", "Maseratti"]));
console.log('---------------------------------');

const filterLongWords = function (words, i) {
    const newWords = [];
    for (let j = 0; j < words.length; j++) {
        if (words[j].length > i) {
            newWords.push(words[j]);
        }
    }
    return newWords;
}
console.log(filterLongWords(["Saab", "Volvo", "BMW", "Maseratti"], 3));
console.log(filterLongWords(["Saab", "Volvo", "BMW", "Maseratti"], 4));
console.log(filterLongWords(["Saab", "Volvo", "BMW", "Maseratti"], 5));
console.log('---------------------------------');