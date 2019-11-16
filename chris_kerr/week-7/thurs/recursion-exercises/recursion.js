// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(input){
    // This function returns the largest number in a given array.
    let output = input;
    if (output.length > 1) {
        if (output[0] > output[1]) {
            output.splice(1, 1);
        } else {
            output.splice(0, 1);
        }
        findMax(output);
    }
    return output[0];
}

function factorial(n){
    // This function returns the factorial of a given number.
    let output;
    if (n > 1) {
        return (n * factorial(n-1))
    } else {
        return 1
    }

}

function fibonacci(n){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1

    function fibonacciSeq(n) {
        let sequence = [];
        if (n > 2) {
            sequence = fibonacciSeq(n-1);
            sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
            return sequence;
        } else {
            return [1, 1];
        }
    }

    let output = fibonacciSeq(n); 
    return output[n-1];
end

}

function coinFlips(n){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"

    function flip(string, n) {
        if (n > 1) {

            let flip1 = flip('H', n-1);
            let flip2 = flip('T', n-1);

            flip1.forEach(function(e, i){
                flip1[i] = string + e
            })

            flip2.forEach(function(e, i){
                flip2[i] = string + e
            })

            let output = [flip1, flip2];
            return output.flat();

        } else {
            return [string];
        }
    }

    let output = [flip('H', n), flip ('T', n)]; // anticipating that an array comes up with the H & T appended strings from 'string', that can then be flattened.

    return output.flat();

}

function letterCombinations(){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}