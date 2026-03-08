import { logger } from '../utils/logger.js';

logger.section('01: Variables and Data Types');

/* 
  -------------------------------------------------------------------
  1. DECLARING VARIABLES: let vs const
  -------------------------------------------------------------------
  In modern JavaScript (ES6+), we use `const` and `let` instead of `var`.
  - `const`: Used for values that should not be reassigned. (Best practice is to default to this).
  - `let`: Used for values that will change (be reassigned) later.
  - `var`: Legacy way to declare variables. Avoid using it due to hoisting and scope issues.
*/
logger.step('1. Variable Declarations');

const greeting = 'Hello, Developer!'; // This string cannot be reassigned
logger.info('const greeting', greeting);
// greeting = "Hi"; // This would throw a TypeError: Assignment to constant variable.

let score = 0;
logger.info('let score (initial)', score);
score += 10; // `let` allows reassignment
logger.info('let score (updated)', score);

/* 
  -------------------------------------------------------------------
  2. PRIMITIVE DATA TYPES
  -------------------------------------------------------------------
  Data in JavaScript is categorized into Primitives and Reference types.
  Primitives are copied by value and are immutable. The main types are:
  - String
  - Number
  - Boolean
  - Undefined
  - Null
  - Symbol (Advanced - unique identifiers)
  - BigInt (Advanced - for very large numbers)
*/
logger.step('2. Primitive Data Types');

const myString = 'JavaScript is awesome'; // String
const myNumber = 42; // Number (includes integers and floats)
const myBoolean = true; // Boolean (true or false)
const myUndefined = undefined; // Undefined (variable declared but no value assigned)
const myNull = null; // Null (intentional absence of value)

logger.info('typeof myString', typeof myString);
logger.info('typeof myNumber', typeof myNumber);
logger.info('typeof myBoolean', typeof myBoolean);
logger.info('typeof myUndefined', typeof myUndefined);
logger.info('typeof myNull', typeof myNull); // Note: typeof null returns 'object' - this is a known bug/quirk in JS!

/* 
  -------------------------------------------------------------------
  3. REFERENCE TYPES (Objects, Arrays, Functions)
  -------------------------------------------------------------------
  Reference types are copied by reference, not by value. 
  When dealing with `const` and reference types, you cannot reassign 
  the variable to a whole new object, but you CAN mutate its internals.
*/
logger.step('3. Reference Types and Mutation');

const user = {
  name: 'Alice',
  age: 28,
};
logger.info('User Object (Initial)', user);

// We can mutate properties of an object defined with `const`
user.age = 29;
logger.info('User Object (Mutated age)', user);

// However, we cannot assign a completely new object to `user`
// user = { name: 'Bob' }; // This throws Assignment to constant variable

logger.warn('Always use `const` unless you absolutely need to reassign the entire variable later.');
