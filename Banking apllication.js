class BankAccount {
    #balance;
    constructor(initial = 0) {
        this.#balance = initial;
    }

    deposit(amount) {
        if (amount <= 0) throw new Error("Invalid deposit amount");
        this.#balance += amount;
        return this.#balance;
    }

    withdraw(amount) {
        if (amount <= 0) throw new Error("Invalid withdraw amount");
        if (amount > this.#balance) throw new Error("Insufficient balance");
        this.#balance -= amount;
        return this.#balance;
    }

    getBalance() {
        return this.#balance;
    }
}

try {
    const acc = new BankAccount(1000);
    console.log(acc.deposit(500));
    console.log(acc.withdraw(200));
    console.log(acc.getBalance());
    console.log(acc.withdraw(2000));
} catch (e) {
    console.log("Error:", e.message);
}
