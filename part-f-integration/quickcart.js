// PART F: Final integration challenge — QuickCart order summary

class Product {
  constructor(id, name, price, qty) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.qty = qty;
  }

  getTotal() {
    return this.price * this.qty;
  }
}

const products = [
  new Product(1, "Laptop", 50000, 1),
  new Product(2, "Mouse", 1000, 2),
  new Product(3, "Monitor", 15000, 1),
  new Product(4, "Keyboard", 2000, 1)
];

// Destructuring is used while calculating line totals.
const productLines = products.map(({ id, name, price, qty }) => ({
  id,
  name,
  lineTotal: price * qty
}));

// Filter products whose unit price is greater than ₹5,000.
const productsAbove5000 = products.filter(({ price }) => price > 5000);

// Reduce calculates the complete order amount from product quantities.
const orderTotal = products.reduce(
  (total, product) => total + product.getTotal(),
  0
);

// Set stores unique product IDs.
const uniqueProductIds = new Set(products.map(({ id }) => id));

// Map stores inventory details by product ID.
const inventory = new Map(
  products.map(product => [product.id, {
    name: product.name,
    price: product.price,
    qty: product.qty
  }])
);

// Freeze the order configuration to prevent adding, deleting, or changing properties.
const orderConfig = Object.freeze({
  currency: "INR",
  customer: "Rahul",
  status: "Processing"
});

const order = {
  orderId: 501,
  customer: orderConfig.customer,
  products: productLines,
  total: orderTotal,
  status: orderConfig.status
};

console.log("====== QUICKCART ORDER SUMMARY ======");
console.log(`Customer: ${order.customer}`);
console.log("Products:");
productLines.forEach(({ name, lineTotal }) => {
  console.log(`${name} - ₹${lineTotal}`);
});
console.log(`Total Order Amount: ₹${orderTotal}`);
console.log(`Unique Products: ${uniqueProductIds.size}`);
console.log("Products above ₹5,000:", productsAbove5000.map(product => product.name));
console.log("Inventory Map:", inventory);
console.log("Order JSON:", JSON.stringify(order));

async function confirmOrder() {
  try {
    console.log("Order Status: Processing...");
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Order Status: Confirmed Successfully!");
    return `Hello ${order.customer}, your order #${order.orderId} for ₹${orderTotal} is confirmed!`;
  } catch (error) {
    console.error("Order confirmation failed:", error.message);
    return "We could not confirm your order. Please try again.";
  }
}

confirmOrder().then(message => {
  console.log(message);
  console.log("=====================================");
});
