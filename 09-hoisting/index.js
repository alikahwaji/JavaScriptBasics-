import { logger } from '../utils/logger.js';

logger.section('09: Hoisting');

/* 
  -------------------------------------------------------------------
  1. FUNCTION HOISTING
  -------------------------------------------------------------------
  In JavaScript, Function Declarations are "hoisted" to the top of 
  their scope. This means you can call a function BEFORE it is 
  defined in the code.
*/
logger.step('1. Function Hoisting');

// We are calling greet() before it's defined!
logger.info('Calling function before definition', greet('Student'));

function greet(name) {
  return `Hello, ${name}!`;
}

/* 
  However, Function Expressions (assigned to variables) are NOT hoisted
  in the same way. The variable itself might be hoisted, but its assignment 
  (the actual function) is not.
*/
// This would throw an error!
// logger.info(sayHi('Student'));
// const sayHi = (name) => `Hi, ${name}`;

/* 
  -------------------------------------------------------------------
  2. VARIABLE HOISTING (`var`)
  -------------------------------------------------------------------
  Variables declared with `var` are hoisted to the top of their scope,
  but their *initialization* is not. They are initialized with `undefined`.
*/
logger.step('2. Variable Hoisting (var)');

// We can access legacyVar before initialization, but it will be undefined.
logger.info(
  'Accessing var before initialization',
  typeof legacyVar === 'undefined' ? 'undefined' : legacyVar
);

// eslint-disable-next-line no-var
var legacyVar = 'I am an old way to declare variables';
logger.info('Accessing var after initialization', legacyVar);

/* 
  -------------------------------------------------------------------
  3. THE TEMPORAL DEAD ZONE (`let` and `const`)
  -------------------------------------------------------------------
  Variables declared with `let` and `const` are ALSO hoisted, but they 
  are NOT initialized with `undefined`. Instead, they enter a state called 
  the "Temporal Dead Zone" (TDZ) from the start of the block until the 
  declaration is executed. 
  
  Accessing them in the TDZ throws an error.
*/
logger.step('3. Temporal Dead Zone (let/const)');

try {
  // If we try to access modernVar here, JS will throw a ReferenceError,
  // NOT return 'undefined' like it did for `var`. This is a GOOD thing
  // as it catches bugs early!

  // NOTE: We wrap this in an eval so the linter/parser doesn't immediately
  // stop execution, but it perfectly demonstrates the runtime error.
  eval('console.log(modernVar)');
} catch (error) {
  logger.warn(`TDZ Error: ${error.message}`);
}

const modernVar = 'I am safe and predictable';
logger.info('Accessing const after initialization', modernVar);
