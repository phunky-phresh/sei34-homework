// Adding a background color to all the balances as they will have defaul value of zero
$('#checking-balance').addClass('zero');
$('#savings-balance').addClass('zero');

//----------Checkiings account----------
//Variable to store checking balance
let checkingBalance = 0;

//function to deposit into a checking account
const checkingDeposit = function () {
    let userInput = $('#checking-amount').val();
    if (userInput === '') {
        alert('First input the value');
    }
    else {
        userInput = parseFloat(userInput);
        if (userInput < 0) {
            alert('Cannot use negative value');
        }
        else {
            let currentBalance = parseFloat($('#checking-balance').html().slice(1));
            checkingBalance = userInput + currentBalance;
            $('#checking-balance').html(`$${checkingBalance}`);
        }
    }
    red();
};

//function to withdraw out of checking account
const checkingWithdraw = function () {
    let userInput = $('#checking-amount').val();
    if (userInput === '') {
        alert('First input the value');
    }
    else {
        userInput = parseFloat(userInput);
        if (userInput < 0) {
            alert('Cannot use negative value');
        }
        else {
            if (checkingBalance - userInput < 0) {
                if ((checkingBalance - userInput) + savingsBalance < 0) {
                    alert('Insufficient funds on both accounts');
                }
                else {
                    userInput -= checkingBalance;
                    checkingBalance = 0;
                    savingsBalance -= userInput;
                    $('#checking-balance').html(`$${checkingBalance}`);
                    $('#savings-balance').html(`$${savingsBalance}`);
                    alert('Overdraft was made');
                }
                //TODO add a check for other account
            }
            else {
                let currentBalance = parseFloat($('#checking-balance').html().slice(1));
                checkingBalance = currentBalance - userInput;
                $('#checking-balance').html(`$${checkingBalance}`);
            }
        }
    }
    red();
};

//----------Checkiings account----------
//Variable to store checking balance
let savingsBalance = 0;

//function to deposit into a savings account
const savingsDeposit = function () {
    let userInput = $('#savings-amount').val();
    if (userInput === '') {
        alert('First input the value');
    }
    else {
        userInput = parseFloat(userInput);
        if (userInput < 0) {
            alert('Cannot use negative value');
        }
        else {
            let currentBalance = parseFloat($('#savings-balance').html().slice(1));
            savingsBalance = userInput + currentBalance;
            $('#savings-balance').html(`$${savingsBalance}`);
        }
    }
    red();
};

//function to withdraw out of savings account
const savingsWithdraw = function () {
    let userInput = $('#savings-amount').val();
    if (userInput === '') {
        alert('First input the value');
    }
    else {
        userInput = parseFloat(userInput);
        if (userInput < 0) {
            alert('Cannot use negative value');
        }
        else {
            if (savingsBalance - userInput < 0) {
                //overdraft check
                if ((savingsBalance - userInput) + checkingBalance < 0) {
                    alert('Insufficient funds on both accounts');
                }
                else {
                    userInput -= savingsBalance;
                    savingsBalance = 0;
                    checkingBalance -= userInput;
                    $('#checking-balance').html(`$${checkingBalance}`);
                    $('#savings-balance').html(`$${savingsBalance}`);
                    alert('Overdraft was made');
                }
                //TODO add a check for other account
            }
            else {
                let currentBalance = parseFloat($('#savings-balance').html().slice(1));
                savingsBalance = currentBalance - userInput;
                $('#savings-balance').html(`$${savingsBalance}`);
            }
        }
    }
    red();
};

const red = function () {
    if (savingsBalance === 0) {
        $('#savings-balance').addClass('zero');
    }
    else {
        $('#savings-balance').removeClass('zero');
    }

    if (checkingBalance === 0) {
        $('#checking-balance').addClass('zero');
    }
    else {
        $('#checking-balance').removeClass('zero');
    }
}


//Button events
$('#checking-deposit').click(checkingDeposit);
$('#checking-withdraw').click(checkingWithdraw);
$('#savings-deposit').click(savingsDeposit);
$('#savings-withdraw').click(savingsWithdraw);