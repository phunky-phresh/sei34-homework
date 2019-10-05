const validateCreditCard = function (card) {
    //Cutting out the dashes
    card = card.replace(RegExp('[-]', 'g'), '');
    //testing the length
    if (card.length !== 16) {
        console.log(card);
        console.log('Error: Length');
        return {valid: false, number: card, error: 'wrong_length'};
    }

    //testing if only numbers are present
    if (RegExp('[a-zA-Z]').test(card)) {
        console.log(card);
        console.log('Error: Letters present');
        return {valid: false, number: card, error: 'letters_present'};
    }

    //testing last digit
    if (parseInt(card.slice(-1)) % 2 !== 0) {
        console.log(card);
        console.log('Error: Last digit');
        return {valid: false, number: card, error: 'last_digit_odd'};
    }

    //testing sum
    let split = card.split('');
    let sum = 0;
    split.forEach(element => {
        sum += parseInt(element);
    });
    if (sum < 16) {
        console.log(card);
        console.log('Error: Sum');
        return {valid: false, number: card, error: 'sum_to_small'};
    }

    //testing different numbers
    const filterCheck = function (value) {
        return value !== card.charAt(0);
    }
    const result = card.split('').filter(filterCheck);
    if (result.length === 0) {
        console.log(card);
        console.log('Error: Difference');
        return {valid: false, number: card, error: 'same_characters'};
    }
    console.log(card);
    console.log('Correct');
    return {valid: true, number: card};
}

console.log(validateCreditCard('9999777788880000'));
console.log("================");
console.log(validateCreditCard('6666666666661666'));
console.log("================");
console.log(validateCreditCard('a92332119c011112'));
console.log("================");
console.log(validateCreditCard('4444444444444444'));
console.log("================");
console.log(validateCreditCard('6666666666666661'));
console.log("================");
console.log(validateCreditCard('1111111111111110'));
console.log("================");
console.log(validateCreditCard('9999-9999-8888-0000'));
console.log("================");