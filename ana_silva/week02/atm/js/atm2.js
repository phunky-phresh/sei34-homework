//Joel solution

//debugger; //will stop on the first command

// console.log("before"); //appears 1st

$(document).ready(function () { //if we wrap everything in this, then js only runs after reading everyhting first
  // console.log("inside"); //appears 3rd
  $('#checking-deposit').on('click', function (){
    console.log('is this working');
  });

});

// console.log("after"); //appears 2nd

//Global because is outside document.ready
const checkForZero = function() {
  $('.zero').removeClass('zero');
  const checkingBalance = +$('#checking-balance').text().slice(1);
  if (checkingBalance <=0) {
    $('#checking-balance').addClass('zero');
  }
  const savingsBalance = +$('#savings-balance').text().slice(1);
  if (savingsBalance <=0) {
    $('#savings-balance').addClass('zero');
  }
}


$(document).ready(function () {
  checkForZero();

  $('#checking-deposit').on('click', function (){
    //get the deposit amount
    const deposit = +$('#checking-amount').val();
    //get the current balance
    const currentBalance = +$('#checking-balance').text().slice(1);
    //find the new balance
    const newBalance = currentBalance + deposit;
    //update page
    $('#checking-balance').text('$' + newBalance);
    checkForZero();
  });

  $('#checking-withdraw').on('click', function (){
    //get the amount
    const amount = +$('#checking-amount').val();
    //get the current balance
    const currentBalance = +$('#checking-balance').text().slice(1);

    const otherBalance = +$('#savings-balance').text().slice(1);
    const totalBalance = currentBalance + otherBalance;

    //calc the new balance
    const newBalance = currentBalance - amount;
    //if there is enough money update page
    if (newBalance >= 0) {
      $('#checking-balance').text('$' + newBalance);
    } else if (amount <= totalBalance) {
      $('#checking-balance').text('$0');
      //Here, newBalance is the negative money that didnt exist in the current account
      $('#savings-balance').text('$' + (otherBalance + newBalance));
    }
    checkForZero();
  });



  $('#savings-deposit').on('click', function (){
    //get the deposit amount
    const deposit = +$('#savings-amount').val();
    //get the current balance
    const currentBalance = +$('#savings-balance').text().slice(1);
    //find the new balance
    const newBalance = currentBalance + deposit;
    $('#savings-balance').text('$' + newBalance);
    //update page
    checkForZero();
  });

  $('#savings-withdraw').on('click', function (){
    //get the amount
    const amount = +$('#savings-amount').val();
    //get the current balance
    const currentBalance = +$('#savings-balance').text().slice(1);

    const otherBalance = +$('#checking-balance').text().slice(1);
    const totalBalance = currentBalance + otherBalance;

    //calc the new balance
    const newBalance = currentBalance - amount;
    //if there is enough money update page
    if (newBalance >= 0) {
      $('#savings-balance').text('$' + newBalance);
    } else if (amount <= totalBalance) {
      $('#savings-balance').text('$0');
      //Here, newBalance is the negative money that didnt exist in the current account
      $('#checking-balance').text('$' + (otherBalance + newBalance));
    }
    checkForZero();
  });



});
