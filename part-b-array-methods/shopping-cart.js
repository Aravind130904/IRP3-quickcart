// PART B: Higher-order functions, Map, Set, freeze, and seal

const cart = [
  { id: 101, name: "Laptop", price: 50000, qty: 1, category: "Electronics" },
  { id: 102, name: "Mouse", price: 800, qty: 2, category: "Accessories" },
  { id: 103, name: "Keyboard", price: 1500, qty: 1, category: "Accessories" },
  { id: 104, name: "Monitor", price: 12000, qty: 1, category: "Electronics" },
  { id: 105, name: "Headphones", price: 2500, qty: 2, category: "Accessories" }
];

console.log("=== Task 1: Array methods ===");

// map(): returns a new array containing each product name and its line total.
const productTotals = cart.map(({ name, price, qty }) => ({
  name,
  total: price * qty
}));
console.log("Product totals:", productTotals);

// filter(): returns products whose unit price is greater than ₹2,000.
const expensiveProducts = cart.filter(product => product.price > 2000);
console.log("Products above ₹2,000:", expensiveProducts);

// reduce(): calculates the complete cart value using price × quantity.
const totalCartValue = cart.reduce(
  (total, product) => total + product.price * product.qty,
  0
);
console.log("Total cart value:", totalCartValue);

// forEach(): performs an action for each product; it does not return a transformed array.
cart.forEach(({ name, category, qty }) => {
  console.log(`Name: ${name}, Category: ${category}, Quantity: ${qty}`);
});

// Combined operation: total value of Electronics products.
const electronicsTotal = cart
  .filter(product => product.category === "Electronics")
  .reduce((total, product) => total + product.price * product.qty, 0);
console.log("Electronics total:", electronicsTotal);

// Task 2A: Map inventory (product ID -> product details)
const inventory = new Map();
cart.forEach(product => inventory.set(product.id, { ...product }));

console.log("\n=== Task 2: Map and Set ===");
console.log("Product 101:", inventory.get(101));

// Update quantity for product 102.
const mouse = inventory.get(102);
inventory.set(102, { ...mouse, qty: mouse.qty + 1 });
console.log("Updated mouse:", inventory.get(102));

// Delete product 105 from this inventory Map.
inventory.delete(105);
console.log("Inventory after deletion:");
for (const [productId, details] of inventory) {
  console.log(productId, details);
}

// Task 2B: Set removes duplicate email addresses while preserving insertion order.
const emailList = [
  "rahul@gmail.com",
  "priya@gmail.com",
  "rahul@gmail.com",
  "arjun@gmail.com",
  "priya@gmail.com"
];
const uniqueEmails = [...new Set(emailList)];
console.log("Unique emails:", uniqueEmails);

// Task 3: Object.freeze() versus Object.seal()
const productConfig = { name: "Laptop", price: 50000, stock: 20 };

const frozenConfig = Object.freeze({ ...productConfig });
const sealedConfig = Object.seal({ ...productConfig });

console.log("\n=== Task 3: freeze and seal ===");

// Use Reflect methods to report whether operations succeeded without throwing.
console.log("Frozen: change price:", Reflect.set(frozenConfig, "price", 45000));
console.log("Frozen: add property:", Reflect.set(frozenConfig, "brand", "Lenovo"));
console.log("Frozen: delete stock:", Reflect.deleteProperty(frozenConfig, "stock"));
console.log("Frozen object:", frozenConfig);

console.log("Sealed: change price:", Reflect.set(sealedConfig, "price", 45000));
console.log("Sealed: add property:", Reflect.set(sealedConfig, "brand", "Lenovo"));
console.log("Sealed: delete stock:", Reflect.deleteProperty(sealedConfig, "stock"));
console.log("Sealed object:", sealedConfig);
