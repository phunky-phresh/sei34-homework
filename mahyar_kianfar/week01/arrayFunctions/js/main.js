/*Array and Functions Bonus Material
Define a function maxOfTwoNumbers that takes two numbers as arguments and returns
the largest of them. Use the if-then-else construct available in Javascript.
// You'll have to remember your pre-work, or do some googling to figure this out.*/

const maxOfTwoNumbers = function(number1, number2){
  if (number1 > number2) {
    return number1;
  }else {
    return number2;
  }
}
console.log(maxOfTwoNumbers(90,40));

/*Define a function maxOfThree that takes three numbers as arguments and returns
the largest of them.*/
const maxOfThree = function(number1, number2, number3){

}


/*Write a function that takes a character (i.e. a string of length 1)
and returns true if it is a vowel(A, E, I, O, U), false otherwise.*/


const vowelChecker = function (string) {
  const vowel= ['A', 'E', 'I', 'O', 'U', 'a', 'e','i', 'o', 'u'];
  for (var i = 0; i < vowel.length; i++) {
    for (var j = 0; j < string.length; j++) {
       if (vowel[i] === string[j]) {
         console.log(vowel[i]);
       }
    }


  }
}
console.log(vowelChecker('Ambrella'));
/*Define a function sumArray and a function multiplyArray that sums and
multiplies (respectively) all the numbers in an array of numbers. For example,
sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
Bonus*/
const sumArray = function () {
  var sum = 0;
  const myArray = [1,2,3,4];
  for (var i in myArray) {
      sum += myArray[i];

  }
  console.log('The sum is: ' + sum);
}
console.log(sumArray());


/*Define a function reverseString that computes the reversal of a string. For example,
reverseString("jag testar") should return the string "ratset gaj".*/
function reverseString(string) {
     let newString = "";
     for (var i = string.length-1; i >= 0; i--) {
       newString +=string[i];
     }
     return newString;
}
console.log(reverseString('harharhar'));

//Split() reverce() join('')

/*Write a function findLongestWord that takes an array of words and returns
the length of the longest one.*/
// function findLongestWord(array) {
//   for (var i = 0; i < array.length; i++) {
//     const temp = 0;
//     const longest=0;
//     const length = array[i.length];
//
//     if (array[i.length]> temp) {
//       lonhest = temp;
//       return longest;
//     }
//   }
// }
//
// var array = [ 'p0', 'p1000', 'p99' ];
// findLongestWord(array);



/*Write a function filterLongWords that takes an array of words and an
number i and returns the array of words that are longer than i.*/





// Serge answers 'Sure.' if you ask him a question.
//
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// He answers 'Whatever.' to anything else.
//
// Create a function that takes an input and returns Serge's response.

function hiSerge(input) {

       //let response = '';
       if(input.endswith('?') ){
         return 'sure';
}
         else if (input.lenght === 0) {
           return'fine';
         }
         else if (input === input.toUpperCase()) {
           response = 'chill';
         }else {
          return 'Whatever';
         }
       }
//      const lastChar = string[string.length -1];
//       console.log(lastChar);
//       if(lastChar === '?' ){
//         console.log('sure ');
//      }
//
//          if(string === string.toUpperCase());{
//            return true;
//            //console.log('Woah');
//        }
//
//
//
//
//      }
// hiSerge('UUUUU');
