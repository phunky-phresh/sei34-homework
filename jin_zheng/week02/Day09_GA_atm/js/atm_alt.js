function createAccount(name) {
    let account = {
        amount: 0,
        input: $('#' + name + '-amount'),
        display: $('#' + name + '-balance'),
        depositButton: $('#' + name + '-deposit'),
        withdrawButton: $('#' + name + '-withdraw'),
        name: name};
    account.depositButton.click(() => deposit(account));
    updateDisplay(account);
    return account;
}

function setup() {
    checking = createAccount('checking');
    savings = createAccount('savings');
    checking.withdrawButton.click(() => withdraw(checking, savings));
    savings.withdrawButton.click(() => withdraw(savings, checking));
}

function getNumber(obj) {
    return parseInt(obj.val());
}

function deposit(account) {
    depositAmount = getNumber(account.input);
    if (depositAmount < 0) {
        return;
    }
    account.amount += depositAmount;
    updateDisplay(account);
}

function updateDisplay(account) {
    account.display.text("$" + account.amount);
    account.display.toggleClass('zero', account.amount == 0);
}

function withdraw(account, backup) {
    val = getNumber(account.input);
    if (account.amount >= val) {
        account.amount -= val;
    } else if (val <= (account.amount + backup.amount)) {
        val -= account.amount;
        account.amount = 0
        backup.amount -= val;
    }
    updateDisplay(account);
    updateDisplay(backup);
}

$(document).ready(setup);
