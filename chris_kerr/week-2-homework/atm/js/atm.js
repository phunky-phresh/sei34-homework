let accounts = {
  savings: {
    balance: 50000,
  },

  checking: {
    balance: 1000,
  },
}

// define an update trigger to re-pull from the account object, and run once to configure page
function updateBalances() {
  $('#checking-balance').text(`\$${accounts.checking.balance}`);
  $('#savings-balance').text(`\$${accounts.savings.balance}`);

  //add or remove class: zero; based on balance
  if (accounts.checking.balance === 0) {
    $('#checking-balance').addClass('zero');
  } else {$('#checking-balance').removeClass('zero');}
  if (accounts.savings.balance === 0) {
    $('#savings-balance').addClass('zero');
  } else {$('#savings-balance').removeClass('zero');}


}
updateBalances();

// deposit triggers and function
$('#checking-deposit').click(function() {deposit( $('#checking-amount').val(), 'checking')})
$('#savings-deposit').click(function() {deposit( $('#savings-amount').val(), 'savings')})

function deposit (value, account) {
  if (value) {
    accounts[account].balance += parseInt(value);
    updateBalances();
    $(`#${account}-amount`).val("");
  } else {return};
}

// withdraw triggers and function
$('#checking-withdraw').click(function() {withdraw( $('#checking-amount').val(), 'checking')})
$('#savings-withdraw').click(function() {withdraw( $('#savings-amount').val(), 'savings')})

function withdraw (value, account) {
  if (value) {
    let overdraftAccount = 'savings';
    if (account === 'savings') {
      overdraftAccount = 'checking';
    }

    //case that there is enough money
    if (value <= accounts[account].balance) {
    accounts[account].balance -= parseInt(value);
    $(`#${account}-amount`).val("");

    //case there is enough money between both
    } else if (value <= accounts[account].balance + accounts[overdraftAccount].balance) {

    accounts[overdraftAccount].balance -= (value - accounts[account].balance);
    accounts[account].balance = 0;
    $(`#${account}-amount`).val("");

  } else {return}
  updateBalances();
  $(`#${account}-amount`).val("");
  }
}
