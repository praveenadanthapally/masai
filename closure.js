function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      console.log("Current count:", count);
    },
    decrement: function () {
      count--;
      console.log("Current count:", count);
    }
  };
}

const counter1 = createCounter();
counter1.increment();
counter1.increment();
counter1.decrement();

const counter2 = createCounter();
counter2.increment();
counter2.increment();
counter2.increment();

function createBankAccount() {
  let balance = 0;
  let transactionHistory = [];
  return {
    deposit: function (amount) {
      balance += amount;
      transactionHistory.push({ type: "Deposit", amount });
      console.log("Deposited:", amount);
    },
    withdraw: function (amount) {
      if (amount <= balance) {
        balance -= amount;
        transactionHistory.push({ type: "Withdraw", amount });
        console.log("Withdrawn:", amount);
      } else {
        console.log("Insufficient balance");
      }
    },
    getBalance: function () {
      return balance;
    },
    getHistory: function () {
      return transactionHistory;
    }
  };
}

const account = createBankAccount();
account.deposit(500);
account.withdraw(200);
account.withdraw(400);
console.log(account.balance);
console.log(account.getBalance());
console.log(account.getHistory());
