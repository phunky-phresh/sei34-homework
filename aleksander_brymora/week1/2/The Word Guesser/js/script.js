let word = ['f', 'o', 'x'];
let wordGuess = ['_', '_', '_'];
let guessed = [];
let lengthGuess = 0;
let reward = 0;
let score = 0;
const length = word.length;

const reset = function () {
    word = ['f', 'o', 'x'];
    wordGuess = ['_', '_', '_'];
    guessed = [];
    lengthGuess = 0;
    reward = 0;
    score = 0;
}

const hangman = function (letter) {
    letter = letter.toLowerCase();
    let lettermatch = false;
    if (lengthGuess === length) {
        console.log(`You've already finished`);
    }
    else {
        for (let i = 0; i < guessed.length; i++) {
            if (guessed[i] === letter) {
                lettermatch = true;
            }
        }
        if (!lettermatch) {
            guessed.push(letter);
            let foundLetter = false;
            for (let i = 0; i < word.length; i++) {
                if (letter === word[i]) {
                    console.log(`You have guessed letter in place: ${i + 1} , which is "${word[i]}"`);
                    wordGuess[i] = word[i];
                    console.log(`Your word looks like this now: ${wordGuess}`);
                    score--;
                    console.log(`Your score is: ${score}`);
                    lengthGuess++;
                    foundLetter = true;
                    break;
                }
            }
            if (!foundLetter) {
                console.log(`Oops! The letter "${letter}" is wrong...`);
                score++;
                console.log(`Your score is: ${score}`);
            }
        }
        if (lengthGuess === length) {
            console.log(`Congratulations! You've found the word!`);
            console.log(`Your score is ${score}`);
        }
        else {
            if (score >= 6) {
                console.log(`You've hung the poor fella :(`);
                console.log(
`   __________
    |/      |
    |      (_)
    |       |/
    |      /|/
    |      / 
    |
____|___`);
                guessed = [];
                wordGuess = ['_', '_', '_'];;
            }
        }
    }
}
hangman("a");
hangman("b");
hangman("c");
hangman("d");
hangman("e");
hangman("g");

const wheel = function (letter) {
    letter = letter.toLowerCase();
    const length = word.length;
    if (lengthGuess === length) {
        console.log(`You've already found the word!`);
    }
    else {
        let foundLetter = false;
        for (let i = 0; i < length; i++) {
            if (letter === word[i]) {
                if (letter === wordGuess[i]) {
                    console.log(`Already guessed this one`);
                    foundLetter = true;
                }
                else {
                    console.log(`You have guessed letter in place: ${i + 1} , which is "${word[i]}"`);
                    wordGuess[i] = word[i];
                    console.log(`Your word looks like this now: ${wordGuess}`);
                    reward += Math.round((Math.random()) * 100);
                    console.log(`Your prize is: $${reward}`);
                    lengthGuess++;
                    foundLetter = true;
                    break;
                }
            }
        }
        if (!foundLetter) {
            console.log(`Oops! The letter "${letter}" is wrong...`);
        }
    }
    if (lengthGuess === length) {
        console.log(`Congratulations! You've found the word!`);
        console.log(`Your prize is $${reward}`);
    }
}