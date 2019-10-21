console.log("atm js connected");

$(document).ready();
// // checking deposit button
//
// const $checkD = $('input#checking-deposit');
// console.log( $checkD.text() );
// $checkD.on('click', function () {
// console.log("you clicked me");
// });

let checkB = 0;
let savingB = 0;

// make screen red if balance goes to zero
const redScreenOff = function () {
  if ( savingB > 0 ) {
    $("#savings-balance").removeClass('zero');
  }
  if ( checkB > 0 ) {
    $("#checking-balance").removeClass('zero');
  }
}


// checking account //////////////////////////////////
// checking deposit //////////////
$("#checking-deposit").on('click', function() {
  // set the deposit amount
  let deposit = $('#checking-amount').val();
  // convert the deposit amount to a number
  deposit = parseFloat(deposit);
  // add the deposit to the balance
  checkB = checkB + deposit;
  $("#checking-balance").text( "$" + checkB );
  redScreenOff();
});

// checking withdrawal //////
$("#checking-withdraw").on('click', function() {
  // set the withdraw amount
  let checkW = $('#checking-amount').val();
  // convert the withdraw amount to a number
  checkW = parseFloat(checkW);

  // if withdrawal is greater than balance of both account then stop the user
  if ( checkW > ( checkB + savingB ) ) {
    alert("You do not have enough money to withdraw $" + checkW + " from your accounts.")
    return;
  }
  // else if withdrawl is greater than checking account, then take remainder from saving account
  else if ( checkW > checkB ) {
    savingB = savingB - ( checkW - checkB );
    checkB = 0;
    // $("#checking-balance").addClass('zero');
    $("#savings-balance").text( "$" + savingB );
    $("#checking-balance").text( "$" + checkB );
  }
  // else just take withdrawal amount from checking balance
   else {
    checkB = checkB - checkW;
    $("#checking-balance").text( "$" + checkB );
  }
  if ( checkB === 0 ) {
    console.log( checkB );
   $("#checking-balance").addClass('zero');
  }
});

// savings account ///////////////////////////////////
// deposit //////////////
$("#savings-deposit").on('click', function() {
  // set the deposit amount
  let savingD = $('#savings-amount').val();
  // convert the deposit amount to a number
  savingD = parseFloat(savingD);
  // add the deposit to the balance
  savingB = savingB + savingD;
  $("#savings-balance").text( "$" + savingB );

  redScreenOff();
});

// savings withdrawal //////////
$("#savings-withdraw").on('click', function() {
  // set the withdraw amount
  let savingW = $('#savings-amount').val();
  // convert the withdraw amount to a number
  savingW = parseFloat(savingW);

  // if withdrawal is greater than balance of both accounts then stop the user
  if ( savingW > ( savingB + checkB ) ) {
    alert("You do not have enough money to withdraw $" + savingW + " from your accounts.")
    return;
  }
  // else if withdrawal is greater than savings account, then take remainder from checking account
  else  if ( savingW > savingB ) {
      checkB = checkB - ( savingW - savingB);
      savingB = 0;
      // $("#savings-balance").addClass('zero');
      $("#checking-balance").text( "$" + checkB );
      $("#savings-balance").text( "$" + savingB );
    }
    // else just take withdrawal amount from savings balance
    else {
      savingB = savingB - savingW;
      $("#savings-balance").text( "$" + savingB );
    }
    if ( savingB === 0 ) {
     $("#savings-balance").addClass('zero');
    }
});
