// PART C: JSON handling and output-based debugging

console.log("=== Task 1: JSON.stringify() and JSON.parse() ===");

const order = {
  orderId: 501,
  customer: "Rahul",
  amount: 5000,
  deliveryDate: undefined,
  discount: null,
  calculateTax: function () {
    return 500;
  }
};

const jsonOrder = JSON.stringify(order);
console.log("JSON string:", jsonOrder);

const parsedOrder = JSON.parse(jsonOrder);
console.log("Parsed object:", parsedOrder);
console.log("deliveryDate exists after parsing:", Object.hasOwn(parsedOrder, "deliveryDate"));
console.log("calculateTax exists after parsing:", Object.hasOwn(parsedOrder, "calculateTax"));

// Task 2: Predict the output / error for each example.
console.log("\n=== Task 2: Output prediction ===");

// Q1: undefined object properties are omitted.
console.log("Q1:", JSON.stringify({ name: "Rahul", age: undefined }));

// Q2: undefined array elements become null.
console.log("Q2:", JSON.stringify([10, undefined, 30]));

// Q3: NaN and Infinity become null in JSON.
console.log("Q3:", JSON.stringify({ price: NaN, discount: Infinity }));

// Q4: JSON requires double-quoted property names and string values.
try {
  console.log("Q4:", JSON.parse("{name: 'Rahul', age: 25}"));
} catch (error) {
  console.log("Q4 error:", error.name + ": invalid JSON syntax");
}

// Q5: circular references cannot be stringified.
const user = { name: "Rahul" };
user.self = user;
try {
  console.log("Q5:", JSON.stringify(user));
} catch (error) {
  console.log("Q5 error:", error.name + ": circular structure cannot be converted to JSON");
}

// Q6: Date objects are converted to ISO date strings.
console.log("Q6:", JSON.stringify({ createdAt: new Date("2026-01-01") }));
