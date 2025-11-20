let bonus = 5000;

function calculateSalary(isPermanent) {
    let salary = 40000;
    if (isPermanent) {
        salary += bonus;
    }
    console.log(`Total salary is: ${salary}`);
}

calculateSalary(true);
calculateSalary(false);
console.log(`Global bonus is still: ${bonus}`);
