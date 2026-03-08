# Real-World Scenarios

This module demonstrates how core vanilla JavaScript concepts are applied to solve common, practical everyday programming challenges.

---

## 1. Form Validation

### A Description of the Real-World Problem

Before sending data (like a signup form) to a server database, it must be validated on the client side. We need to catch empty fields, short passwords, or invalid email formats immediately so we can show helpful error messages to the user without making them wait for a server response.

### The Vanilla JavaScript Solution

```javascript
function validateRegistrationForm(username, email, password) {
  const errors = [];

  // 1. Check if required fields are empty
  if (!username || !email || !password) {
    errors.push('All fields are required.');
  }

  // 2. Validate username length
  if (username && username.length < 3) {
    errors.push('Username must be at least 3 characters long.');
  }

  // 3. Simple email format validation
  if (email && !email.includes('@')) {
    errors.push('Please enter a valid email address.');
  }

  if (errors.length > 0) {
    return { isValid: false, errors };
  }

  return { isValid: true, data: { username, email } };
}
```

### Explanation of the approach

We create an empty `errors` array. We then use a series of generic `if` statements to test our logical rules. If a rule is broken, we `.push()` a specific string message into the array. At the end, if the array has a length greater than 0, we know the form failed validation.

### When and why to use that pattern

- **When:** Use this pattern any time you are processing user input from a form.
- **Why:** Grouping errors into an array allows you to show _all_ mistakes to the user at once, rather than forcing them to fix one mistake and submit, only to immediately hit a second mistake.

---

## 2. Shopping Cart Logic

### A Description of the Real-World Problem

E-commerce applications need to manage an inventory of products and a user's shopping cart. The challenge is joining the user's cart quantities with the product prices, calculating sub-totals, extracting taxes, and formatting a final checkout summary.

### The Vanilla JavaScript Solution

```javascript
const products = [
  { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
  { id: 2, name: 'Mouse', price: 25.5, category: 'Electronics' },
];

const shoppingCart = [
  { productId: 1, quantity: 1 },
  { productId: 2, quantity: 2 },
];

function calculateCartSummary(cart, inventory) {
  let subtotal = 0;

  for (const cartItem of cart) {
    // Find the product data matching the ID in the cart basket
    const product = inventory.find((p) => p.id === cartItem.productId);

    if (product) {
      subtotal += product.price * cartItem.quantity;
    }
  }

  const tax = subtotal * 0.08;
  return {
    subtotal: subtotal.toFixed(2),
    tax: tax.toFixed(2),
    grandTotal: (subtotal + tax).toFixed(2),
  };
}
```

### Explanation of the approach

We keep our data normalized (separate arrays for `products` and the `cart`). Inside the function, we iterate over the cart array utilizing a modern `for...of` loop. The `.find()` array method cleanly locates the corresponding product details, allowing us to perform mathematical operations safely. `toFixed(2)` is used to ensure the numbers display correctly as currency strings (e.g. `25.50` instead of `25.5`).

### When and why to use that pattern

- **When:** Use `for...of` loops and `find` when you need to combine data from multiple relational lists or arrays.
- **Why:** `for...of` loops are easier to read than traditional `for (let i = 0...)` index-based loops.

---

## 3. Filtering a list of products

### A Description of the Real-World Problem

Users browsing an online store rarely want to see every item at once. They use UI sidebar checkboxes to filter items by a specific category or a maximum price limit.

### The Vanilla JavaScript Solution

```javascript
function filterProducts(inventory, categoryLimit, maxPrice) {
  // Return a new array containing items that pass the tests
  return inventory.filter((product) => {
    const isCategoryMatch = product.category === categoryLimit;
    const isPriceMatch = product.price <= maxPrice;

    // Both tests must return TRUE to keep the object
    return isCategoryMatch && isPriceMatch;
  });
}
```

### Explanation of the approach

The `.filter()` method loops over every item in the `inventory` array. We write logic that strictly evaluates to `true` or `false`. If our conditions are met (the categories match `&&` the price is low enough), we return `true`, and the item is kept for the final, filtered array.

### When and why to use that pattern

- **When:** Whenever you need a subset of a larger list based on specific criteria.
- **Why:** Filtering prevents you from having to mutate or delete data from the original array. By returning a _new_ array, your original raw API data is kept perfectly intact in case the user decides to clear their UI filters.

---

## 4. Processing User Input

### A Description of the Real-World Problem

Users are inherently messy. When they type a comma-separated list of tags into a text box, they will likely mix uppercase/lowercase letters, add random spaces, and leave trailing commas. We must clean this string before saving it to a database.

### The Vanilla JavaScript Solution

```javascript
function processSearchTags(rawInput) {
  // Input: "  javascript, REact,   css ,  "

  return rawInput
    .split(',')
    .map((tag) => tag.trim().toLowerCase())
    .filter((tag) => tag !== '');
}
```

### Explanation of the approach

We use "Method Chaining" to string multiple array methods together consecutively:

1. `.split(',')` cuts the raw string at every comma, resulting in an array of messy strings.
2. `.map()` iterates over that array, slicing off the spaces with `.trim()` and heavily enforcing lowercase formatting.
3. `.filter()` loops through one last time, tossing out any array element that is entirely empty (the result of a trailing comma).

### When and why to use that pattern

- **When:** Use string manipulation and method chaining to sanitize raw text data.
- **Why:** Chaining methods is incredibly readable. It tells a clear, chronological story of data transformation: "split it, then map it, then filter it."

---

## 5. Simple Task Manager Logic

### A Description of the Real-World Problem

Building a React or Vue To-Do list requires managing the internal `state` of an array of objects. We need pure functions that can add new tasks to the end of the array and cleanly update the `completed` boolean flag of existing tasks without destroying the rest of the array.

### The Vanilla JavaScript Solution

```javascript
let tasks = [{ id: 1, text: 'Learn Variables', completed: true }];
let nextTaskId = 2;

function addTask(text) {
  const newTask = { id: nextTaskId++, text: text, completed: false };
  // Spread operator allows us to add to an array cleanly
  tasks = [...tasks, newTask];
}

function completeTask(id) {
  // Map over the tasks; if it's the correct ID, create a new object and override 'completed'
  tasks = tasks.map((task) => (task.id === id ? { ...task, completed: true } : task));
}
```

### Explanation of the approach

Notice that we never use `tasks.push()` or `task.completed = true;`. Instead of _mutating_ the data directly, we use the Spread Syntax (`...`) and `.map()` to build completely _new_ arrays or objects, replacing the old ones.

### When and why to use that pattern

- **When:** Use this strictly when updating state arrays in modern frontend frameworks (React, Vue, Angular).
- **Why:** Frontend frameworks rely on detecting _new_ variable references to know when to redraw the UI on the screen. Direct mutation (like `.push`) often fails to trigger these UI updates.

---

## 6. User Settings Object

### A Description of the Real-World Problem

Applications come with dozens of default configuration options (light themes, specific font sizes, notifications turned on). If a user specifically chooses a dark theme, we need to apply their specific choice while ensuring the remaining defaults (like font sizes) stay perfectly intact.

### The Vanilla JavaScript Solution

```javascript
const defaultSettings = {
  notifications: true,
  newsletter: false,
  theme: 'light',
  fontSize: 14,
};

function applyUserSettings(userPreferences) {
  // Use the spread operator to overwrite defaults with user choices
  const combinedSettings = { ...defaultSettings, ...userPreferences };
  return combinedSettings;
}

const alicePreferences = { theme: 'dark', newsletter: false };
const finalAppConfig = applyUserSettings(alicePreferences);
```

### Explanation of the approach

We place the `defaultSettings` object first, and immediately spread the `userPreferences` object after it. Because `userPreferences` is placed second, any matching keys (like `theme`) in the second object will perfectly overwrite the keys in the first object.

### When and why to use that pattern

- **When:** Merging configuration structures or handling optional functional parameters.
- **Why:** Doing this via Spread Syntax `...` is significantly faster to type and cleaner to read than older methods like `Object.assign()`.

---

## 7. Looping Through API Data

### A Description of the Real-World Problem

The raw JSON data returned from backend servers is almost never perfectly formatted for the frontend UI. For example, the backend might send `first_name` and `last_name` separately, and use a string `"active"` instead of a proper boolean flag.

### The Vanilla JavaScript Solution

```javascript
const rawApiUsers = [{ id: 101, first_name: 'Bob', last_name: 'Smith', status: 'active' }];

function formatUsersForDisplay(apiData) {
  // Map over the old data, strictly returning a new, clean object shape
  return apiData.map((user) => {
    return {
      id: user.id,
      fullName: `${user.first_name} ${user.last_name}`,
      isActive: user.status === 'active',
    };
  });
}
```

### Explanation of the approach

The `.map()` array method takes in an array of _x_ items, and strictly returns a new array of exactly _x_ items, reshaped to your liking. Here we use Template Literals (`${}`) to combine names, and an equality check `===` to convert a string flag into a proper Javascript `true / false` boolean.

### When and why to use that pattern

- **When:** Use `.map()` specifically when you need to transform the _shape_ of data you receive from external sources.
- **Why:** It decouples your Frontend UI logic from the Backend logic. If the Backend changes their structure, you only have to update this one mapping function rather than hunting through your entire codebase.

---

## 8. Dynamic DOM Updates

### A Description of the Real-World Problem

Once data is cleaned and formatted, it must be displayed on an actual webpage. We need a way to take an array of Javascript objects and translate them into pure HTML markup strings that can be injected into the browser.

### The Vanilla JavaScript Solution

```javascript
function renderUserListHtml(users) {
  // Start the list container
  let htmlString = '<ul>\n';

  // Create an <li> element for each user object using a forEach loop
  users.forEach((user) => {
    const classStr = user.isActive ? 'active-user' : 'inactive-user';
    htmlString += `  <li class="${classStr}">${user.fullName}</li>\n`;
  });

  // Close the list container
  htmlString += '</ul>';
  return htmlString;
}

// Resulting HTML can then be injected into the DOM:
// document.getElementById('user-container').innerHTML = renderUserListHtml(data);
```

### Explanation of the approach

We define an empty string buffer (`let htmlString`). We iterate over every element in our Javascript array using `.forEach()`. Leveraging modern Javascript Template Literals (backticks), we inject our Javascript variables (`user.fullName`) directly into the middle of raw HTML strings (`<li>`), attaching them to our main string buffer using the `+=` operator.

### When and why to use that pattern

- **When:** When building entirely Vanilla Javascript applications without modern frameworks (like React).
- **Why:** Programmatically building HTML from Javascript arrays means your UI will ALWAYS match your data. If your data array contains 10 items, the UI will automatically draw exactly 10 HTML tags.
