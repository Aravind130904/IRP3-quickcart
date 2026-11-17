// PART D: Asynchronous JavaScript — event loop, callbacks, Promises, async/await

console.log("=== Task 1: Event loop ===");
console.log("Order Started");
setTimeout(() => console.log("Payment Processing"), 0);
Promise.resolve().then(() => console.log("Payment Successful"));
console.log("Order Completed");

// Expected order:
// Order Started
// Order Completed
// Payment Successful
// Payment Processing

// Task 2: Callbacks — each step waits one second and then calls the next callback.
console.log("\n=== Task 2: Callback order processing ===");

function validateOrder(callback) {
  setTimeout(() => {
    console.log("Order Validated");
    callback();
  }, 1000);
}

function processPayment(callback) {
  setTimeout(() => {
    console.log("Payment Completed");
    callback();
  }, 1000);
}

function sendConfirmation(callback) {
  setTimeout(() => {
    console.log("Confirmation Sent");
    callback();
  }, 1000);
}

validateOrder(() => {
  processPayment(() => {
    sendConfirmation(() => console.log("Callback order flow finished."));
  });
});

// Task 3: Promise versions of the same steps.
function waitForStep(message, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error(message));
      } else {
        console.log(message);
        resolve(message);
      }
    }, 1000);
  });
}

function validateOrderPromise() {
  return waitForStep("Order Validated");
}

function processPaymentPromise() {
  return waitForStep("Payment Completed");
}

function sendConfirmationPromise() {
  return waitForStep("Confirmation Sent");
}

console.log("\n=== Task 3: Promise chain ===");
validateOrderPromise()
  .then(() => processPaymentPromise())
  .then(() => sendConfirmationPromise())
  .then(() => console.log("Promise order flow finished."))
  .catch(error => console.error("Promise order failed:", error.message));

// Task 4: Async/await with try/catch.
async function placeOrder() {
  console.log("\n=== Task 4: Async/await ===");
  try {
    await waitForStep("Async: Order Validated");
    await waitForStep("Async: Payment Completed");
    await waitForStep("Async: Confirmation Sent");
    console.log("Order placed successfully!");
  } catch (error) {
    console.error("Unable to place order:", error.message);
  }
}
placeOrder();

// Task 5: Promise combinators.
const productsAPI = () =>
  new Promise(resolve => setTimeout(() => resolve("Products Loaded"), 1000));

const paymentAPI = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Payment Service Failed")), 1500)
  );

const deliveryAPI = () =>
  new Promise(resolve => setTimeout(() => resolve("Delivery Loaded"), 2000));

async function demonstratePromiseCombinators() {
  console.log("\n=== Task 5: Promise combinators ===");

  // all(): rejects as soon as one input rejects.
  try {
    const allResults = await Promise.all([productsAPI(), paymentAPI(), deliveryAPI()]);
    console.log("Promise.all:", allResults);
  } catch (error) {
    console.log("Promise.all rejected:", error.message);
  }

  // allSettled(): reports the outcome of every input.
  const settledResults = await Promise.allSettled([
    productsAPI(), paymentAPI(), deliveryAPI()
  ]);
  console.log("Promise.allSettled:", settledResults);

  // race(): first settled result, whether fulfilled or rejected.
  try {
    const raceResult = await Promise.race([productsAPI(), paymentAPI(), deliveryAPI()]);
    console.log("Promise.race:", raceResult);
  } catch (error) {
    console.log("Promise.race rejected:", error.message);
  }

  // any(): first fulfilled result; rejects only if all inputs reject.
  try {
    const anyResult = await Promise.any([productsAPI(), paymentAPI(), deliveryAPI()]);
    console.log("Promise.any:", anyResult);
  } catch (error) {
    console.log("Promise.any rejected:", error.errors);
  }
}

demonstratePromiseCombinators();
