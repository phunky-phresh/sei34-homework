//JS Bank

const jsBank = {
  accounts: [],
  deposit: function(name, amount) {
    return this.modifyAccount(name, amount);
  },

  addAccount: function(name, startBalance=0) {
    this.accounts.push({name: name, balance: startBalance})
    console.log(`Added ${name}, starting balance is $${startBalance}.`);
    this.countAccounts();
  },

  countAccounts: function() {
    console.log(`The JS Bank has ${this.accounts.length} account(s).`);
    console.log('=====================');
  },

  withdraw: function(name, amount) {
    return this.modifyAccount(name, amount, "Withdrawal");
  },

  checkBalance: function(name=false) {
    if (!name) { //return log of all account balances
      let allBalances = [];
      for (let i = 0; i < this.accounts.length; i++) {
        let current = this.accounts[i];
        let msg = `${current.name}'s balance is $${current.balance}.`
        allBalances.push(msg);
      }
      allBalances.push('=====================');
      return console.log(allBalances.join('\n'));
    } else { //only return log of balance of name specified
      return this.modifyAccount(name, undefined, "balance");
    }

  },

  transfer: function(name, amount, other) {
    return this.modifyAccount(name, amount, "Transfer", other);
  },

  //helper
  modifyAccount: function(name,amount=0, action="Deposit", other=undefined) {
    for (let i = 0; i < this.accounts.length; i++) {
      let current = this.accounts[i];
      if (current.name === name) { //matched account name from object
        if (action === "Deposit") {
          current.balance += amount;
        } else if (action === "Withdrawal" || action === "Transfer"){
          if (current.balance < amount) {
            console.log(`${name} has insufficient funds. ${action} of $${amount} not possible.`)
            break;
          }
          current.balance -= amount;
          if (action == "Transfer") {
            for (let j = 0; j < this.accounts.length; j++) {
              let recipient = this.accounts[j];
              if (recipient.name === other) {
                recipient.balance += amount;
                console.log(`${name} transferred $${amount} to ${other}.`);
                break;
              }
            }
            break;
          }
        } else  { //balance check
          console.log(`${current.name}'s ${action} is $${current.balance}.`);
          break;
        }
        console.log(`${name}: ${action} of $${amount} made. New balance is $${current.balance}.`);
        break;
      }
    }
    console.log('=====================');
  }
}

// TODO: rewrite the accounts as separate named class then push to bank.Accounts
// allows calling via: accountName.balance etc rather than bank.balance('accountName')


// jsBank.addAccount('Jez');
// jsBank.addAccount('Kian', 50);
// jsBank.deposit('Jez', 20);
// jsBank.withdraw('Jez', 30);
// jsBank.withdraw('Kian', 10);
// jsBank.checkBalance('Jez');
// jsBank.transfer('Kian', 39, 'Jez');
// jsBank.checkBalance();
