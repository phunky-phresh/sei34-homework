// * Keep track of the checking and savings balances somewhere
// * Add functionality so that a user can deposit money into one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Add functionality so that a user can withdraw money from one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Make sure the balance in an account can't go negative. If a user tries to
// withdraw more money than exists in the account, ignore the transaction.
// * When the balance of the bank account is $0 the background of that bank account
// should be red. It should be gray when there is money in the account. (add class .zero)
// * What happens when the user wants to withdraw more money from the checking
// account than is in the account? These accounts have overdraft protection, so if
// a withdrawal can be covered by the balances in both accounts, take the checking
// balance down to $0 and take the rest of the withdrawal from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// * Make sure there is overdraft protection going both ways.
// * Are there ways to refactor your code to make it DRYer?


//Gets the balance for account
const getBalance = function (account) {
  let $balance = $(`#${account}-balance`).html(); //finds the html for the account
  balance = Number($balance.substring(1)); //removes the $ from the html and makes it a number
  return balance; //returns the numeric value
}

//Check if balance is zero and updates css/bg-color
const isBalanceZero = function (account) {
  if (getBalance(account) === 0) {
    $(`#${account}-balance`).addClass('zero'); //to make bg color red if balance 0
  } else {
    $(`#${account}-balance`).removeClass('zero');// makes bg grey
  }
  return;
}

//gets current account overdraft account and amount input by user
const getCurrentAccount = function ($targetId) {
  let account = ""; //initializes the account variable
  let overdraftAcc = "";
  if ($targetId.includes("checking")){ //checks id tag and updates variable account with the right account
    account = "checking";
    overdraftAcc = "savings";
  } else {
    account ="savings";
    overdraftAcc = "checking";
  }
  const amount = Number($(`#${account}-amount`).val()); //Reads the amount as number from input value
  return [account, overdraftAcc, amount];
}

//Deposit into account
const deposit = function (event) {
    const $targetId = $(event.target).attr('id'); //get the account from the event id tag
    let account = getCurrentAccount($targetId)[0]; //uses function to get the account type
    let amount = getCurrentAccount($targetId)[2]; //uses function to get amount input
    const total = getBalance(account) + amount; //gets current balance and adds amount
    $(`#${account}-balance`).html(`$${total}`); //updates the balance html after deposit
    isBalanceZero(account); //updates bg color
}


//Withdraw from account
const withdraw = function (event) {
  const $targetId = $(event.target).attr('id'); //get the account from the event id tag
  let account = getCurrentAccount($targetId)[0];
  let overdraftAcc = getCurrentAccount($targetId)[1];
  let amount = getCurrentAccount($targetId)[2]; //uses function to get amount input
  let total = getBalance(account) - amount; //gets current balance and adds amount

  if (total < 0) { //to not make balances go negative
    let overdraft = 0 - total; //calculates the overdraft value
    let overdraftAccBal = getBalance(overdraftAcc) - overdraft; //gets the 2nd account balance after withdrawing the overdraft value

    if (overdraftAccBal >= 0) { //if other account can cover overdraft
      total = 0; //current account goes 0 and rmeoves overdraft from 2nd account
      $(`#${overdraftAcc}-balance`).html(`$${getBalance(overdraftAcc) - overdraft}`);
    }
    else { //if overdraft is bigger than balance of 2nd account
      return; // doesn't update balance => withdraw doesn't happen
    }
  }

  $(`#${account}-balance`).html(`$${total}`); //updates the balance html
  isBalanceZero(account) //updates bg color
  isBalanceZero(overdraftAcc) //updates bg color
}


//On click events for all buttons
const $depButtonCheck = $("#checking-deposit");
const $depButtonSav = $("#savings-deposit");
const $withButtonCheck = $("#checking-withdraw");
const $withButtonSav = $("#savings-withdraw");

$depButtonCheck.on("click", deposit);
$depButtonSav.on("click", deposit);
$withButtonCheck.on("click", withdraw);
$withButtonSav.on("click", withdraw);
