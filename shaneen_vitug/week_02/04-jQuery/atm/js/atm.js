$(document).ready(function () {
  console.log('ready! get set, go!');

  let checkingBalance = $('#checking-balance');
  let savingsBalance = $('#savings-balance');

  // Deposit Function for both accounts
  // Check
  const depositChecking = function () {
    let depositAmount = Number($('#checking-amount').val());
    let numCheckingBalance = Number(checkingBalance.text().slice(1));

    let newBalance = numCheckingBalance + depositAmount;

    checkingBalance.text(`$${newBalance}`);
    // Background back to gray
    if (checkingBalance.text() !== '$0') {
      checkingBalance.css('background-color', '#E3E3E3');
    }
  };

  $('#checking-deposit').click(depositChecking);
  // Savings
  const depositSavings = function () {
    let depositAmount = Number($('#savings-amount').val());
    let numSavingsBalance = Number(savingsBalance.text().slice(1));

    let newBalance = numSavingsBalance + depositAmount;

    savingsBalance.text(`$${newBalance}`);
    // Background back to gray
    if (savingsBalance.text() !== '$0') {
      savingsBalance.css('background-color', '#E3E3E3');
    }
  };

  $('#savings-deposit').click(depositSavings);

  // Withdraw Function for both accounts
  // Check
  const withdrawChecking = function () {
    let withdrawAmount = $('#checking-amount').val();
    let numCheckingBalance = checkingBalance.text().slice(1);

    if (numCheckingBalance >= withdrawAmount) {
      let newBalance = numCheckingBalance - withdrawAmount;
      checkingBalance.text(`$${newBalance}`);
    }
    //Overdraft Function
    let numSavingsBalance = savingsBalance.text().slice(1);

    if (
      numCheckingBalance < withdrawAmount &&
      withdrawAmount <= (Number(numCheckingBalance) + Number(numSavingsBalance))
    ) {
      let newBalance = (Number(numCheckingBalance) + Number(numSavingsBalance)) - withdrawAmount;
      checkingBalance.text(`$0`);
      savingsBalance.text(`$${newBalance}`);
    }
    // Change background to red if $0
    if (checkingBalance.text() === '$0') {
      checkingBalance.css('background-color', 'red');
    }
  };

  $('#checking-withdraw').click(withdrawChecking);
  // Savings
  const withdrawSavings = function () {
    let withdrawAmount = $('#savings-amount').val();
    let numSavingsBalance = savingsBalance.text().slice(1);

    if (numSavingsBalance >= withdrawAmount) {
      let newBalance = numSavingsBalance - withdrawAmount;
      savingsBalance.text(`$${newBalance}`);
    }

    //Overdraft Function
    let numCheckingBalance = checkingBalance.text().slice(1);

    if (
      numSavingsBalance < withdrawAmount &&
      withdrawAmount <= (Number(numCheckingBalance) + Number(numSavingsBalance))
    ) {
      let newBalance = (Number(numCheckingBalance) + Number(numSavingsBalance)) - withdrawAmount;
      savingsBalance.text(`$0`);
      checkingBalance.text(`$${newBalance}`);
    }

    // Change background to red if $0
    if (savingsBalance.text() === '$0') {
      savingsBalance.css('background-color', 'red');
    }
  };

  $('#savings-withdraw').click(withdrawSavings);
});