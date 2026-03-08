import { logger } from '../utils/logger.js';

logger.section('10: Real-World Scenarios');

/* 
  ===================================================================
  SCENARIO 1: Form Validation
  ===================================================================
  Real-world use: Validating user input before sending it to a server
  to prevent bad data or malicious code.
*/
logger.step('Scenario 1: Form Validation');

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

  // 3. Simple email format validation (must contain an @ symbol)
  if (email && !email.includes('@')) {
    errors.push('Please enter a valid email address.');
  }

  // 4. Password complexity
  if (password && password.length < 8) {
    errors.push('Password must be at least 8 characters long.');
  }

  if (errors.length > 0) {
    logger.warn(`Validation Failed for ${username}:`);
    errors.forEach((err) => logger.info(' - Error', err));
    return { isValid: false, errors };
  }

  logger.info('Validation Successful!', { username, email });
  return { isValid: true, data: { username, email } };
}

validateRegistrationForm('ab', 'bademail.com', '123'); // Fails
validateRegistrationForm('alice', 'alice@example.com', 'securePwd123!'); // Passes

/* 
  ===================================================================
  SCENARIO 2: Shopping Cart Logic (Objects, Arrays, Loops)
  ===================================================================
  Real-world use: Managing a list of items, calculating totals,
  and formatting data for display.
*/
logger.step('Scenario 2: Shopping Cart Logic');

const products = [
  { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
  { id: 2, name: 'Mouse', price: 25.5, category: 'Electronics' },
  { id: 3, name: 'Desk', price: 150.0, category: 'Furniture' },
];

const shoppingCart = [
  { productId: 1, quantity: 1 },
  { productId: 2, quantity: 2 },
];

function calculateCartSummary(cart, inventory) {
  let subtotal = 0;
  const itemsDetails = [];

  for (const cartItem of cart) {
    const product = inventory.find((p) => p.id === cartItem.productId);

    if (product) {
      const lineTotal = product.price * cartItem.quantity;
      subtotal += lineTotal;

      itemsDetails.push({
        name: product.name,
        quantity: cartItem.quantity,
        price: product.price,
        lineTotal: lineTotal,
      });
    }
  }

  const taxRate = 0.08;
  const tax = subtotal * taxRate;
  const grandTotal = subtotal + tax;

  return {
    items: itemsDetails,
    subtotal: subtotal.toFixed(2),
    tax: tax.toFixed(2),
    grandTotal: grandTotal.toFixed(2),
  };
}

const checkoutSummary = calculateCartSummary(shoppingCart, products);
logger.info('Checkout Summary', checkoutSummary);

/* 
  ===================================================================
  SCENARIO 3: Filtering a List of Products
  ===================================================================
  Real-world use: E-commerce category filters (e.g. "Show me only Electronics under $50").
*/
logger.step('Scenario 3: Filtering a List of Products');

function filterProducts(inventory, categoryLimit, maxPrice) {
  return inventory.filter((product) => {
    // Both conditions must be true to keep the product
    const isCategoryMatch = product.category === categoryLimit;
    const isPriceMatch = product.price <= maxPrice;

    return isCategoryMatch && isPriceMatch;
  });
}

const affordableElectronics = filterProducts(products, 'Electronics', 50.0);
logger.info('Affordable Electronics (<$50)', affordableElectronics);

/* 
  ===================================================================
  SCENARIO 4: Processing User Input
  ===================================================================
  Real-world use: Cleaning up messy text inputs (like tags or search terms).
*/
logger.step('Scenario 4: Processing User Input');

function processSearchTags(rawInput) {
  // Real world input might look like: "  javascript, REact,   css  "
  return rawInput
    .split(',') // 1. Split the string into an array separated by commas
    .map((tag) => tag.trim().toLowerCase()) // 2. Loop through and trim whitespace + convert to lowercase
    .filter((tag) => tag !== ''); // 3. Remove any empty tags created by trailing commas
}

const rawTags = '  javascript, REact,   css ,  ';
const cleanTags = processSearchTags(rawTags);
logger.info(`Processed "${rawTags}" into:`, cleanTags);

/* 
  ===================================================================
  SCENARIO 5: Simple Task Manager Logic
  ===================================================================
  Real-world use: Managing a To-Do list state. Adding, removing, completing tasks.
*/
logger.step('Scenario 5: Simple Task Manager Logic');

let tasks = [
  { id: 1, text: 'Learn Variables', completed: true },
  { id: 2, text: 'Learn Loops', completed: false },
];
let nextTaskId = 3;

function addTask(text) {
  const newTask = { id: nextTaskId++, text: text, completed: false };
  // Spread operator allows us to add to an array cleanly
  tasks = [...tasks, newTask];
  logger.info(`Added task: "${text}"`);
}

function completeTask(id) {
  tasks = tasks.map((task) => (task.id === id ? { ...task, completed: true } : task));
  logger.info(`Completed task ID: ${id}`);
}

addTask('Learn Functions');
completeTask(2);
logger.info('Current Tasks Array', tasks);

/* 
  ===================================================================
  SCENARIO 6: User Settings Object
  ===================================================================
  Real-world use: Merging default app settings with custom user preferences.
*/
logger.step('Scenario 6: User Settings Object');

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
logger.info('Final App Config for Alice', finalAppConfig);

/* 
  ===================================================================
  SCENARIO 7: Looping Through API Data
  ===================================================================
  Real-world use: Taking raw JSON from a server and formatting it for the UI.
*/
logger.step('Scenario 7: Looping Through API Data');

const rawApiUsers = [
  { id: 101, first_name: 'Bob', last_name: 'Smith', status: 'active' },
  { id: 102, first_name: 'Eve', last_name: 'Jones', status: 'inactive' },
];

function formatUsersForDisplay(apiData) {
  return apiData.map((user) => {
    return {
      id: user.id,
      fullName: `${user.first_name} ${user.last_name}`,
      isActive: user.status === 'active',
    };
  });
}

const formattedUsers = formatUsersForDisplay(rawApiUsers);
logger.info('Formatted API Data', formattedUsers);

/* 
  ===================================================================
  SCENARIO 8: Dynamic DOM Updates (Simulated)
  ===================================================================
  Real-world use: Creating HTML strings based on data to inject into
  a webpage (via innerHTML).
*/
logger.step('Scenario 8: Dynamic DOM Updates');

function renderUserListHtml(users) {
  // Start the list
  let htmlString = '<ul>\n';

  // Create an <li> for each user
  users.forEach((user) => {
    const classStr = user.isActive ? 'active-user' : 'inactive-user';
    htmlString += `  <li class="${classStr}">${user.fullName}</li>\n`;
  });

  // Close the list
  htmlString += '</ul>';
  return htmlString;
}

const generatedHtml = renderUserListHtml(formattedUsers);
logger.info('Generated HTML String:\n' + generatedHtml, '');
