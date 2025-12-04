const products = [
    { id: 1, name: "Pen", category: "stationery", price: 10, stock: 50 },
    { id: 2, name: "Notebook", category: "stationery", price: 40, stock: 20 },
    { id: 3, name: "Phone", category: "electronics", price: 15000, stock: 5 },
    { id: 4, name: "Charger", category: "electronics", price: 500, stock: 30 },
    { id: 5, name: "Mug", category: "home", price: 200, stock: 0 }
];

function getLowStockProducts(threshold = 5) {
    return products.filter(p => p.stock <= threshold);
}

function sortProductsByPrice(order = "asc") {
    const copy = [...products];
    return copy.sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price);
}

function calculateTotalInventoryValue() {
    return products.reduce((sum, p) => sum + p.price * p.stock, 0);
}

function groupByCategory() {
    return products.reduce((acc, p) => {
        acc[p.category] = acc[p.category] || [];
        acc[p.category].push(p);
        return acc;
    }, {});
}

console.log(getLowStockProducts());
console.log(sortProductsByPrice("asc"));
console.log(calculateTotalInventoryValue());
console.log(groupByCategory());
