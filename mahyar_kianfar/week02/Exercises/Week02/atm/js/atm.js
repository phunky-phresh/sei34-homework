const checkingAmount = $('#checking-amount');
const checkingDepositB = $('#checking-deposit');
var checkingBalance = $('#checking-balance');
const checkingwithdrawB = $('#checking-withdraw');
const get2 = checkingAmount.val();

let accounts = {
  checking: {
    balance: 0,
  },
  savings: {
    balance: 0,
  },

}

//checking account deposit trigger
checkingDepositB.click(function() {
  depositChekingAcc()
})

//function for adding deposit to the checking account
const depositChekingAcc = function() {

  const value = Math.abs(parseInt(checkingAmount.val()));
  var x = '';
  if (value == x) {
    alert('please Enter an Positive Amount');

  } else {

    //balance += get2;
    accounts.checking.balance += value;
    //var finalCheckingBalance = balance;
    checkingBalance.text('\$' +
      accounts.checking.balance);
    backgroundUpdate();
    console.log(accounts.checking.balance);

  }

}

//checking account withdraw trigger
checkingwithdrawB.click(function() {
  withdrawChekingAcc()
})

//function for withdraw value from the checking account
const withdrawChekingAcc = function() {

  const withDrawAmount = Math.abs(parseInt(checkingAmount.val()));
  console.log(withDrawAmount);
  var x = '';
  if (withDrawAmount == x) {
    console.log('please enter an amount');

  }
  if (withDrawAmount <= accounts.checking.balance) {
    accounts.checking.balance -= withDrawAmount;
    console.log(accounts.checking.balance);
    checkingBalance.text('\$' +
      accounts.checking.balance);
    backgroundUpdate();
    console.log(accounts);


  }
}

//Savings account deposit trigger
$('#savings-deposit').click(function() {
  depositSavingAcc()
})

//function for adding deposit to the savings account
const depositSavingAcc = function() {

  const value = Math.abs(parseInt($('#savings-amount').val()));
  var x = '';
  if (value == x) {
    alert('please Enter an Positive Amount');

  } else {
    accounts.savings.balance += value;
    $('#savings-balance').text('\$' +
      accounts.savings.balance);
    backgroundUpdate();
    console.log(accounts.savings.balance);

  }

}

//savings account withdraw trigger
$('#savings-withdraw').click(function() {
  withdrawSavingAcc()
})

//function for withdraw value from the savings account
const withdrawSavingAcc = function() {

  const withDrawAmountSavings = Math.abs(parseInt($('#savings-amount').val()));
  console.log(withDrawAmountSavings);
  var x = '';
  if (withDrawAmountSavings == x) {
    alert('Please enter an Positive Amount');

  }
  if (withDrawAmountSavings <= accounts.savings.balance) {
    accounts.savings.balance -= withDrawAmountSavings;
    console.log(accounts.savings.balance);
    $('#savings-balance').text('\$' +
      accounts.savings.balance);
    backgroundUpdate();
    console.log(accounts);


  }
}



//Function to update the background color to red

const backgroundUpdate = function() {
  $('.zero').removeClass('zero');
  if (accounts.checking.balance === 0) {
    $('#checking-balance').addClass('zero');
  } else {
    $('#checking-balance').removeClass('zero');
  }
  if (accounts.savings.balance === 0) {
    $('#savings-balance').addClass('zero');
  } else {
    $('#savings-balance').removeClass('zero');

  }
}