// Adding a background color to all the balances as they will have defaul value of zero
$('#checking-balance').addClass('zero');
$('#savings-balance').addClass('zero');

// Display in a message box
const message = function (text) {
    $('#messages p').html(text);
    // .delay(2000).fadeOut(2000);
}
message('Welcome to the bank of GA!');


//----------Checkiings account----------
//Variable to store checking balance
let checkingBalance = 0;

//function to deposit into a checking account
const checkingDeposit = function () {
    let userInput = $('#checking-amount').val();
    if (userInput === '') {
        message('First input the value');
    }
    else {
        userInput = parseFloat(userInput);
        if (userInput < 0) {
            message('Cannot use negative value');
        }
        else {
            let currentBalance = parseFloat($('#checking-balance').html().slice(1));
            checkingBalance = userInput + currentBalance;
            $('#checking-balance').html(`$${checkingBalance}`);
            message(`Deposited $${userInput}`);
        }
    }
    red();
};

//function to withdraw out of checking account
const checkingWithdraw = function () {
    let userInput = $('#checking-amount').val();
    if (userInput === '') {
        message('First input the value');
    }
    else {
        userInput = parseFloat(userInput);
        if (userInput < 0) {
            message('Cannot use negative value');
        }
        else {
            if (checkingBalance - userInput < 0) {
                if ((checkingBalance - userInput) + savingsBalance < 0) {
                    message('Insufficient funds on both accounts');
                }
                else {
                    userInput -= checkingBalance;
                    checkingBalance = 0;
                    savingsBalance -= userInput;
                    $('#checking-balance').html(`$${checkingBalance}`);
                    $('#savings-balance').html(`$${savingsBalance}`);
                    message('Overdraft was made');
                }
                //TODO add a check for other account
            }
            else {
                let currentBalance = parseFloat($('#checking-balance').html().slice(1));
                checkingBalance = currentBalance - userInput;
                $('#checking-balance').html(`$${checkingBalance}`);
                message(`Withdrawn $${userInput}`);
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
        message('First input the value');
    }
    else {
        userInput = parseFloat(userInput);
        if (userInput < 0) {
            message('Cannot use negative value');
        }
        else {
            let currentBalance = parseFloat($('#savings-balance').html().slice(1));
            savingsBalance = userInput + currentBalance;
            $('#savings-balance').html(`$${savingsBalance}`);
            message(`Deposited $${userInput}`);
        }
    }
    red();
};

//function to withdraw out of savings account
const savingsWithdraw = function () {
    let userInput = $('#savings-amount').val();
    if (userInput === '') {
        message('First input the value');
    }
    else {
        userInput = parseFloat(userInput);
        if (userInput < 0) {
            message('Cannot use negative value');
        }
        else {
            if (savingsBalance - userInput < 0) {
                //overdraft check
                if ((savingsBalance - userInput) + checkingBalance < 0) {
                    message('Insufficient funds on both accounts');
                }
                else {
                    userInput -= savingsBalance;
                    savingsBalance = 0;
                    checkingBalance -= userInput;
                    $('#checking-balance').html(`$${checkingBalance}`);
                    $('#savings-balance').html(`$${savingsBalance}`);
                    message('Overdraft was made');
                }
                //TODO add a check for other account
            }
            else {
                let currentBalance = parseFloat($('#savings-balance').html().slice(1));
                savingsBalance = currentBalance - userInput;
                $('#savings-balance').html(`$${savingsBalance}`);
                message(`Withdrawn $${userInput}`);
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