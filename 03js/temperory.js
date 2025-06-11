//! Javascript Definition
// JavaScript is a high-level, interpreted, just-in-time compiled, Asynchronous and Single-threaded programming language that is primarily used to make web pages interactive. 
// which follows ECMAScripts Specification. It is one of the core technologies of the web, alongside HTML and CSS.
// JavaScript can be used to build to build server side applications.
// JavaScript is also used in mobile app developmet to create cross platform apps that can run on both IOS and android.
// JavaScript is also used to create desktop application

//! A primitive in JavaScript is a data type that is not an object and has no methods. These values are immutable

//! Feature
// JIT Compilation - Code is compiled into machine code at runtime, just before it is executed for improved performance.
// Interpreter - executes instructions line by line
// Dynamic Typing - No need to declare variable types. Variables can hold different types at different times
// Event Driven - JS responds to user events (click, hover, input).
// Platform Independent - JS runs on any browser and OS (Windows, Mac, Linux) without needing modification.
// Asynchronous and Single-threaded - Uses mechanisms like callbacks, promises, and async/await for non-blocking code execution.
// DOM Manipulation - JavaScript can access and dynamically change HTML and CSS through the Document Object Model (DOM).

//! How to run JavaScript code?
// 1. Browser
// 2. Nodejs runtime

//! Callstack
// Callstack maintain order of execution of execution contexts.

//! var, let and const

//! Hoisting
// Hoisting means that declarations (not initializations) are registered in memory during the memory phase, before the code actually runs (execution phase).
// This means:
// Function declarations can be called before they appear in code.
// Variables declared with var exist before their line but are undefined until assigned.
// let and const are also hoisted, but are not initialized, and accessing them before declaration causes an error.
// | Type           | Hoisted | Initialized at hoist? | Accessible before declaration?  |
// | -------------- | ------- | --------------------- | ------------------------------- |
// | `function`     | ✅ Yes   | ✅ Yes                 | ✅ Yes                           |
// | `var`          | ✅ Yes   | ✅ (to `undefined`)    | ✅ Yes (but returns `undefined`) |
// | `let`, `const` | ✅ Yes   | ❌ No (TDZ applies)    | ❌ ReferenceError                |


// Hoisting is a behavior in which a function or variable can be used before it is declared.
// let,const and var are hoisted
// Function declaration are hoisted not function expression.

//! Temporal Dead Zone
// (TDZ) is the period between entering a scope and the declaration of a variable using let or const.
// Accessing let and const in TDZ gives Reference Error.
// Accessing var in TDZ gives For undefined.

//! Scope
// Scope means where you can access a specific variable or a function in our code.

//! Lexical Scope
// Lexical environment is the local memory along with lexical environment of parent.
// Lexical scope means that a variable is only accessible within the block of code where it was defined, and in any blocks inside it — but not outside.

//! Scope chain
//

//! Destructuring
// Act of unpacking of element in array or object.

//! Closure
// A closure is a function that remembers and has access to variable references from its outer (lexical) scope, even after that outer function has finished executing.
// 1. Data Privacy (Encapsulation) - Closures let you create private variables that can't be accessed from the outside.
function createCounter() {
    let count = 0;
  
    return function() {
      count++;
      return count;
    };
  }
  
  const counter = createCounter();
  console.log(counter()); // 1
  console.log(counter()); // 2
  
// 2. Maintaining State - Closures help you keep state between function calls without using global variables.
function makeGreeter(name) {
    return function() {
      console.log("Hello, " + name);
    };
  }
  
  const greetAlice = makeGreeter("Alice");
  greetAlice(); // Hello, Alice
  
// 3. Callback Functions & Asynchronous Code - Closures allow callback functions to access variables from the outer function, which is crucial for working with asynchronous code.
function fetchData(url) {
    let data = "some data from " + url;
  
    setTimeout(function() {
      console.log(data);  // closure allows access to `data` even after fetchData() is done
    }, 1000);
  }
  
  fetchData("example.com");
  


//! Function
// Function - function is a block of code designed to perform a particular task.
// Arguments – The actual values passed to a function when it is called. These values are assigned to the function’s parameters.
// parameter - While defining a function, the variables passed inside the parentheses () are known as parameters.  function abc(a, b) – a and b are parameters.
// const - A keyword used to declare variables whose value cannot be reassigned after initialization.
// Callback function - is a function that is passed as an argument to another function and is executed after that function completes its task.



//! aysnc/await
//* it contain async keyword
// Asynchronous function always return Promises
// In normal Function
async function name(args){}

// In arrow fuction
const functionName = async (args) => {}

//* The await keyword pauses the execution of an async function until a promise is resolved, and then returns the resolved value of that promise.
//* await keyword only works inside an async function.
//* we can handle error using try catch
async function getData() {
    const response = await fetch('https://api.example.com/data');
    const result = await response.json();
    console.log(result);
  }

//!Promise
// Promise – An object that manages a single asynchronous value, which can be handled in the future.
// An object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.



//! Topic wise definition
/*
1.Variables 
•  var -  Declares a function-scoped variable that can be redeclared and updated.
•  let - Declares a block-scoped variable that can be updated but not redeclared in the same scope.
•  const - Declares a block-scoped variable that cannot be updated or redeclared after its initial assignment.

2. Data Types
•  number - Represents numeric values, including integers and floating-point numbers
•  string - Represents text enclosed in quotes
•  boolean -  Represents a logical value — either true or false.
•  null - Represents an intentional absence of any value (a manually assigned "nothing").
•  undefined -  Represents a variable that has been declared but not assigned a value.
•  symbol - Represents a unique and immutable value often used as object property keys.

3.Declaring variables
•  var
•  let
•  const

4.Expressions 
Primary expressions
•  this - Refers to the current execution context's object.
•  Literals - Fixed values like numbers, strings, booleans, true, 42, 'hello', etc.
•  [] - Array literal for creating arrays.
•  {} - Object literal for creating objects.
•  function - Declares a function expression.
•  class - Declares a class expression.
•  function* -  Declares a generator function expression.
•  async function - Declares an asynchronous function expression.
•  async function* - Declares an async generator function expression.
•  /ab+c/i - Regular expression literal for pattern matching.
•  string - A literal representing a text value, e.g., "hello".
•  ( ) - Grouping operator to control evaluation order.

Left-hand-side expressions
•  Property accessors - Use . or [] to access object properties (e.g., obj.prop, arr[0]).
•  ?. - Optional chaining operator for safe property access (obj?.prop).
•  new - Creates an instance of a constructor function or class (new Date()).
•  new .target - Refers to the constructor that was directly invoked with new.
•  import.meta - Provides metadata about the current module (e.g., import.meta.url).
•  super - Refers to the parent class constructor or methods in a class.
•  import() - Dynamic import that loads modules asynchronously.

5.operators
•  Arithmetic Operators: +, -, *, /, %
•  Comparison Operators: ==, ===, !=, !==, <, >, <=, >=
•  Logical Operators: &&, ||, !

6.Control Structures
•  if
•  else if 
•  else
•  switch
•  case
•  default

7.Iterations/Loop
•  do...while
•  for
•  for...in
•  for...of
•  for await...of
•  while

8.Functions
•  Arrow Functions
•  Default parameters
•  Rest parameters
•  arguments
•  Method definitions
•  getter
•  setter

9.Objects and Arrays
•  Object Literal: { key: value }
•  Array Literal: [element1, element2, ...]
•  Object Methods and Properties
•  Array Methods: push(), pop(), shift(), unshift(), 
   splice(), slice(), forEach(), map(), filter()

10.Classes and Prototypes
•  Class Declaration
•  Constructor Functions
•  Prototypal Inheritance
•  extends keyword
•  super keyword
•  Private class features
•  Public class fields
•  static
•  Static initialization blocks

11.Error Handling
•  try, 
•  catch, 
•  finally (exception handling)

ADVANCED CONCEPTS

12.Closures
•  Lexical Scope
•  Function Scope
•  Closure Use Cases

13.Asynchronous JavaScript
•  Callback Functions
•  Promises
•  async/await Syntax
•  Fetch API
•  XMLHttpRequest

14.Modules
•  import and export Statements (ES6 Modules)
•  CommonJS Modules (require, module.exports)

15.Event Handling
•  Event Listeners
•  Event Object
•  Bubbling and Capturing

16.DOM Manipulation
•  Selecting DOM Elements
•  Modifying Element Properties
•  Creating and Appending Elements

17.Regular Expressions
•  Pattern Matching
•  RegExp Methods: test(), exec(), match(), replace()

18.Browser APIs
•  localStorage and sessionStorage
•  navigator Object
•  Geolocation API
•  Canvas API

19.Web APIs
•  setTimeout(), setInterval()
•  XMLHttpRequest
•  Fetch API
•  WebSockets

20.Functional Programming
•  Higher-Order Functions
•  map(), reduce(), filter()
•  Pure Functions and Immutability

21.Promises and Asynchronous Patterns
•  Promise Chaining
•  Error Handling with Promises
•  Async/Await

22.ES6+ Features
•  Template Literals
•  Destructuring Assignment
•  Rest and Spread Operators
•  Arrow Functions
•  Classes and Inheritance
•  Default Parameters
•  let, const Block Scoping

23.Browser Object Model (BOM)
•  window Object
•  history Object
•  location Object
•  navigator Object

24.Node.js Specific Concepts
•  require()
•  Node.js Modules (module.exports)
•  File System Module (fs)
•  npm (Node Package Manager)

25.Testing Frameworks
•  Jasmine 
•  Mocha
•  Jest

*/


/*
✅ 31. Event Loop and JavaScript Runtime

Answer:
The event loop is a mechanism that allows JavaScript to perform non-blocking asynchronous operations by handling events and callbacks. It works with the call stack, web APIs, callback queue, and microtask queue (promises).

✅ 32. Microtasks vs Macrotasks

Answer:

Microtasks: Promises, queueMicrotask()
Macrotasks: setTimeout, setInterval, DOM events
Microtasks are executed before the next macrotask, giving them higher priority.
✅ 33. Debouncing and Throttling

Answer:

Debouncing: Limits execution of a function after a pause (e.g., search input).
Throttling: Limits a function to run once every fixed interval (e.g., scroll events).
✅ 34. Memory Leaks in JavaScript

Answer:
Memory leaks occur when data is stored in memory but is never released, typically due to:

Unremoved event listeners
Closures holding references
Forgotten timers or intervals
✅ 35. Difference Between Function Declaration and Function Expression

Answer:

Function Declaration is hoisted:
function greet() {}
Function Expression is not hoisted:
const greet = function() {};
✅ 36. Arrow Functions vs Regular Functions

Answer:

Arrow functions do not bind their own this
Cannot be used as constructors
Have shorter syntax
✅ 37. Prototypes and Inheritance

Answer:
JavaScript uses prototype-based inheritance, where objects inherit from other objects using the __proto__ or Object.create().

✅ 38. Difference Between Shallow and Deep Copy

Answer:

Shallow copy: Only top-level values copied, nested objects are still referenced.
Deep copy: Entire structure is cloned.
✅ 39. JavaScript Modules (ES6 Modules)

Answer:

export and import keywords
Helps in organizing code and reusing components
// utils.js
export function add(a, b) { return a + b; }

// main.js
import { add } from './utils.js';
✅ 40. Set and Map

Answer:

Set: Collection of unique values
Map: Collection of key-value pairs with any type of key

*/