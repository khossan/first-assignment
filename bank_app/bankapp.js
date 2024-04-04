class BankAccount {
  constructor(accountNumber, ownerName, balance = 0) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) {
      console.error("Please enter positive number");
      return;
    }
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
      return;
    }
    this.balance -= amount;
    console.log("withdrew $" + amount);
  }

  getBalance() {
    return this.balance;
  }

  displayAccountInfo() {
    console.log("Account Number:" + this.accountNumber);
    console.log("Owner Name:" + this.ownerName);
    console.log("Balance: $" + this.balance);
  }
}

const account1 = new BankAccount(1001, "John Due", 700);
const account2 = new BankAccount(1002, "Kamal Hossan", 500);

account1.deposit(200);
account1.withdraw(100);
account1.displayAccountInfo();
console.log("\n");
account2.deposit(600);
account2.withdraw(800);
account2.displayAccountInfo();
