// PART A: Objects, prototypes, ES6 classes, and modern syntax

// Task 1: Constructor function and prototype method
function Product(productName, price, category) {
  this.productName = productName;
  this.price = price;
  this.category = category;
}

// Shared by every Product instance instead of creating a new function per object.
Product.prototype.displayProduct = function () {
  return `${this.productName} | ₹${this.price} | ${this.category}`;
};

const product1 = new Product("Laptop", 50000, "Electronics");
const product2 = new Product("Mouse", 800, "Accessories");
const product3 = new Product("Monitor", 12000, "Electronics");

console.log("=== Task 1: Prototype-based products ===");
console.log(product1.displayProduct());
console.log(product2.displayProduct());
console.log(product3.displayProduct());

// Task 2: ES6 classes and inheritance
class ProductClass {
  constructor(productName, price, category) {
    this.productName = productName;
    this.price = price;
    this.category = category;
  }

  getProductDetails() {
    return `${this.productName} costs ₹${this.price} (${this.category})`;
  }
}

class ElectronicProduct extends ProductClass {
  constructor(productName, price, brand) {
    super(productName, price, "Electronics");
    this.brand = brand;
  }

  showWarranty() {
    return `${this.productName} includes a 1-year warranty.`;
  }
}

class ClothingProduct extends ProductClass {
  constructor(productName, price, size) {
    super(productName, price, "Clothing");
    this.size = size;
  }

  showSize() {
    return `${this.productName} is available in size ${this.size}.`;
  }
}

const laptop = new ElectronicProduct("Laptop", 50000, "Lenovo");
const shirt = new ClothingProduct("T-Shirt", 999, "L");

console.log("\n=== Task 2: ES6 classes ===");
console.log(laptop.getProductDetails());
console.log(laptop.showWarranty());
console.log(shirt.getProductDetails());
console.log(shirt.showSize());

// Task 3A: Arrow function for discounted price
const getFinalPrice = (price, discountPercentage) =>
  price - (price * discountPercentage) / 100;

console.log("\n=== Task 3: ES6 syntax ===");
console.log("Final price after 10% discount:", getFinalPrice(50000, 10));

// Task 3B: Template literal
const customerName = "Rahul";
const orderProduct = "Laptop";
const orderAmount = 50000;
console.log(`Hello ${customerName}, your order of ${orderProduct} is confirmed. Total: ₹${orderAmount}.`);

// Task 3C: Destructuring
const customer = {
  name: "Rahul",
  email: "rahul@gmail.com",
  city: "Mumbai"
};
const { name, email } = customer;
console.log("Customer:", name, email);

// Task 3D: Rest operator
function calculateTotal(...prices) {
  return prices.reduce((total, price) => total + price, 0);
}
console.log("Total:", calculateTotal(500, 1000, 1500));

// Task 3E: Spread operator creates a copy; original remains unchanged.
const originalProduct = { name: "Laptop", price: 50000, category: "Electronics" };
const discountedProduct = { ...originalProduct, price: 45000 };
console.log("Original product:", originalProduct);
console.log("Copied product:", discountedProduct);
