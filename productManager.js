class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }
  applyDiscount(percent) {
    this.price -= (this.price * percent) / 100;
    return this.price;
  }
  displayDetails() {
    return `Product ID: ${this.id} | Name: ${this.name} | Category: ${this.category} | Price: ₹${this.price.toFixed(2)}`;
  }
}

const products = [
  new Product(1, "Laptop Pro", 1500, "Electronics"),
  new Product(2, "Smartphone X", 900, "Electronics"),
  new Product(3, "Luxury Watch", 2500, "Accessories"),
  new Product(4, "Office Chair", 1200, "Furniture"),
  new Product(5, "Budget Headphones", 300, "Audio"),
];

products[0].applyDiscount(10);
products[3].applyDiscount(5);

products.forEach(prod => console.log(prod.displayDetails()));

const expensiveProducts = products.filter(prod => prod.price > 1000);
console.log("\nProducts with price > ₹1000:");
expensiveProducts.forEach(prod => console.log(prod.displayDetails()));
