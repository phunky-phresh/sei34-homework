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


const getBalance = function (account) {
  let $balance;
  $balance = $(`#${account}-balance`).html(); //finds the html for the account
  balance = Number($balance.substring(1)); //removes the $ from the html and makes it a number
  return balance;
}
console.log(getBalance("checking"));


let total1;
//Deposit into account
const deposit = function ($amount, account) {
  total1 = getBalance(account) + Number($amount); //gets current balance and adds amount as a number in case it comes as a string.
  $(`#${account}-balance`).html(`$${total1}`); //updates the balance html
  $(`#${account}-balance`).css("background-color", "none");
}
console.log(deposit(10, "checking"));
console.log(deposit(30, "checking"));
console.log(deposit(60, "checking"));


let total2;
//Withdraw from account
const withdraw = function ($amount, account) {
  total2 = getBalance(account) - Number($amount); //gets current balance and adds amount
  if (total2 === 0) {
    $(`#${account}-balance`).css("background-color", "red");
  }
  if (total2 < 0) {
    return; // doesn't update balance = withdraw doesn't happen
  } else {
    $(`#${account}-balance`).html(`$${total2}`); //updates the balance html
  }

}
console.log(withdraw(10, "savings"));
console.log(withdraw(30, "savings"));
console.log(withdraw(190, "savings"));


//If pressing deposit button
const $depButton = $(`input #${account}-deposit`);
const $amount = $(`input #${account}-amount`);
$depButton.on("click", deposit());
