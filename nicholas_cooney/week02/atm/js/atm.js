const $check = $('#checking-balance');
const $savings = $('#savings-balance');

/////// CHECKING ACCOUNT ///////////

//DEPOSIT
$('#checking-deposit').click(function() {
  // deposit function
  deposit($check, '#checking-amount');
});

//WITHDRAW
$('#checking-withdraw').click(function() {
  //withdraw function
  withdrawOverDraft($check, '#checking-amount', $savings);
});
if ($check.html() === "$0") {
  $check.removeClass('balance').addClass('zero');
}

/////// SAVINGS ACCOUNT ///////////

//DEPOSIT
$('#savings-deposit').click(function() {
  deposit($savings, '#savings-amount');
});

//WITHDRAW
$('#savings-withdraw').click(function() {
  withdrawOverDraft($savings,'#savings-amount', $check);
});
if ($savings.html() === "$0") {
  $savings.removeClass('balance').addClass('zero');
}

// Deposit function
const deposit = function(acc, id) {
  // takes current total and removes '$'
  const current = acc.html().slice(1);
  const deposit = $(id).val();
  //converts both strings to numbers
  const total = Number(current) + Number(deposit);
  //updates to new total
  acc.text('$' + total);
  if (acc.html() !== "$0") {
    //changes class to remove red background
    acc.removeClass('zero').addClass('balance');
  }
};

//withdraw and overdraft function
const withdrawOverDraft = function(acc1, id, acc2) { //acc1 is current account. acc2 is overdraft account. id is the account amount.
  const current = Number(acc1.html().slice(1));
  const withdraw = Number($(id).val());
  //removes withdraw from acc
  const total = current - withdraw;

  if (total >= 0) {
    //commits normal withdraw
    acc1.text('$' + total);
    //changes background back to red if acc = $0
  } if (acc1.html() === "$0") {
    acc1.removeClass('balance').addClass('zero');
    //checks if withdraw is greater than available amount in initial account
  } if (withdraw >= current) {
    const draft = withdraw - current;
    //calculates difference, or overdraft amount
    const otherAcc = Number(acc2.html().slice(1));
    // changes initial account to $0 and updates to red background
    acc1.text("$0");
    acc1.removeClass('balance').addClass('zero');
    //checks if there is available funds in other account
    if (otherAcc >= draft){
      acc2.text('$' + (otherAcc - draft));
      if (acc2.html() === "$0") {
        acc2.removeClass('balance').addClass('zero');
      }
      // no action taken if unavailable funds
    } else {
      console.log(false);
    }
  }
};
