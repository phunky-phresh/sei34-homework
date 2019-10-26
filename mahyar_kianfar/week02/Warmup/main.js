// Scrabble Score
// Write a program that, given a word, computes the scrabble score for that word.
//
// scrabble("cabbage")
// // => 14
// Letter Values
// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10
// Extensions
// You can play a :double or a :triple letter.
// You can play a :double or a :triple word.

const scrabble = {
  letterScores: {
    1: ["A", "E", "O", "U", "L", "N", "R", "S", "T"],
    2: ["D", 'G'],
    3: ['BCMP'.split('')],
    4: ['FHVWY'.split('')],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']

  }
  getWorldScore: function(word) {
    word = word.toUpperCase();
    let socre = 0;
    for (var i = 0; i < word.length; i++) {

      const currentLetter = word[i];

      for (var key in this.letterScores) {
        if (this.letterScores[key.includes(currentLetter)] {
            score += parseInt(key);
          }
        }
      }
      return score;
    }

  }
}
}

console.log(scrabble.getWorldScore());


const scrabbleImproved = {
  letterScores: {
    'a': 1,
    'e': 1,
    'i': 1,
    'o': 1,
    'u': 1,
    'l': 1,
    'n': 1,
    'r': 1,
    's': 1,
    't': 1,
    'd': 2,
    'g': 2,
    'b': 3,
    'c': 3,
    'm': 3,
    'p': 3,
    'f': 4,
    'h': 4,
    'v': 4,
    'w': 4,
    'y': 4,
    'k': 5,
    'j': 8,
    'x': 8,
    'q': 10,
    'z': 10
  },

  getWorldScore: function(word) {
    let score = 0;

    for (var i = 0; i < word.length; i++) {
      const currentLetter = word[i];

      const letterScores = this.letterScores[currentLetter];
      score += letterScores;
    }
    return score;
  }
}
console.log(scrabbleImproved);



// const obj = {
//
//   A: '1',
//   E: '1',
//   O: '1',
//   U: '1',
//   L: '1',
//   N: '1',
//   R: '1',
//   S: '1',
//   T: '1'
//
// }
//
//
// function scrabble(str) {
//   const keys = Object.keys(obj);
//   console.log(keys);
//   var count = [];
//   for (var i = 0; i < str.length; i++) {
//     console.log(str[i].toUpperCase());
//     if (str[i].toUpperCase() === keys) {
//       count.push(keys);
//     }
//     return count;
//   }
// }