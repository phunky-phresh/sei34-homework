// # JavaScript Bank
//
// In this homework, you'll create a basic `bank` in Javascript.
// The bank has many `accounts` and the following capabilities that you need to write.
//
// #### Bank
//
// There is only one bank. This bank has an array of accounts.
// The bank needs a method that will return the total sum of money in the accounts.
// It also needs an `addAccount` method that will enroll a new account at the bank and
// add it to the array of accounts. There is no need to create additional functions of
// the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
const bank = {
  accounts: [
    {
      currentBal: 350,
      owner: "Shaneen"
    },
    {
      currentBal: 10285,
      owner: "Mark"
    },
    {
      currentBal: 699,
      owner: "Bianca"
    }
  ],
  totalSum: () => {
    const sumOfAccounts = bank.accounts.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.currentBal
    }, 0);
    console.log(`The total sum of all the money in the accounts is $${sumOfAccounts}.`);
  },
  addAccount: ({ currentBal, owner }) => {
    bank.accounts.push({ currentBal, owner });
    console.log(`Your account has been added! Welcome ${owner}, your current balance is $${currentBal}.`);
  },
  deposit: ({ owner, amount }) => {
    const ownerOfAccount = bank.accounts.find(account => account.owner === owner);
    ownerOfAccount.currentBal += amount;
    console.log(`You have deposited $${amount}. You now have $${ownerOfAccount.currentBal} in your account.`);
  },
  withdraw: ({ owner, amount }) => {
    const ownerOfAccount = bank.accounts.find(account => account.owner === owner);
    if(ownerOfAccount.currentBal >= amount) {
      ownerOfAccount.currentBal -= amount;
      console.log(`You withdrew $${amount}. You now have $${ownerOfAccount.currentBal} in your account.`)
    } else {
      console.log(`Sorry ${owner}, you don't have enough money in your account to withdraw $${amount}.`)
    }
  },
  transfer: ({ fromOwner, toOwner, amount }) => {
    const fromOwnerAccount = bank.accounts.find((account) => account.owner === fromOwner);
    const toOwnerAccount = bank.accounts.find((account) => account.owner === toOwner);

    if (amount > fromOwnerAccount.currentBal) {
      return console.log('You do not have enough money for this transfer');
    }
    fromOwnerAccount.currentBal -= amount;
    toOwnerAccount.currentBal += amount;

    console.log(`${fromOwnerAccount.owner} has transferred $${amount} to ${toOwnerAccount.owner}`);
    console.log(`${fromOwnerAccount.owner}'s balance is: $${fromOwnerAccount.currentBal}`);
    console.log(`${toOwnerAccount.owner}'s balance is: $${toOwnerAccount.currentBal}`);
  }
};

// #### Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw
// from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also
// have your functions `console.log()` values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that
// the methods do indeed work as expected: add some accounts, show the total balance, make some deposits
// and withdrawals, show the new total balance.
//
// ### Tips
//
// Don't overthink this. Shorter code is probably the answer.
//
// ## Bonus
//
// - Ensure that the accounts cannot have negative values.
// - Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
//
// ## Additional
//
// Begin exploring the [JavaScript Koans](https://github.com/liammclennan/JavaScript-Koans). Fork, clone and start trying them.
