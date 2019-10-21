// This code know nothing of negative balances of overdraft protection

// It simply connects DOM elements to logical/business functions
// defined elsewhere (via event handlers)

// Our handy render() function updates every single part of the DOM
// with the latest values from our accounts object (defined elsewhere)
const render = function() {
  $('#checking-balance').text('$' + accounts.checkingBalance);
  $('#savings-balance').text('$' + accounts.savingsBalance);

  $('.zero').removeClass.('zero');

  if (accounts.checkingBalance <= 0) {
    $('#checking-balance').addClass('zero');
  };
  if (accounts.savingsBalance <= 0) {
    $('#savings-balance').addClass('zero');
  };
};

$(document).ready(function() {
  $('#checking-deposit').on('click', function() {
    const amount =$('#checking-amount').val();
    accounts.checkingDeposit(amount);
    render();
  })
});
