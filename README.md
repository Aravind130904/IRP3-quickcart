# QuickCart – Advanced JavaScript Practical Assignment

## Overview
QuickCart is a JavaScript ES6+ practical project that demonstrates advanced JavaScript concepts through an e-commerce order-management scenario. It contains six parts covering object-oriented JavaScript, array methods, collections, JSON, asynchronous programming, performance optimization, DOM events, and a final order integration challenge.

## Technologies Used
- HTML5
- CSS3
- Modern JavaScript (ES6+)
- Browser DOM APIs
- JavaScript Promises and async/await

No frameworks, external libraries, or backend services are used.

## Project Structure
```text
quickcart-advanced-javascript/
├── part-a-objects-classes/
│   └── products.js
├── part-b-array-methods/
│   └── shopping-cart.js
├── part-c-json-debugging/
│   └── json-handling.js
├── part-d-asynchronous/
│   └── order-processing.js
├── part-e-optimization-events/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── part-f-integration/
│   └── quickcart.js
└── README.md
```

## Explanation of Each Part

### Part A – Objects, Prototypes & ES6 Classes
- Creates products with a constructor function and a shared prototype method.
- Demonstrates ES6 classes, inheritance, `extends`, and `super()`.
- Uses arrow functions, template literals, destructuring, rest, and spread syntax.

### Part B – Higher-Order Functions, Map, Set & Object Methods
- Uses `map()`, `filter()`, `reduce()`, and `forEach()` on a shopping cart.
- Creates and updates an inventory `Map`.
- Removes duplicate email addresses using `Set`.
- Demonstrates `Object.freeze()` and `Object.seal()`.

### Part C – JSON Handling & Output-Based Debugging
- Converts an order object to JSON and back.
- Demonstrates how `undefined`, functions, `NaN`, `Infinity`, invalid JSON, circular references, and Date objects behave.

### Part D – Asynchronous JavaScript
- Predicts event-loop output order.
- Implements sequential callbacks and Promise chains.
- Uses async/await with try/catch.
- Demonstrates `Promise.all()`, `Promise.allSettled()`, `Promise.race()`, and `Promise.any()`.

### Part E – Performance Optimization & DOM Events
- Debounces product search by 500 milliseconds.
- Throttles scroll handling to once per 1000 milliseconds.
- Uses memoization and a closure-based cache for discount calculations.
- Demonstrates event bubbling, `stopPropagation()`, and event delegation with product removal.

### Part F – Final Integration Challenge
- Builds Rahul's order summary using a Product class.
- Uses destructuring, map, filter, reduce, Set, Map, Object.freeze, and JSON.stringify.
- Confirms the order asynchronously using async/await and try/catch.

## How to Run

### Run the JavaScript parts (A, B, C, D, and F)
1. Install Node.js if it is not already installed.
2. Open a terminal in the project folder.
3. Run each file separately:

```bash
node part-a-objects-classes/products.js
node part-b-array-methods/shopping-cart.js
node part-c-json-debugging/json-handling.js
node part-d-asynchronous/order-processing.js
node part-f-integration/quickcart.js
```

Part D contains intentional asynchronous delays. Wait for its output to finish.

### Run Part E in a browser
1. Open `part-e-optimization-events/index.html` in Chrome, Edge, or Firefox.
2. Alternatively, open the project in VS Code and use the Live Server extension.
3. Test the search, scroll counter, discount calculator, event bubbling buttons, and Remove buttons.

## Expected Part F Output
The computed order total is **₹69,000**:
- Laptop: ₹50,000
- Mouse: ₹2,000
- Monitor: ₹15,000
- Keyboard: ₹2,000
- Unique products: 4

The order confirmation appears after the asynchronous delay.

## GitHub Submission
Create one **public** repository named `quickcart-advanced-javascript`, upload the folders and files using the structure above, and submit its repository URL. Do not submit a ZIP file in place of the repository.

The assignment also requests a Loom link. If a live project link is unavailable, the assignment permits entering `N.A.`.

## Screenshots
For the README submission, capture screenshots of Part E in the browser:
1. Product search results.
2. Discount calculator result.
3. Event bubbling message.
4. Product list after removing an item.

Add the screenshots to the repository and embed them in this README if required by your instructor.
