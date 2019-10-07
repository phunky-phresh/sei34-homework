const bank = {
    accountList: [],
    addAccount: function (customerName, customerBalance) {
        const account = {
            name: customerName,
            balance: customerBalance,
            addBalance: function (num) {
                this.balance += num;
                return this.balance;
            },
            subBalance: function (num) {
                if (this.balance - num < 0) {
                    console.log("Cannot withdraw more than you have");
                }
                else {
                    this.balance -= num;
                    console.log("Balance: ", this.balance);
                }
            },
            transfer: function (name, num) {
                console.log(num, this.balance);
                
                if (this.balance - num < 0) {
                    for (let i = 0; i < this.accountList.length; i++) {
                        if (this.accountList[i].name === name) {
                            this.accountList[i].balance += num;
                            this.balance -= num;
                            console.log(`Transfered $${num} to ${name}`);
                        }
                    }
                }
                else {
                    console.log("Cannot transfer funds - insufficient funds");
                }
            }
        }
        this.accountList.push(account);
        console.log(`Created the account for the name ${customerName} with $${customerBalance}.`);
        
    },
    moneySum: function () {
        if (this.accountList.length > 1) {
            let balance = 0;
            for (let i = 0; i < this.accountList.length; i++) {
                balance += this.accountList[i].balance;
            }
            return `There is $${balance} in the bank`;
        }
        else {
            console.log("There are no accounts to transfer to");
            return 0;
        }
    },
};

console.log(bank.addAccount("Aleks", 100));
console.log(bank.addAccount("Mark", 10));
console.log(bank.moneySum());
console.log(bank.accountList[1].transfer("Aleks", 100));
console.log(bank.accountList[1].transfer("Aleks", 10));
console.log(bank.accountList[1].addBalance(100));
console.log(bank.accountList[0].subBalance(100));
console.log(bank.moneySum());
