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

// checking account
$("#checking-deposit").on('click', function() {
  // set the deposit amount
  let deposit = $('#checking-amount').val();
  // convert the deposit amount to a number
  deposit = parseFloat(deposit);
  checkB = checkB + deposit;
  $("#checking-balance").text( "$" + checkB );

  // remove the red background if balance is greater than zero
  if ( checkB > 0 ) {
    $("#checking-balance").removeClass("zero");
  }
});

$("#checking-withdraw").on('click', function() {
  // set the withdraw amount
  let withdraw = $('#checking-amount').val();
  // convert the withdraw amount to a number
  withdraw = parseFloat(withdraw);
  if ( withdraw > checkB ) {
    alert("You do not have enough money to withdraw $" + withdraw + " from your checking account.")
  } else {
    checkB = checkB - withdraw;
    $("#checking-balance").text( "$" + checkB );
  }
  // make screen red if balance goes to zero
  if ( checkB === 0 ) {
     $("#checking-balance").addClass('zero');
   }
  console.log( withdraw );
  console.log( checkB );
});

// savings account
$("#savings-deposit").on('click', function() {
  // set the deposit amount
  let savingD = $('#savings-amount').val();
  // convert the deposit amount to a number
  savingD = parseFloat(savingD);
  savingB = savingB + savingD;
  $("#savings-balance").text( "$" + savingB );
  console.log( savingD );
  console.log( savingB );

  // remove the red background if balance is greater than zero
  if ( savingB > 0 ) {
    $("#savings-balance").removeClass("zero");
  }
});

$("#savings-withdraw").on('click', function() {
  // set the withdraw amount
  let savingW = $('#savings-amount').val();
  // convert the withdraw amount to a number
  savingW = parseFloat(savingW);
  console.log( savingW );
  console.log( savingB );
  if (savingW === savingB ){
    console.log('What??');
  }
  if ( savingW > savingB ) {
    alert("You do not have enough money to withdraw $" + savingW + " from your savings account.")
    } else {
      // $("#savings-balance").toggleClass('zero');
      savingB = savingB - savingW;
      // textB = `$${ savingB }`;
      $("#savings-balance").text( "$" + savingB );
    }
    // make screen red if balance goes to zero
    if ( savingB === 0 ) {
       $("#savings-balance").addClass('zero');
     }
});
