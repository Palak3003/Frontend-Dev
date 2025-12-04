const menu = {
    pizza: 200,
    burger: 120,
    pasta: 150,
    fries: 80
};

function calculateBill(orderItems) {
    try {
        const prices = orderItems.map(item => {
            if (!menu[item]) throw new Error(item + " not available");
            return menu[item];
        });

        return prices.reduce((a, b) => a + b, 0);
    } catch (e) {
        return e.message;
    }
}

console.log(calculateBill(["pizza", "fries"]));
console.log(calculateBill(["pasta", "icecream"]));
