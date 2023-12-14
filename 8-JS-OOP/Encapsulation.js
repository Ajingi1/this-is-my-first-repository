// create a class
// Encapsulation

class BankAccount{
    constructor(accounNumber, balance){
        this.accounNumber = accounNumber;
        this.balance = balance;
    }
    deposit(amount){
        this.balance += amount;
    }
    withdraw(amount){
        if(amount <= this.balance){
            this.balance -= amount;
        }
    }
    getAccountInfo(){
        return `Account number: ${this.accounNumber}, Balance: ${this.balance}`;
    }
}

const myAccount = new BankAccount("123456789", 1000);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log(myAccount.getAccountInfo());

const ninaAccount = new BankAccount("987654321", 10000000);
ninaAccount.deposit(500);
ninaAccount.withdraw(200);
console.log(ninaAccount.getAccountInfo());