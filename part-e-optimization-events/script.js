// PART E: Performance optimization and DOM events

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 800 },
  { name: "Keyboard", price: 1500 },
  { name: "Monitor", price: 12000 },
  { name: "Headphones", price: 2500 }
];

// Task 1: Debouncing
// The previous timer is cleared each time the user types.
function debounce(callback, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => callback.apply(this, args), delay);
  };
}

const searchInput = document.getElementById("searchInput");
const searchStatus = document.getElementById("searchStatus");
const searchResults = document.getElementById("searchResults");

function searchProducts(query) {
  const normalizedQuery = query.trim().toLowerCase();
  const matches = products.filter(product =>
    product.name.toLowerCase().includes(normalizedQuery)
  );

  searchResults.replaceChildren();
  if (!normalizedQuery) {
    searchStatus.textContent = "Enter a product name to search.";
    return;
  }

  searchStatus.textContent = `Search completed for "${query}".`;
  if (matches.length === 0) {
    const item = document.createElement("li");
    item.textContent = "No matching products found.";
    searchResults.append(item);
    return;
  }

  matches.forEach(product => {
    const item = document.createElement("li");
    item.textContent = `${product.name} — ₹${product.price.toLocaleString("en-IN")}`;
    searchResults.append(item);
  });
}

searchInput.addEventListener("input", debounce(event => {
  searchProducts(event.target.value);
}, 500));

// Task 2: Throttling
// A callback can run at most once during each delay interval.
function throttle(callback, delay) {
  let lastRun = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastRun >= delay) {
      lastRun = now;
      callback.apply(this, args);
    }
  };
}

let scrollEvents = 0;
const scrollCount = document.getElementById("scrollCount");
window.addEventListener("scroll", throttle(() => {
  scrollEvents += 1;
  scrollCount.textContent = String(scrollEvents);
}, 1000), { passive: true });

// Task 3: Memoization
function calculateDiscount(price, percentage) {
  return price - (price * percentage) / 100;
}

// The closure keeps the cache available between calls.
function memoizeDiscount(callback) {
  const cache = new Map();

  return function (price, percentage) {
    const key = `${price}:${percentage}`;
    if (cache.has(key)) {
      return { result: cache.get(key), fromCache: true };
    }

    const result = callback(price, percentage);
    cache.set(key, result);
    return { result, fromCache: false };
  };
}

const cachedDiscount = memoizeDiscount(calculateDiscount);
const calculateButton = document.getElementById("calculateButton");
const discountResult = document.getElementById("discountResult");

calculateButton.addEventListener("click", () => {
  const price = Number(document.getElementById("priceInput").value);
  const percentage = Number(document.getElementById("discountInput").value);

  if (!Number.isFinite(price) || !Number.isFinite(percentage) ||
      price < 0 || percentage < 0 || percentage > 100) {
    discountResult.textContent = "Enter a valid price and a discount from 0 to 100.";
    return;
  }

  const outcome = cachedDiscount(price, percentage);
  const source = outcome.fromCache ? "Loaded from cache." : "Fresh calculation.";
  discountResult.textContent =
    `Final price: ₹${outcome.result.toLocaleString("en-IN")} — ${source}`;
});

// Task 4: Event bubbling and stopPropagation()
const bubbleParent = document.getElementById("bubbleParent");
const bubbleButton = document.getElementById("bubbleButton");
const stopBubbleButton = document.getElementById("stopBubbleButton");
const bubbleStatus = document.getElementById("bubbleStatus");

bubbleParent.addEventListener("click", () => {
  bubbleStatus.textContent = "Parent handler ran: the event bubbled up.";
});

bubbleButton.addEventListener("click", () => {
  bubbleStatus.textContent = "Child button clicked. The event will now bubble to the parent.";
});

stopBubbleButton.addEventListener("click", event => {
  event.stopPropagation();
  bubbleStatus.textContent = "Child button clicked. stopPropagation() prevents parent handling.";
});

// Task 4: Event delegation — one listener handles all current and future list buttons.
const productList = document.getElementById("productList");
const listStatus = document.getElementById("listStatus");

productList.addEventListener("click", event => {
  const removeButton = event.target.closest(".remove-button");
  if (!removeButton || !productList.contains(removeButton)) return;

  const productItem = removeButton.closest("li");
  const removedName = productItem.querySelector("span").childNodes[0].textContent.trim();
  productItem.remove();

  const remaining = productList.querySelectorAll("li").length;
  listStatus.textContent = `${removedName} removed. ${remaining} product(s) remaining.`;
});
