// DrEvil(10): 10 dollars
//  DrEvil(1000000): 1000000 dollars (pinky)
const DrEvil = function (num){
  if(num === 1000000){
    return num + " dollars (pinky)";
  }
else
return num + " dollars";

}

/*MixUp
Create a function called mixUp. It should take in two strings, and return the
concatenation of the two strings (separated by a space)
slicing out and swapping the first 2 characters of each.
You can assume that the strings are at least 2 characters long. For example:

  mixUp('mix', 'pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!*/
const mixUp = function(st1, st2){
  //const st1sSub = st1.substr(0,1);
  //const st2Sub = st1.substr(0,1);
  const st1sSlice1 = st1.slice(0,2);
  const st1Slice2 = st1.slice(2);
  const st2Slice1 = st2.slice(0,2);
  const st2Slice2 = st2.slice(2);
  const newStr = console.log(st2Slice1 + st1Slice2  + " " + st1sSlice1 + st2Slice2);

    }

    /*FixStart
    Create a function called fixStart. It should take a single argument,
    a string, and return a version where all occurences of its first character
    have been replaced with '*', except for the first character itself.
    You can assume that the string is at least one character long. For example:

    fixStart('babble'): 'ba**le' */
const fixStart = function (str){

  const firstChar =  str.charAt(0);
  for(let i=1; i<str.length; i++ ){
    //const re = /i/gi;
    if(str[i]=== firstChar){
      const newStr = str.replace(`${firstChar}`, "*");
      console.log(newStr);
    }

  }

}
