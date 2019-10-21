//#___planning log;___
//## __1 get value from balance and input__
//## __2 deposit function__
//_* click button => calcution => output to balance._
//## __3 withdraw function__
//_* click button => check balance sum => calculation => output to balance (if execuated)._
//## __4 function to turn background red if balance is 0.__

//1////////////////////////////////////////////////////////////////////////////
const getValue = function ($element) {
        let value = $element.text();
        if (value) {
            value = value.substring(1);
        } else {
            value = $element.val();
        }
        return value;
}
//2////////////////////////////////////////////////////////////////////////////

const deposit = function($account, balance, amount) {
    if (amount > 0) {
        balance += amount
    }
    $account.children('.balance').text("$" + balance);
}
//3/////////////////////////////////////////////////////////////////////////////
const withdraw = function($account, balance, amount) {
    let totalBalance = 0;
    for (let i = 0; i < $('.balance').length; i++) {
        totalBalance += Number(getValue($('.balance').eq(i)));
    }
    if (amount < balance) {
        balance -= amount;
    } else if (amount <= totalBalance) {
        balance = 0;
        let balance2 = totalBalance - amount
        if ($account.next('.account').length !== 0) {
            $account.next('.account').children('.balance').text("$" + balance2);
        } else {
            $account.prev('.account').children('.balance').text("$" + balance2);
        }
    }
    $account.children('.balance').text("$" + balance)
}

//4/////////////////////////////////////////////////////////////////////////////
const formatToggle = ($account, balance) =>  {      $account.children('.balance').toggleClass('zero', balance === 0);}

//main//////////////////////////////////////////////////////////////////////////
const setup = function () {
    const $cheq = $('#checking');
    const $sav = $('#savings');
    let balance = ($account) => Number(getValue($account.children(".balance")));
    let amount = ($account) => Number(getValue($account.children("input:text")));

    formatToggle($cheq, balance($cheq)); //update display
    formatToggle($sav, balance($sav)); //update display

    $cheq.children('[value="Deposit"]').click(() => {deposit($cheq, balance($cheq), amount($cheq)); formatToggle($cheq, balance($cheq))});
    $sav.children('[value="Deposit"]').click(() => {deposit($sav, balance($sav), amount($sav)); formatToggle($sav, balance($sav))});
    $cheq.children('[value="Withdraw"]').click(()=> {withdraw($cheq, balance($cheq), amount($cheq)); formatToggle($cheq, balance($cheq))});
    $sav.children('[value="Withdraw"]').click(()=> {withdraw($sav, balance($sav), amount($sav));formatToggle($sav, balance($sav))});
}

$(document).ready(setup); //run setup when browser finishes loading html.
