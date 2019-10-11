const checkingAmount = $('#checking-amount');
const checkingDepositB = $('#checking-deposit');
var checkingBalance = $('#checking-balance');
const checkingwithdrawB = $('checking-withdraw');
const get2 = checkingAmount.val();
var balance = 0;
checkingDepositB.click(function() {

  const get2 = Number(checkingAmount.val());
  var x = '';
  if (get2 == x) {
    console.log('please enter an amount');

  } else {
    '$' + balance += get2;
    //checkingBalance.text(balance);
  }


  console.log(balance);
});
checkingDepositB.click(function() {
  checkingBalance.text(balance);
});