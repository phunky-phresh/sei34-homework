const bank = [
  {
    name: "nick",
    balance: 10000
  }
];


//// Add Account /////
const addAccount = function(newName, newBalance=0) {
  let add = {name: newName, balance: newBalance};
  bank.push(add);
  console.log(bank);
}

//// total sum of account ////

const totalBalance = function() {
  let total = 0;
  for (let i = 0; i < bank.length; i++) {
    total += bank[i].balance;
  }
  console.log(`The current total of all acounts is ${total}`);
}

//// Deposit and Withdraw ///

//need to find the index each account by name
//// Deposit /////

const deposit = function(name, amount) {
//first find account index through name
  let accountIndex = 0;
  for (let i = 0; i < bank.length; i++) {
    if (bank[i].name === name) {
      accountIndex = i;
    }
  }
  bank[accountIndex].balance += amount;
  console.log(`Deposit $${amount} into account: ${name}. New balance: ${bank[accountIndex].balance}`)
}

//// Withdraw ////

const withdraw = function(name, amount) {
//first find account index through name
  let accountIndex = 0;
  for (let i = 0; i < bank.length; i++) {
    // console.log(bank[i]);
    if (bank[i].name === name) {
      accountIndex = i;
      // break;
    }
  }
    bank[accountIndex].balance -= amount;
    if (amount < bank[accountIndex].balance) {
    console.log(`Withdraw $${amount} from account: ${name}. New balance: ${bank[accountIndex].balance}`);
    // break;
  } else {
    console.log("Insufficient funds");

  }

}

/// transfer ///

const transfer = function(name, amount, depositName) {

  let accountIndex = 0;
  for (let i = 0; i < bank.length; i++) {
    // console.log(bank[i]);
    if (bank[i].name === name) {
      accountIndex = i;
      // break;
    }
  }
  
}

// added two accounts. one uses default amount 0
// as no amount was specified
addAccount("james");
addAccount("monique", 1000);
// sum of all bank accounts
totalBalance();
//deposit
deposit("nick", 10000);
deposit("james", 1000);
// new sum of accounts
totalBalance();
// withdraw
withdraw("nick", 1000);
withdraw("monique", 2000);
// final total
totalBalance();
