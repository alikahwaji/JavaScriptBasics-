import { logger } from '../utils/logger.js';

logger.section('05: Classes and Prototypes');

/* 
  -------------------------------------------------------------------
  1. DEFINING A CLASS
  -------------------------------------------------------------------
  ES6 classes are syntactical sugar over JavaScript's existing 
  prototype-based inheritance.
*/
logger.step('1. Creating a Class');

class Animal {
  // The constructor runs immediately when a new instance is created.
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  // A method on this class
  describe() {
    return `${this.name} is a ${this.species}.`;
  }
}

// Creating an instance of Animal using the `new` keyword
const myPet = new Animal('Buddy', 'Dog');
logger.info('Instance Output', myPet.describe());

/* 
  -------------------------------------------------------------------
  2. INHERITANCE (Extends & Super)
  -------------------------------------------------------------------
  Classes can inherit from other classes using `extends`.
  To call the parent's constructor, we use `super()`.
*/
logger.step('2. Inheritance');

class Bird extends Animal {
  constructor(name, canFly) {
    // Call the parent automatically setting species to 'Bird'
    super(name, 'Bird');
    this.canFly = canFly;
  }

  // Method overriding - replacing the parent's generic describe method
  describe() {
    const flightStatus = this.canFly ? `can fly` : `cannot fly`;
    // We can still use super.describe() if we want the parent output!
    return `${super.describe()} It ${flightStatus}.`;
  }
}

const penguin = new Bird('Pingu', false);
const eagle = new Bird('Apollo', true);

logger.info('Penguin Output', penguin.describe());
logger.info('Eagle Output', eagle.describe());

/* 
  -------------------------------------------------------------------
  3. STATIC METHODS
  -------------------------------------------------------------------
  Static methods live on the class itself, NOT on instances of the class.
  They are often used for utility functions.
*/
logger.step('3. Static Methods');

class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

// logger.info('Instance Call', new MathUtil().add(5, 5)); // This would fail!
logger.info('Static Call', MathUtil.add(10, 20)); // Calls the class directly
