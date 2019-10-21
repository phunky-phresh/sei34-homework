//relevant elements in obj for easy access
const el = {
  checking: {
    $b: $('#checking-balance'),
    $i: $('#checking-amount'),
    $w: $('#checking-withdraw'),
    $d: $('#checking-deposit')
  },
  savings: {
    $b: $('#savings-balance'),
    $i: $('#savings-amount'),
    $w: $('#savings-withdraw'),
    $d: $('#savings-deposit')
  }
}

//listeners
$(document).ready(() => $('.balance').addClass('zero')); // because we start with 0
el.checking.$w.click(() => makeWithdrawal(el.checking, el.savings));
el.checking.$d.click(() => makeDeposit(el.checking));
el.savings.$w.click(() => makeWithdrawal(el.savings, el.checking));
el.savings.$d.click(() => makeDeposit(el.savings));

//helpers //use db instead of pull from ui, should never reference jQuery (as obj)
function makeDeposit(account) {
  let [i, b] = getInputAndBalance(account);
  updateBalance(account.$b, i, b);
  i + b > 0 ? account.$b.removeClass('zero'): null;
}

function makeWithdrawal(account, other) {
  let [i, b] = getInputAndBalance(account);
  if (i <= b) {
    updateBalance(account.$b, b, -i);
    i === b ? account.$b.addClass('zero'): null;
  } else {
    let o = getBalance(other.$b);
    i <= b + o ? updateBoth(account.$b, other.$b, -i, b, o): null;
  }
}

function getInputAndBalance(account) {
  let i = Number(account.$i.val());
  i = isNaN(i) ? 0 : i;
  return [i, getBalance(account.$b)];
}

function getBalance($b) {
  return Number($b.html().slice(1));
}

function updateBalance($b, ...numsToSum) {
  return $b.html(`$${(numsToSum.reduce((s, x) => s + x)).toFixed(2)}`);
}

function updateBoth($b, $o, i, b, o) {
  updateBalance($b, 0.00);
  updateBalance($o, i, b, o);
  o + b + i === 0 ? $('.balance').addClass('zero') : null;
}
