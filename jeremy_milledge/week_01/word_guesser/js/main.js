//word guessing game

//initialisations
const word = ['H', 'A', 'N', 'G', 'M', 'A', 'N'];
let working = (new Array(word.length)).fill('_');
let guessed = [];
let rewardTotal = 0;
let bodyParts = 0;
let totalHits = 0;

//game logic and output
const guessLetter = function(letter) {
  if (bodyParts === 6) {
    return console.log('The man has been hanged, you lose!')
  }
  let upper = letter.toUpperCase();
  console.log(`===========`);
  if (guessed.includes(upper)) {
    console.log(`You've already guessed ${upper}. You lose that guess!`);
    bodyParts++;
    rewardCalc();
    statusMsg();
  } else {
    guessed.push(upper);
    let hits = 0;
    let correct = false;
    for (let i = 0; i < word.length; i++) {
      if (upper === word[i]) {
        working[i] = upper;
        hits++;
        correct = true;
        if (bodyParts > 0) {
          bodyParts--;
        }
      }
    }
    if (correct) {
      console.log(`Congrats, the letter ${upper} is correct!`);
    } else {
      bodyParts++;
      console.log(`Sorry, the letter ${upper} is inorrect`);
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

   console.log(`\
What you've got: ${working}\n
Letters you've guessed: ${guessed}\n
Your current possible reward: $${rewardTotal}.\n
You've accrued ${bodyParts} body parts out of 6.`);
 }


const rewardCalc = function(lettersFound=0) {
  /* calc the change in reward for this letter */

  let dollars = Math.floor(Math.random() * 100);
  if (!lettersFound) {
    if (rewardTotal - dollars < 0) {
      rewardTotal = 0;
    } else {
      console.log(`Removed from reward: $${dollars}`);
      rewardTotal -= dollars;
    }
  }
  else {
    console.log(`Added to reward: $${dollars}`);
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


//test output
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
