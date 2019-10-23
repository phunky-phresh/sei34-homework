//Our accounts object is solely concerned with rules for interacting with bank accounts

//It is the single source of truth for current balances

// console.log("accounts");

//has nothing to do with DOM
//so it would be constant if instead of jquery we want to use another tool (react for example) to deal with DOM



const accounts = {
  checkingBalance: 0,
  savingsBalance: 0,

  total: function () {
    return this.checkingBalance + this.savingsBalance;
  },

  checkingDeposit: function(amount) {
    this.checkingBalance += Number(amount);
  },

  checkingWithdraw: function(amount) {
    amount = Number(amount);
    if (amount <= this.checkingBalance) {
      this.checkingBalance -= amount;
    } else if (amount <= this.total()) {
      const difference = amount - this.checkingBalance;
      this.checkingBalance = 0;
      this.savingsBalance -= difference;
    }
  },

  savingsDeposit: function(amount) {
    this.savingsBalance += Number(amount);
  },

  savingsWithdraw: function(amount) {
    amount = Number(amount);
    if (amount <= this.savingsBalance) {
      this.savingsBalance -= amount;
    } else if (amount <= this.total()) {
      const difference = amount - this.savingsBalance;
      this.savingsBalance = 0;
      this.checkingBalance -= difference;
    }
  },

}
