console.log("hello");

const scrabble = {
  letterScores: {
    1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2: ["D", "G"],
    3: 'BCMP'.split(''),
    4: 'FHVWY'.split(''),
    5: ['K'],
    8: ['J', 'K'],
    10: ['Q', 'Z'],
  },
  getWordScore: function( word ){
    word = word.toUpperCase();

    let score = 0; // for storing the accumulating total score
    for (var i = 0; i < word.length; i++) {
      const currentLetter = word[i];

      //look up the score for this letter and add it to the total
      // to do this with our current data structure, we have to loop
      // through every key-value pair in the letterScores and see if
      //current letter is in the array of letters, and if so
      // add the key which is the score for any of those letters in total

      for( let key in this.letterScores ){
        if( this.letterScores[key].includes(currentLetter) ){
          score += parseInt(key);
        }
      }

    }
    return score;
  }
};

const scrabbleImproved = {
  letterScores: {
    'a': 1, 'e': 1, 'i': 1, 'o': 1,
    'u': 1, 'l': 1, 'n': 1, 'r': 1,
    's': 1, 't': 1, 'd': 2, 'g': 2,
    'b': 3, 'c': 3, 'm': 3, 'p': 3,
    'f': 4, 'h': 4, 'v': 4, 'w': 4,
    'y': 4, 'k': 5, 'j': 8, 'x': 8,
    'q': 10, 'z': 10
  },
  getWordScore: function( word ){
    let score = 0;
    for (var i = 0; i < word.length; i++) {
      const currentLetter = word[i];

      // NO Nested Looping,
      // just look up each letter directly to get the score
      const letterScore = this.letterScores[currentLetter];
      score += letterScore;

    }
    return score;
  }
}

console.log(scrabble.getWordScore('cabbage'));
console.log(scrabbleImproved.getWordScore('cabbage'));
