class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return this.name + " is working in " + this.department;
    }
}

class Manager extends Employee {
    work() {
        return this.name + " is managing the team";
    }
}

const e = new Employee("Riya", "IT");
const m = new Manager("Aman", "IT");

console.log(e.work());
console.log(m.work());
