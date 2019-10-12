//
// Week 2, Day 4
// Day 9 - Friday, 11 October 2019
//
// #Title: ATM App
//
// ###Type:
// - Lab
//
// ###Summary
// - This lab will help you practice JavaScript functions and manipulating the DOM with jQuery.
// - You'll be selecting elements, manipulating HTML, and manipulating style along
// with building out the logic using JavaScript.
//
// ###Objectives:
// - DOM selection, appending, removal, updating
//
// ###Specification:
//
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
// should be red. It should be gray when there is money in the account.
// * What happens when the user wants to withdraw more money from the checking
// account than is in the account? These accounts have overdraft protection, so if
// a withdrawal can be covered by the balances in both accounts, take the checking
// balance down to $0 and take the rest of the withdrawal from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// * Make sure there is overdraft protection going both ways.
// * Are there ways to refactor your code to make it DRYer?

// stores both checking and savings balances
let accounts = {
  checking: 0,
  savings: 0
};

// ensures DOM is ready. See link: https://api.jquery.com/ready/
$(function() {

  // deposit in checking account
  $("#checking-deposit").on("click", function() {
    let $checkingAmount = parseFloat($("#checking-amount").val());
    let $checkingBalance = $("#checking-balance");
    if ($checkingAmount > 0) {
      accounts.checking += $checkingAmount;
      $checkingBalance.text(`$${ accounts.checking }`);
      $("div.clear").text("");
      $("div.clear").text(`Successfully deposited $${ $checkingAmount } into the checking account.`);
    } else {
        $("div.clear").text("");
        $("div.clear").text(`Can only deposit positive amounts.`);
    }

    // removes red background due to the zero class and adds grey background in balance class
    if (accounts.checking > 0) {
      $checkingBalance.removeClass('zero');
      $checkingBalance.attr('class', 'balance');
    }

    // clears the input box
    $("#checking-amount").val("");
  });

  // withdraw from checking account
  $("#checking-withdraw").on("click", function() {
    let $checkingAmount = parseFloat($("#checking-amount").val());
    let $checkingBalance = $("#checking-balance");
    let $savingsBalance = $("#savings-balance");
    let totalBalance = accounts.checking + accounts.savings;

    // withdraw from checking account only
    if ($checkingAmount <= accounts.checking && $checkingAmount > 0) {
      accounts.checking -= $checkingAmount;
      $checkingBalance.text(`$${ accounts.checking }`);
      $("div.clear").text("");
      $("div.clear").text(`Successfully withdrew $${ $checkingAmount } from the checking account.`);

      // check if amount to withdraw exceeds the total balance in checking and savings accounts. If it doesn't, allow to withdraw from the savings account if the amount exceeds the balance in the checking account
    } else if ($checkingAmount > accounts.checking && $checkingAmount <= totalBalance) {
      accounts.savings = accounts.savings - $checkingAmount + accounts.checking;
      $savingsBalance.text(`$${ accounts.savings }`);
      accounts.checking = 0;
      $checkingBalance.text(`$${ accounts.checking }`);
      $("div.clear").text("");
      $("div.clear").text(`Successfully withdrew a total of $${ $checkingAmount } from the checking  and savings accounts.`);
    } else if ($checkingAmount > totalBalance) {
      $("div.clear").text("");
      $("div.clear").text(`Insufficient funds in both accounts to withdraw.`);
    } else {
      $("div.clear").text("");
      $("div.clear").text(`Can only withdraw positive amounts.`);
    }

    // adding class of zero will turn the background red (as per css style)
    if (accounts.checking === 0) {
      $checkingBalance.attr('class', 'zero');
    }

    // adding class of zero will turn the background red (as per css style)
    if (accounts.savings === 0) {
      $savingsBalance.attr('class','zero');
    }

    // clear the input box
    $("#checking-amount").val("");
  });

  // deposit in savings account
  $("#savings-deposit").on("click", function() {
    let $savingsAmount = parseFloat($("#savings-amount").val());
    let $savingsBalance = $("#savings-balance");
    if ($savingsAmount > 0) {
      accounts.savings += $savingsAmount;
      $savingsBalance.text(`$${ accounts.savings }`);
      $("div.clear").text("");
      $("div.clear").text(`Successfully deposited $${ $savingsAmount } into the savings account.`);
    } else {
        $("div.clear").text("");
        $("div.clear").text(`Can only deposit positive amounts.`);
    }

    // removes red background due to the zero class and adds grey background in balance class
    if (accounts.savings > 0) {
      $savingsBalance.removeClass('zero');
      $savingsBalance.attr('class', 'balance');
    }

    // clears the input box
    $("#savings-amount").val("");
  });

  // withdraw from savings account
  $("#savings-withdraw").on("click", function() {
    let $savingsAmount = parseFloat($("#savings-amount").val());
    let $savingsBalance = $("#savings-balance");
    let $checkingBalance = $("#checking-balance");
    let totalBalance = accounts.checking + accounts.savings;

    // withdraw from savings account only
    if ($savingsAmount <= accounts.savings && $savingsAmount > 0) {
      accounts.savings -= $savingsAmount;
      $savingsBalance.text(`$${ accounts.savings }`);
      $("div.clear").text("");
      $("div.clear").text(`Successfully withdrew $${ $savingsAmount } from the savings account.`);

      // check if amount to withdraw exceeds the total balance in checking and savings accounts. If it doesn't, allow to withdraw from the checking account if the amount exceeds the balance in the savings account
    } else if ($savingsAmount > accounts.savings && $savingsAmount <= totalBalance) {
      accounts.checking = accounts.checking - $savingsAmount + accounts.savings;
      $checkingBalance.text(`$${ accounts.checking }`);
      accounts.savings = 0;
      $savingsBalance.text(`$${ accounts.savings }`);
      $("div.clear").text("");
      $("div.clear").text(`Successfully withdrew a total of $${ $savingsAmount } from the checking  and savings accounts.`);
    } else if ($savingsAmount > totalBalance) {
      $("div.clear").text("");
      $("div.clear").text(`Insufficient funds in both accounts to withdraw.`);
    } else {
      $("div.clear").text("");
      $("div.clear").text(`Can only withdraw positive amounts.`);
    }

    // adding class of zero will turn the background red (as per css style)
    if (accounts.savings === 0) {
      $savingsBalance.attr('class','zero');
    }

    // adding class of zero will turn the background red (as per css style)
    if (accounts.checking === 0) {
      $checkingBalance.attr('class', 'zero');
    }

    // clear the input box
    $("#savings-amount").val("");
  });
});
