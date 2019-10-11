console.log("hello");


// # Anagram Detector
//
// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word.
//
// In other words, given: `"listen"` and `["enlists" "google" "inlets" "banana"]` the program should return "inlets".
//
// ## Suggestions
//
// - Start out by getting this working with discrete functions.
// - If you feel comfortable with that, try to put all your functions, collections, etc, into an object.


const anagramDetector = {
  anagrams: [],
  customSort: function(word){
    return word.split("").sort().join("");
  },
  checkForAnagram: function(word, wordList){
    let sortedWord = this.customSort(word);

    for (let i = 0; i < wordList.length; i++) {
      let wordToCheck = this.customSort(wordList[i]);
      if( sortedWord === wordToCheck){
        this.anagrams.push(wordList[i]);
      }
    }
    return `The anagram of ${word} is ${this.anagrams}`;

  }
}

console.log(anagramDetector.checkForAnagram("listen", ["enlists", "google", "inlets", "banana"]));
