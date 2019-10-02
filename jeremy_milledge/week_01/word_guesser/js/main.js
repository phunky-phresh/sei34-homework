//word guessing game

const word = ['H', 'A', 'N', 'G', 'M', 'A', 'N'];
let working = new Array(word.length);
working.fill('_');
let guessed = [];
let rewardTotal = 0;
let guessesRemaining = 10;
let totalHits = 0;


const guessLetter = function(letter) {
  if (!guessesRemaining) {
    return console.log('No more guesses, you lose!')
  }
  let upper = letter.toUpperCase();
  guessesRemaining -= 1;
  if (guessed.includes(upper)) {
    console.log(`You've already guessed ${upper}! \
    You lose that guess, sorry!`);
    rewardCalc();
    statusMsg();
  } else {
    guessed.push(upper);
    let hits = 0;
    let correct = false;
    for (let i = 0; i < word.length; i++) {
      if (upper === word[i]) {
        working[i] = upper;
        hits++
        correct = true;
      }
    }
    if (correct) {
      console.log('Congrats, the letter is correct!');
    }
    rewardCalc(hits);
    if (arrayEquivalence(working, word)) {
      return console.log(`YOU WON $${rewardTotal}!!!`);
    } else {
      statusMsg();
      totalHits += hits;
      let lettersRemaining = word.length - totalHits;
      console.log(`Letters to be found: ${lettersRemaining}`);
    }

  }


};
 // HELPERS
 const statusMsg = function() {
   /*print update on letters guessed already, the \
   position of hits and total reward currently */

   console.log(`What you've got: ${working}`);
   console.log(`Letters you've guessed: ${guessed}`);
   console.log(`Your current reward: $${rewardTotal}.`);
   console.log(`You have ${guessesRemaining} guesses left.`)
 }


const rewardCalc = function(lettersFound=0) {
  /* calc the change in reward for this letter */
  let dollars = Math.floor(Math.random() * 100);
  if (!lettersFound) {
    if (rewardTotal - dollars < 0) {
      rewardTotal = 0;
    } else {
      rewardTotal -= dollars;
    }
  }
  else {
    rewardTotal += dollars * lettersFound;
  }
};

const arrayEquivalence = function(arr1, arr2) {
  /*return true if arrays have same contents*/

  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

console.log(guessLetter('G'));
console.log(guessLetter('X'));
console.log(guessLetter('H'));
console.log(guessLetter('I'));
console.log(guessLetter('G'));
console.log(guessLetter('N'));
console.log(guessLetter('M'));
console.log(guessLetter('U'));
console.log(guessLetter('T'));
console.log(guessLetter('A'));
