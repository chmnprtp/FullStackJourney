//! How js Works and how the code is executed?

//! A primitive in JavaScript is a data type that is not an object and has no methods.
//! These values are immutable. Each primitive represents a single value 

//! Is javascript Synchronous or Asynchronous?
// JavaScript is a synchronous, single-threaded language by default.
// Single-threaded → It has only one call stack, so it can execute only one task at a time.
// Synchronous → Code is executed line by line, in the exact order it appears.
// This means JavaScript will not move to the next line until the current one has finished executing.
// 🔹 However, JavaScript can also handle asynchronous operations (e.g., setTimeout, fetch, promises).
// 🔸 These are managed via the Event Loop, Web APIs, and callback queue — making JS non-blocking in behavior.

//* Everything in Js happens inside an Execution Context

//! ===============================   Execution Context  ==========================================

/*
As soon as programs run GEC Created (anonymous) in v8
Variable Environment   Thread of Execution
|| Memory Phase     || Execution Phase                  ||
||------------------||----------------------------------||
|| key:value        || ....                             ||
|| a:10             || ....                             ||
|| fn:{..}          || ....                             ||
||__________________||__________________________________||

*/
//? Example :-
// var n = 2; // line 1
// function square(num) {
//   // num is parameter      // line 2
//   var ans = num * num; // line 3
//   return ans; // line 4
// } // line 5
// var square2 = square(n); // n is argument       // line 6
// var square4 = square(4); // line 7
/*
//? Step 1:
* First Phase: Memory Phase
|| Memory Phase        || Execution Phase                  ||
||---------------------||----------------------------------||
|| n: undefined        ||                                  || 
|| square: {whole code}||                                  ||
|| square2: undefined  ||                                  ||
|| square4: undefined  ||                                  ||
||                     ||                                  ||
||                     ||                                  ||
||                     ||                                  ||
||                     ||                                  ||
||                     ||                                  ||
||                     ||                                  ||
||                     ||                                  ||
||_____________________||__________________________________||

* Second Phase: Execution Phase
|| Memory Phase        || Execution Phase                  ||
||---------------------||----------------------------------||
|| n: 2                ||                                  || 
|| square: {whole code}||                                  ||
|| square2: undefined  ||                                  ||
|| square4: undefined  ||                                  ||
||                     ||                                  ||
||                     ||                                  ||
||                     ||                                  ||
||                     ||                                  ||
||                     ||                                  ||
||                     ||                                  ||
||                     ||                                  ||
||_____________________||__________________________________||

 @ When new function invoked new execution context created  
//? Step 2
* Function Memory Phase  line 6
* First Phase : Memory Phase 
|| Memory Phase     || Execution Phase                  ||
||------------------||----------------------------------||
|| num: undefined   ||                                  ||
|| ans: undefined   ||                                  ||
||                  ||                                  ||
||__________________||__________________________________||

* Second Phase : Execution Phase
|| Memory Phase     || Execution Phase                  ||
||------------------||----------------------------------||
|| num: 2           ||                                  || function square(num) {
|| ans: 4           || ans = num * num                  || var ans = num * num;
||                  || return ans;                      || return ans;
||__________________||__________________________________|| }
 - return keyword will return the control of the program where the function was invoked
 - This execution context wil be deleted after execution of the function

//? Step 3
* Function Memory Phase line 7
* First Phase : 
|| Memory Phase     || Execution Phase                  ||
||------------------||----------------------------------||
|| num: undefined   ||                                  ||
|| ans: undefined   ||                                  ||
||                  ||                                  ||
||__________________||__________________________________||

* Second Phase : Execution Phase
|| Memory Phase     || Execution Phase                  ||
||------------------||----------------------------------||
|| num: 4           ||                                  || function square(num) {
|| ans: 16          || ans = num * num                  || var ans = num * num;
||                  || return ans;                      || return ans;
||__________________||__________________________________|| } 
 - return keyword will return the control of the program where the function was invoked
 - This execution context wil be deleted after execution of the function

//? Step 4
* Second Phase: Execution Phase
|| Memory Phase        || Execution Phase                  ||
||---------------------||----------------------------------||
|| n: 2                ||                                  || 
|| square: {whole code}||                                  ||
|| square2: 4          ||                                  || value changed from undefined to 4
|| square4: 16         ||                                  || value changed from undefined to 16
||                     ||                                  ||
||                     ||                                  ||
||                     ||                                  ||
||                     ||                                  ||
||                     ||                                  ||
||                     ||                                  ||
||                     ||                                  ||
||_____________________||__________________________________||

//? Callstack
[ Call Stack: Top → Bottom ]

✅ Call Stack (Vertical Flow)
Initial State (before any function call):
|--------------------------|
|                          |
|      (empty stack)       |
|                          |
|--------------------------|

Step 1: Global Code Starts
|----------------------------|
| Global Execution Context   |
|----------------------------|

Step 2: square(n) is called
|----------------------------|
| square(n) Execution Context|
|----------------------------|
| Global Execution Context   |
|----------------------------|

Step 3: square(n) returns → FEC popped
|----------------------------|
| Global Execution Context   |
|----------------------------|

Step 4: square(4) is called
|----------------------------|
| square(4) Execution Context|
|----------------------------|
| Global Execution Context   |
|----------------------------|

Step 5: square(4) returns → FEC popped
|----------------------------|
| Global Execution Context   |
|----------------------------|

Final State: Program done
|----------------------------|
| Global Execution Context   |
|----------------------------|
when function will execute completely function execution context will be popped out.

* CallStack other names
    Execution Context stack
    Program stack
    Control stack
    Runtime stack
    Machine stack

*/

//! ===============================   Hoisting (javascript & function)  ===========================
//* Hoisting is the behavior in JavaScript where variable and function declarations are registered 
//* in memory before code execution, so they can be referenced before their declaration line in the code.
//? hoisting is a behaviour in js where we can access variable and function even before we have initialised it

// var x = 8;
// function getName(){
//     console.log("Hi Hello");
// }
// getName(); //Output: Hi Hello
// console.log(x) //Output: 8

//---------------------------------------

// getName(); //Output: Hi Hello
// console.log(x) //Output: undefined
// var x = 8;
// function getName(){
//     console.log("Hi Hello");
// }

//---------------------------------------

// getName(); //Output: Hi Hello
// console.log(x); //Output: x is not defined
// function getName() {
//   console.log("Hi Hello");
// }

//---------------------------------------

// var x = 8;
// function getName() {
//   console.log("Hi Hello");
// }
// console.log(getName); //Output: [Function: getName]

//---------------------------------------

// console.log(getName); //Output: [Function: getName]
// var x = 8;
// function getName() {
//   console.log("Hi Hello");
// }

//---------------------------------------

// console.log(getName); //Output: [Function: getName]
// console.log(x); //Output: ReferenceError: x is not defined
// function getName() {
//   console.log("Hi Hello");
// }

//---------------------------------------

//* Here arrow function behaves like variable
// getName(); //Output: TypeError: getName is not a function
// console.log(getName); //Output: undefined
// var getName = ()=> {
//   console.log("Hi Hello");
// }

//---------------------------------------

//* here also function behaves like variable
// getName(); //Output: TypeError: getName is not a function
// console.log(getName); //Output: undefined
// var getName = function() {
//   console.log("Hi Hello");
// }

//--------------------------------------- */

//! =========================   How Function Works in Js % Variable Environment  ==================

// var x = 1;                     //line:1
// a(); // Output: 10             //line:2
// b(); // Output: 100            //line:3
// console.log(x); // Output: 1   //line:4
// function a(){                  //line:5
//   var x = 10;                  //line:6
//   console.log(x);              //line:7
// }                              //line:8
// function b(){                  //line:9
//   var x = 100;                 //line:10
//   console.log(x);              //line:11
// }

//* When we run this program behind the scene how it works:
//* First GEC will be created which have two phase memory phase and exectuion phase
//* GEC will be pushed to Callstack
/* 

? Step:1
* First Phase: Memory Phase
|| Memory Phase        || Execution Phase                  ||
||---------------------||----------------------------------||
|| x: undefined        ||                                  || 
|| a: {whole fn code}  ||                                  ||
|| b: {whole fn code}  ||                                  ||
||                     ||                                  ||
||                     ||                                  ||
||_____________________||__________________________________||

* Second Phase: Execution Phase
|| Memory Phase        || Execution Phase                  ||
||---------------------||----------------------------------||
|| x: 1                || var x = 1;           //line:1    || when we run this line in execution phase undefined replace with 1
|| a: {whole fn code}  || a();                 //line:2    || in this line new function execution will be created for a();
|| b: {whole fn code}  ||                                  ||
||                     ||                                  ||
||                     ||                                  ||
||_____________________||__________________________________||

? Step:2
* Function Execution context will be created on line 2 and it will push on callstack
* First Phase : Memory Phase - it will have Local memory and Global memory

|| Memory Phase     || Execution Phase                  ||
||------------------||----------------------------------||
|| x: undefined     ||                                  ||
||__________________||__________________________________||

* Function Execution Phase line 2
* Second Phase : Execution Phase
|| Memory Phase     || Execution Phase                  ||
||------------------||----------------------------------||
|| x: 10            || var x = 10;            //line6   || when line 6 execution it will update undefind to 10 then 
||                  || console.log(x);        //line7   || it will print value x to console that is 10 from the local memory
||__________________||__________________________________|| then control be will go back to the fn invoked statement line 2
and a() fn execution will be remove from callstack

* Execution Phase
|| Memory Phase        || Execution Phase                  ||
||---------------------||----------------------------------||
|| x: 1                || var x = 1;           //line:1    || 
|| a: {whole fn code}  || a();                 //line:2    || 
|| b: {whole fn code}  || b();                 //line:3    || in this line new function execution will be created for b();
||                     ||                                  ||
||                     ||                                  ||
||_____________________||__________________________________||

? Step:3
* Function Execution context will be created on line 3 and it will push on callstack
* First Phase : Memory Phase - it will have Local memory and Global memory
|| Memory Phase     || Execution Phase                  ||
||------------------||----------------------------------||
|| x: undefined     ||                                  ||
||__________________||__________________________________||

* Function Execution Context Phase line 2
* Second Phase : Execution Phase
|| Memory Phase     || Execution Phase                  ||
||------------------||----------------------------------||
|| x: 100           || var x = 100;           //line10  || when line 10 execution it will update undefind to 100 then 
||                  || console.log(x);        //line11  || it will print value x to console that is 100 from the local memory
||__________________||__________________________________|| then control be will go back to the fn invoked statement line 3
and b() fn execution will be remove from callstack

* Execution Phase
|| Memory Phase        || Execution Phase                  ||
||---------------------||----------------------------------||
|| x: 1                || var x = 1;           //line:1    || 
|| a: {whole fn code}  || a();                 //line:2    || 
|| b: {whole fn code}  || b();                 //line:3    || 
||                     || console.log(x);      //line:4    || when this line execution the value of x that is 1 will print on console.
||                     ||                                  || and GEC will be popped out from callstack
||_____________________||__________________________________||

*/

//! ===============================   window & this keyword  ======================================
/*
* shortest program in js file is empty file - even if it is empty GEC will be created. also sets memory space.
* js engine also create window
* window is a gloabl object which is created along with GEC.
*  which have so many methods and variables in it. created by js engine in global space
* Global space - any code you write which is not inside function
* js engine also creates this
* at global level this points to window
*/

//? So basically Three things created when we run js program
//* GEC + window + this

//* this === window => true // in global level

//In Browsers - window
//In Node - Global

//? lets try to add something in empty file

// var a = 10;      // in Global space
// function b() {   // In Global space
//   var x = 5;    // Not in Global space
// }

//* Here everything which is in Global spcae attached to Global Object(window)

// var a = 10;      // in Global space
// function b() {   // In Global space
//   var x = 5;    // Not in Global space
// }
// console.log(window.a) // Output: 10
// console.log(a)        // Output: 10 // if we don't put anything in front of a it assumes its in global space
// console.log(x)        // Output: x is not defined // because x is not in global space its in Function local space
// console.log(this.a)   // Output:10 

//*/

//!  ===============================   undefined vs not defined  ===================================
//* undefined - placeholder which tells that the variable is allocated memory but not initialised
// undefiend doesnot mean empty
//* not defined - which has not allocated memory

// //---------------------------------------

// console.log(a) //Output: undefined
// var a = 7;     // even before this line executed js allocated memory to this a in memory phase. that is undefined
// console.log(a);//Output: 7 
// console.log(x) //Output: x is not defined // because we have not allocate memory to x

//---------------------------------------

// var a;     
// if(a === undefined) // checking two things are equal or not
// {
//   console.log("a is undefined"); // This will run
// }else{
//   console.log("a is not undefined")  
// }

//---------------------------------------
//? js is loosely-typed/weakly-type means it does attach its variable to any specific data type

//---------------------------------------
// var a;
// console.log(a)    //Output:undefined
// a = 10;           
// console.log(a);   //Output:10
// a = "chamn";
// console.log(a);   //Output:chamn

//---------------------------------------

//* don't do 
// var a = undefined; 


//!  ===============================   Scope , The Scope Chain & Lexical Environment  ==============
//? Scope means where you can access a specific variable or a function in our code.
//* Scope is directly depend on the lexical environment

//---------------------------------------

// function a(){
//   console.log(b); //Output:10 //because in lexical scope inside block of code can be acces
// }                             // first engine checks its in local memory space(fn) then global scope
// var b = 10;
// a();

//---------------------------------------

// function a(){
//   c();
//   function c(){
//     console.log(b); //Output: 10
//   }
// }
// var b = 10;
// a();

//---------------------------------------

// function a(){
//   var b = 10;
//   c();
//   function c(){
//    console.log(b) //Output:10
//   }
// }
// a();

//---------------------------------------

// function a(){
//   c();
//   function c(){
//     var b = 10;
//   }
// }
// a();
// console.log(b); //Output:ReferenceError: b is not defined

//---------------------------------------

//* When GEC created lexical environment also created
//? Lexical environment is the local memory along with reference to lexical environment of parent.
//* Lexical as term means hirarchy or sequence (physical vailable, where it sits inside the code)

// function a(){
//   c();
//   function c(){
//     var b = 10;
//   }
// }
// a();
// console.log(b);

//* Here we can say that c function is lexically inside a functon
//* a is lexically inside global scope
//* when function execution context is created , it also get reference to the lexical environment of parent. along with memory space.
//* at global level - its lexical environment of parent points to null

//? Scope chain - chain of lexical environemt and parent reference. 


//! ========================================  let & const in JS 🔥Temporal Dead Zone  ===============

//! Are let & const declarations hoisted?
// Yes let and const declaration are hoisted
// these are in temporal dead zone for the time being
//* the memory given to variables and functions even before single line of code executed

//---------------------------------------

// console.log(b); //Output:undefined
// console.log(a); //Output:ReferenceError: Cannot access 'a' before initialization // a is in TDZ
// let a = 10;
// var b = 100;

//---------------------------------------
//* in case of b its in global space  // in case of var memory allocated before execution, assigned undefined and attach to Global object
//* in case of a its in script space  // in case of let and const they allocated memory(hoisting) but store in  Script Space not in Global
// we cant acces this memory space before assign any value to them. 

//! What is Temporal Dead Zone?
// (TDZ) is the time between when a let or const variable is hoisted and when it is initialized, 
// during which accessing it will throw a ReferenceError.

//! SyntaxError vs ReferenceError vs TypeError

//---------------------------------------
// console.log(x);  //Output:ReferenceError: x is not defined
// let a = 10;
// var b = 100;
//---------------------------------------
// console.log(b);  //Output:undefiend
// let a = 10;
// var b = 100;
//---------------------------------------

// let a = 10;
// let a = 11; //Output:SyntaxError: Identifier 'a' has already been declared

//---------------------------------------

// console.log("eafa");
// let a = 10;
// let a = 11; //Output:SyntaxError: Identifier 'a' has already been declared

//---------------------------------------

// let a = 102;
// var a = 23; //Output:SyntaxError: Identifier 'a' has already been declared

//---------------------------------------

// var b = 1;
// var b = 4; //Output: No Error

//---------------------------------------

// let a;
// a = 10;
// console.log(a) //Output:10

//---------------------------------------

// const a;  //Output:SyntaxError: Missing initializer in const declaration
// a = 10;
// console.log(a) 

//---------------------------------------

// const a = 10;
// a = 100;  //Output:TypeError: Assignment to constant variable.
// console.log(a) 

//---------------------------------------

//! =====================================     BLOCK SCOPE & Shadowing ==============================

//! what is a Block in JS?
//? Blocks are defined by {}
// Block is also known as compound statement
// Block is use to combine multiple js statement into a group
//* we group multiple statement together in a block so that we can use it where js expect one statement.
// Block scope follow lexical scope

//---------------------------------------
// if(true)  //Output:SyntaxError: Unexpected end of input  // if expect one statement
// if(true) true; // it is also correct it is one statement
//---------------------------------------

//* but if you write multiple statement we can only do that by grouping them together using {} and make it one statement.
// if(true){
//   console.log("helo")
//   console.log("hi")
// }
//---------------------------------------

//! What is Block Scope?
// All variable and functions we can acces inside block.

//?In case of hoisting 
//---------------------------------------
// {
// var a = 10;
// let b = 100;
// const c = 1000;
// }
//---------------------------------------
//
//      Block             Global
//      a:undefined       b:undefined
//      c:undefined
//* Thats why let and const are block scoped.
// outside their block let and const can't be accessed.

//---------------------------------------

// {
// var a = 10;
// let b = 100;
// const c = 1000;
// console.log(a); //Output:10
// console.log(b); //Output:100
// console.log(c); //Output:1000
// }
// console.log(a); // Output:10
// console.log(b); //Output:ReferenceError: b is not defined // Because it was not in global scope but in Block scope
// console.log(c);

//---------------------------------------

//! What is shadowing in js?

//---------------------------------------
// var a = 11;
// {
// var a = 10; // a shodowed above a and also modified the value of above a // bcz there are pointing to same memory location
// let b = 100;
// const c = 1000;
// console.log(a); //Output:10
// console.log(b); //Output:100
// console.log(c); //Output:1000
// }
// console.log(a); //Output:10

//* But that is not a case with let

//---------------------------------------

// let b = 11; // This b have a script scope
// {
// var a = 10; 
// let b = 100 // This b have a Block scope
// const c = 1000;
// console.log(a); //Output:10
// console.log(b); //Output:100
// console.log(c); //Output:1000
// }
// console.log(b); //Output:11

//* same with const also with let
//---------------------------------------

// let b = 11;   // Script Scope
// function x(){ // Block Scope
//   var a = 10; 
//   let b = 100 
//   const c = 1000;
//   console.log(b); //Output:100
// }
// x();
// console.log(b); //Output:11

//---------------------------------------

//? Illigal shadowing
// let a = 10
// {
//   var a = 4; //Output:SyntaxError: Identifier 'a' has already been declared
// }
//---------------------------------------
// var a = 10
// {
//   let a = 4; //Output:No error
// }
//---------------------------------------
// let a = 10
// {
//   let a = 4; //Output:No error
// }
//---------------------------------------
// let a = 10
// function x(){ //* that why its a function scoped
//   let a = 4; //Output:No error
// }
// x();


//! let const var
// | Keyword | Scope          | Redeclarable | Reassignable (Updatable)  | Hoisted                            | Notes                                                          |
// | ------- | -------------- | ------------ | ------------------------- | ---------------------------------- | -------------------------------------------------------------- |
// | `var`   | Function Scope | ✅ Yes        | ✅ Yes                     | ✅ Yes (initialized as `undefined`) | Can lead to bugs due to hoisting and lack of block scope.      |
// | `let`   | Block Scope    | ❌ No         | ✅ Yes                     | ✅ Yes (but not initialized)        | Preferred for variables that change.                           |
// | `const` | Block Scope    | ❌ No         | ❌ No (value can't change) | ✅ Yes (but not initialized)        | Use for constants. Object properties **can** still be changed. |


//! =====================================     Closure   ==============================
//? Function alongwith the lexical environment together forms Closure.
// each and every js function has an acces to its lexical environment means acces to variable which are present in parent environment so,
// even a function executes in other scope not in original scope it remember its outer lexical environment where it was originally present in the code.
//? lexical environment is the local scope with the reference to parent lexical environment.

//?Example:
// function outer(){
//   let i = 5;
//   function inner(){
//     console.log(i);
//   }
//   return inner;
// }
// outer()(); // Output: 5  // () () to calling inner function

//---------------------------------------
// function x(){
//   var a = 7;
//   function y(){
//     console.log(a); //Output:7
//   }
//   y();
// }
// x();
//---------------------------------------

// function x(){
//   var a = 7;
//   function y(){
//     console.log(a); //Output:7
//   }
//   return y;
// }
// var z = x();
// console.log(z); //Output:[Function: y]  // Here x has been removed from callstack
// z();

//* when function are returned from a function they still retain its lexical scope
//* 
//---------------------------------------

// function x(){
//   var a = 7;
//   return function y(){  // Its same as above
//     console.log(a); //Output:7
//   }
 
// }
// var z = x();
// console.log(z); //Output:[Function: y]  // Here x has been removed from callstack
// z();

//---------------------------------------

//? Closure Cases:

//---------------------------------------

// function x(){
//   var a = 7;
//   function y(){  
//     console.log(a); //Output:100
//   }
//   a=100; // it still forms a closure. it form a closure to outer environment to in the above sequence
//  return y;
// }
// var z = x();
// console.log(z); //Output:[Function: y]  // Here x has been removed from callstack
// z();

//---------------------------------------

// function x(){
//   let a = 7; // it does not matter if ther is let or var it still forms a closure
//   function y(){  
//     console.log(a); //Output:100
//   }
//   a=100; // it still forms a closure. it form a closure to outer environment to in the above sequence
//  return y;
// }
// var z = x();
// console.log(z); //Output:[Function: y]  // Here x has been removed from callstack
// z();

//---------------------------------------

// function x(b){
//   let a = 7; 
//   function y(){  
//     console.log(b); //Output:chaman
//   }
//   a=100; 
//  return y;
// }
// var z = x("chaman");
// console.log(z); //Output:[Function: y]  // Here x has been removed from callstack
// z();

//---------------------------------------

// function x(b){
//   let a = 7; 
//   function y(){  
//     console.log(b); //Output:undefined
//   }
//   a=100; 
//  return y;
// }
// var z = x();
// console.log(z); //Output:[Function: y]  // Here x has been removed from callstack
// z("chaman");

//---------------------------------------


// function z() {
//   var b=3; 
//   function x(){
//     var a = 7;
//     function y(){  
//       console.log(a,b); //Output:100 3
//     }
//     a=100;
//    y();
//   }
//   x();
// }
// z();

//---------------------------------------

//? Uses of CLosure
// Module Design Pattern
// Currying
// Function like once
// memoize
// maintaing state async world
// setTimeout
// Iterators
// and many more

//? data hiding example:
// function counter(){
//   var count = 0;
//   function incrementCounter(){
//     count++
//     console.log(count);
//   }
//   return incrementCounter;
// }
// var increment1 = counter();
// increment1();
// increment1();
// var increment2 = counter();
// increment2();increment2();increment2();
// // console.log(count);

//? disadvantage of closue
// overconsumption of memory
// memory leak if not handle properly

//? garbage collector
// program in js engine which freeze unutilise memory. when it find out there is no need of it memory.



//! //! =====================================  setTimeout + Closure   ==============================
 
//---------------------------------------
// function x(){
//   var i =1
//   setTimeout(()=>{
//     console.log(i) //Output:1 after 1 sec
//   },1000)
// }
// x();
//---------------------------------------
// function x(){
//   var i =1
//   setTimeout(()=>{ // this function forms a closure
//     console.log(i) //Output:1 after 1 sec
//   },1000)
//   console.log("Chaman");  //Output: Chaman first
// }
// x();

//---------------------------------------

// function x(){
//  for(var i=1; i<=5; i++){
//   setTimeout(()=>{ // this function forms a closure
//     console.log(i) 
//   },i*1000)
// }}
//   console.log("Chaman");  //Output: Chaman first
// x();

// Output: // Because the they all are referencing to same variable (same Global memory space)
// Chaman
// 6
// 6
// 6
// 6
// 6

//---------------------------------------

// function x(){
//   for(let i=1; i<=5; i++){
//    setTimeout(()=>{ // this function forms a closure
//      console.log(i) 
//    },i*1000)
//  }
// }
//    console.log("Chaman");  //Output: Chaman first
//  x();
 
 // Output: // Because the they all are referencing to other variable (different block memory space for every iteration)
 // every time setTime iterate it referece to its seperate Block variable
 // Chaman
 // 1
 // 2
 // 3
 // 4
 // 5

//---------------------------------------

// function x(){
//   for(let i=1; i<=5; i++){
//   function close(i){
    
//       setTimeout(()=>{ // this function forms a closure
//         console.log(i) 
//       },i*1000)
//     }
//   close(i)
// }
// }
//    console.log("Chaman");  //Output: Chaman first
//  x();
 
 // Output: Now in every iteration Var also creating new variable memory space
 // Chaman
 // 1
 // 2
 // 3
 // 4
 // 5

 //---------------------------------------

 //! =====================================  Functions   ======================================

//! Function Statement vs Function Expression vs Function Declaration?
//?Function Statement aka function statement
//---------------------------------------

// function abc(){
//   console.log("function statement")
// }
// abc();

//---------------------------------------

// abc();  // hoisted
// function abc(){
//   console.log("function statement")
// }

//---------------------------------------

//?Function expression - which can be assign to variable
//---------------------------------------

// var b = function(){ // it is treated as variable
//   console.log("Function expresssion")
// }
// b();

//---------------------------------------

// b();  //Output: TypeError: b is not a function // it is treated as variable
// var b = function(){
//   console.log("Function expresssion")
// }
//---------------------------------------


//? //! What is an anonymous function?
//does not have their own identidy
// anonymous function are used in a place where function are used as a value.
//---------------------------------------
// function (){ //Output:SyntaxError: Function statements require a function name

// }
//---------------------------------------

// //? Named function expression?
//---------------------------------------
// var c = function abc(){
//   console.log("Function expresssion")
//   console.log(abc) // [Function: abc]
// }
// c(); //Output:Function expresssion
// abc(); //ReferenceError: abc is not defined
//---------------------------------------

//? Paramenter and arguments


//? first class function
// the ability of use function as value and can be return from a function 
//? first class citizen

//? arrow function



//! Callback Function
// function which we pass as an argument to another functoin is a callback function.
//? why callback - we can call this funciton later on the code. we give responsibility to another function.
//  function x(y){

//  }
//  x(function y(){  //Function y is a callback function

 //? async example usiing setTimeout
//  setTimeout takes callback function and time as second argument -- setTimeout is a part of webApi not js
// setTIme not possible without callback.
//---------------------------------------

// setTimeout(function (){
//   console.log("timer")
// },1000) // it is a callback function

//---------------------------------------

//! ======================================== Asynchronous JavaScript & EVENT LOOP  =============================
//? JavaScript Execution Basics
// JavaScript is single-threaded – only one task runs at a time.
// Every function call creates an Execution Context, which is managed using the Call Stack.

//? Call Stack
// The Call Stack runs synchronous code line by line.
// When a function is called, it is pushed onto the stack, and once completed, it is popped off.
// Example:
// function sayHi() {
//   console.log("Hi");
// }
// sayHi(); // pushed to stack, executed, popped

//? Web Api
// `setTimeout`, `DOM Events` fetch(), console , location
//? Asynchronous JavaScript
// JS alone can’t handle async tasks like setTimeout, DOM events, or fetch.
// The browser/web APIs handle these tasks and send the results back to JS later.

//? Event Loop
// Constantly checks:
// "Is the Call Stack empty?"
// If yes, it pushes a callback from a queue (task/microtask) to the call stack.

//? setTimeout / Callback Queue (Macrotasks)
// setTimeout → goes to Web API → after delay, callback goes to the Callback Queue.
// It waits until the Call Stack is empty, then event loop pushes it to the stack.
// Timer is not guaranteed, it's minimum time to wait.

//? Event Listeners
// Like onclick → when triggered, the callback goes to Callback Queue.
// Event loop handles it only when call stack is empty.
// ⚡ Microtask Queue
// Promises, .then(), catch, finally, and MutationObserver go to Microtask Queue.
// Higher priority than Callback Queue.
// After each task, all microtasks are executed before moving on.

//? Microtasks vs Macrotasks
// | **Feature**              | **Microtasks**                               | **Macrotasks (Callback Queue)**          |
// |--------------------------|----------------------------------------------|------------------------------------------|
// | **Examples**             | `Promise.then`, `MutationObserver`           | `setTimeout`, `DOM Events` fetch(),      |
// |                          |                                              | console , location                       |
// | **Priority**             | ✅ Higher                                     | ❌ Lower                                 |
// | **When Executed**        | Immediately after current task               | After microtasks & when the stack is free|


//? Execution Order Example
// console.log("Start");
// setTimeout(() => console.log("setTimeout"), 0);
// Promise.resolve().then(() => console.log("Promise"));
// console.log("End");
// Output:
// Start
// End
// Promise
// setTimeout

//? Analogy Summary
// Think of the browser as a school:
// Call Stack = Teacher calls students (functions) to the board
// Microtask Queue = Top-performing students (VIP tasks)
// Callback Queue = Regular students (normal async tasks)
// Event Loop = Principal – manages the flow!


//! ============= Array =========================
//Array is a special object used to store multiple values in a single variable.
// 🔸 An ordered collection of values.
// 🔸 Each value has a numeric index (starting from 0).
// 🔸 Values can be of any data type (mixed types allowed).
// 🔸 Arrays are mutable – you can change their contents.

//! Null
// 🔸 It’s a special keyword used to indicate "no value" or "nothing".
// 🔸 It’s manually assigned to a variable.
// 🔸 It represents an empty or non-existent object reference.
// 🔸 It is of type object (this is a historical bug in JavaScript).

// null == undefined  // true
// null === undefined // false

//! isNaN()
// The global function isNaN() can be used to check if a certain value or expression evaluates to NaN. This function 
// (in short) first checks if the value is a number, if not tries to convert it (*), and then checks if the resulting value is NaN

// sNaN(NaN);          // true
// isNaN(1);            // false: 1 is a number
// isNaN(-2e-4);        // false: -2e-4 is a number (-0.0002) in scientific notation
// isNaN(Infinity);     // false: Infinity is a number
// isNaN(true);         // false: converted to 1, which is a number
// isNaN(false);        // false: converted to 0, which is a number
// isNaN(null);         // false: converted to 0, which is a number
// isNaN("");           // false: converted to 0, which is a number
// isNaN(" ");          // false: converted to 0, which is a number
// isNaN("45.3");       // false: string representing a number, converted to 45.3
// isNaN("1.2e3");      // false: string representing a number, converted to 1.2e3
// isNaN("Infinity");   // false: string representing a number, converted to Infinity
// isNaN(new Date);     // false: Date object, converted to milliseconds since epoch
// isNaN("10$");        // true : conversion fails, the dollar sign is not a digit
// isNaN("hello");      // true : conversion fails, no digits at all
// isNaN(undefined);    // true : converted to NaN
// isNaN();             // true : converted to NaN (implicitly undefined)
// isNaN(function(){}); // true : conversion fails
// isNaN({});           // true : conversion fails
// isNaN([1, 2]);       // true : converted to "1, 2", which can't be converted to a number
// This last one is a bit tricky: checking if an Array is NaN. To do this, the Number() constructor first converts the array

//? Use Number
// The one and only
// Number.isNaN(NaN);          // true
// Numbers
// Number.isNaN(1);            // false
// Number.isNaN(-2e-4);        // false
// Number.isNaN(Infinity);     // false
// Values not of type number
// Number.isNaN(true);         // false
// Number.isNaN(false);        // false
// Number.isNaN(null);         // false
// Number.isNaN("");           // false
// Number.isNaN(" ");          // false
// Number.isNaN("45.3");       // false
// Number.isNaN("1.2e3");      // false
// Number.isNaN("Infinity");   // false
// Number.isNaN(new Date);     // false
// Number.isNaN("10$");        // false
// Number.isNaN("hello");      // false
// Number.isNaN(undefined);    // false
// Number.isNaN();             // false
// Number.isNaN(function(){}); // false
// Number.isNaN({});           // false
// Number.isNaN([]);           // false
// Number.isNaN([1]);          // false
// Number.isNaN([1, 2]);       // false
// Number.isNaN([true]);       // false

//! NaN
// NaN stands for "Not a Number." When a mathematical function or operation in JavaScript cannot return a specific
// number, it returns the value NaN instead.
// typeOf NaN // number 
//NaN == NaN //false
//NaN === NaN //false

//? Operations that return NaN
// Mathematical operations on values other than numbers return NaN.
// "b" * 3
// "cde" - "e"
// [1, 2, 3] * 2

// An exception: Single-number arrays.
// [2] * [3]  // Returns 6

// Also, remember that the + operator concatenates strings.
// "a" + "b"  // Returns "ab"

// Dividing zero by zero returns NaN.
// 0 / 0         // NaN

// Generally, Math functions that are given non-numeric arguments will return NaN.
// Math.floor("a")

// The square root of a negative number returns NaN, because Math.sqrt does not support imaginary or complex
// numbers.
// Math.sqrt(-1)


//! console.log(1/0) //Infinity

//! undefined and null
//undefined is a global value that represents the absence of an assigned value.
// typeof undefined === 'undefined

// if you assigned any variable to undefined means variable does not exist.
//?Exaple
// A variable when it is declared but not assigned a value (i.e. defined)
// let foo;
// console.log('is undefined?', foo === undefined);
// is undefined? true

// Accessing the value of a property that doesn't exist
// let foo = { a: 'a' };
// console.log('is undefined?', foo.b === undefined);
// is undefined? true

// The return value of a function that doesn't return a value
// function foo() { return; }
// console.log('is undefined?', foo() === undefined);
// is undefined? true

// The value of a function argument that is declared but has been omitted from the function call
// function foo(param) {
//   console.log('is undefined?', param === undefined);
// }
// foo('a');
// foo();
// is undefined? false
// is undefined? true


// null is an object that indicates that a variable has been explicitly assigned "no value"
// typeof null === 'object


//! typeOf()
// 1. Strings
// typeof "String" or
// typeof Date(2011,01,01)
// "string"

// 2. Numbers
// typeof 42
// "number"

// 3. Bool
// typeof true (valid values true and false)
// "boolean"

// 4. Object
// typeof {} or
// typeof [] or
// typeof null or
// typeof /aaa/ or
// typeof Error()
// "object"

// 5. Function
// typeof function(){}
// "function"

// 6. Undefined
// var var1; typeof var1
// "undefined"

//! String
// Strings in JavaScript can be enclosed in Single quotes 'hello', Double quotes "Hello" and (from ES2015, ES6) in
// Template Literals (backticks) `hello`

// var hello  = "Hello";
// var world  = 'world';
// var helloW = `Hello World`;              // ES2015 / ES6

// Strings can be created from other types using the String() function.
// var intString = String(32); // "32"
// var booleanString = String(true); // "true"
// var nullString = String(null); // "null"

// Or, toString() can be used to convert Numbers, Booleans or Objects to Strings.
// var intString = (5232).toString(); // "5232"
// var booleanString = (false).toString(); // "false"
// var objString = ({}).toString(); // "[object Object]"

// Strings also can be created by using String.fromCharCode method.
// String.fromCharCode(104,101,108,108,111) //"hello"

// Creating a String object using new keyword is allowed, but is not recommended as it behaves like Objects unlike
// primitive strings.
// var objectString = new String("Yes, I am a String object");
// typeof objectString;//"object"
// typeof objectString.valueOf();//"string"

// Concatenating Strings
// String concatenation can be done with the + concatenation operator, or with the built-in concat() method on the
// String object prototype.
// var foo = "Foo";
// var bar = "Bar";
// console.log(foo + bar);        // => "FooBar"
// console.log(foo + " " + bar);  // => "Foo Bar"

// foo.concat(bar)            // => "FooBar"
// "a".concat("b", " ", "d")  // => "ab d"

// Strings can be concatenated with non-string variables but will type-convert the non-string variables into strings.
// var string = "string";
// var number = 32;
// var boolean = true;
// console.log(string + number + boolean); // "string32true"

// String Templates

// Strings can be created using template literals (backticks) `hello`.
// var greeting = `Hello`;

// With template literals, you can do string interpolation using ${variable} inside template literals:
// var place = `World`;
// var greet = `Hello ${place}!`
// console.log(greet); // "Hello World!"

//? String method
//! js-string-methods.js

// ============================================================
// ✅ Full Summary of JavaScript String Methods
// ============================================================

/*
🔹 1. charAt(index)
- ✅ Returns the character at the specified index.
- Syntax: str.charAt(index)
*/
let str1 = "JavaScript";
console.log(str1.charAt(4)); // Output: "S"


/*
🔹 2. charCodeAt(index)
- ✅ Returns the Unicode of the character at the specified index.
- Syntax: str.charCodeAt(index)
*/
console.log(str1.charCodeAt(0)); // Output: 74 (Unicode of 'J')


/*
🔹 3. codePointAt(index)
- ✅ Returns the Unicode code point of the character at the specified index (supports emojis).
- Syntax: str.codePointAt(index)
*/
console.log("👍".codePointAt(0)); // Output: 128077


/*
🔹 4. concat(str1, str2, ...)
- ✅ Joins two or more strings.
- Syntax: str.concat(str2, str3, ...)
*/
let str2 = " is awesome!";
console.log(str1.concat(str2)); // Output: "JavaScript is awesome!"


/*
🔹 5. endsWith(searchString, length)
- ✅ Checks if string ends with a specified substring.
- Syntax: str.endsWith(searchString, length?)
*/
console.log(str1.endsWith("Script")); // Output: true


/*
🔹 6. includes(searchString, position)
- ✅ Checks if string includes a substring.
- Syntax: str.includes(searchString, position?)
*/
console.log(str1.includes("Java")); // Output: true


/*
🔹 7. indexOf(searchValue, fromIndex)
- ✅ Returns the first index of occurrence of substring; -1 if not found.
- Syntax: str.indexOf(searchValue, fromIndex?)
*/
console.log(str1.indexOf("a")); // Output: 1


/*
🔹 8. lastIndexOf(searchValue, fromIndex)
- ✅ Returns the last index of occurrence of substring.
- Syntax: str.lastIndexOf(searchValue, fromIndex?)
*/
console.log(str1.lastIndexOf("a")); // Output: 3


/*
🔹 9. localeCompare(compareStr)
- ✅ Compares two strings in current locale (returns -1, 0, 1).
- Syntax: str.localeCompare(compareStr)
*/
console.log("a".localeCompare("b")); // Output: -1


/*
🔹 10. match(regex)
- ✅ Returns array of matches or null.
- Syntax: str.match(regex)
*/
console.log("abc123".match(/\d+/)); // Output: ["123"]


/*
🔹 11. matchAll(regex)
- ✅ Returns iterator of all matches including capture groups.
- Syntax: str.matchAll(regex)
*/
let matches = [..."test1test2".matchAll(/test(\d)/g)];
console.log(matches[0][0]); // Output: "test1"
console.log(matches[0][1]); // Output: "1"


/*
🔹 12. padEnd(targetLength, padString)
- ✅ Pads the string at the end to reach target length.
- Syntax: str.padEnd(targetLength, padString?)
*/
console.log("5".padEnd(4, "0")); // Output: "5000"


/*
🔹 13. padStart(targetLength, padString)
- ✅ Pads the string at the beginning.
- Syntax: str.padStart(targetLength, padString?)
*/
console.log("5".padStart(4, "0")); // Output: "0005"


/*
🔹 14. repeat(count)
- ✅ Returns a new string with count copies.
- Syntax: str.repeat(count)
*/
console.log("ha".repeat(3)); // Output: "hahaha"


/*
🔹 15. replace(searchValue, replaceValue)
- ✅ Replaces first occurrence (or all if using regex with /g).
- Syntax: str.replace(searchValue, replaceValue)
*/
console.log("apple".replace("a", "A")); // Output: "Apple"
console.log("apple apple".replace(/a/g, "A")); // Output: "Apple Apple"


/*
🔹 16. replaceAll(searchValue, replaceValue)
- ✅ Replaces all occurrences.
- Syntax: str.replaceAll(searchValue, replaceValue)
*/
console.log("apple apple".replaceAll("a", "A")); // Output: "Apple Apple"


/*
🔹 17. search(regex)
- ✅ Returns index of match or -1.
- Syntax: str.search(regex)
*/
console.log("abc123".search(/\d/)); // Output: 3


/*
🔹 18. slice(start, end)
- ✅ Extracts part of string (does not modify original).
- Syntax: str.slice(start, end)
*/
console.log("JavaScript".slice(0, 4)); // Output: "Java"


/*
🔹 19. split(separator, limit)
- ✅ Splits string into array by separator.
- Syntax: str.split(separator, limit?)
*/
console.log("a,b,c".split(",")); // Output: ["a", "b", "c"]


/*
🔹 20. startsWith(searchString, position)
- ✅ Checks if string starts with substring.
- Syntax: str.startsWith(searchString, position?)
*/
console.log("JavaScript".startsWith("Java")); // Output: true


/*
🔹 21. substring(start, end)
- ✅ Extracts part of string (similar to slice).
- Syntax: str.substring(start, end)
*/
console.log("JavaScript".substring(0, 4)); // Output: "Java"


/*
🔹 22. toLowerCase()
- ✅ Converts string to lowercase.
- Syntax: str.toLowerCase()
*/
console.log("HELLO".toLowerCase()); // Output: "hello"


/*
🔹 23. toUpperCase()
- ✅ Converts string to uppercase.
- Syntax: str.toUpperCase()
*/
console.log("hello".toUpperCase()); // Output: "HELLO"

/*
🔹 24. toString()
- ✅ Returns string representation of an object.
- Syntax: obj.toString()
*/
let num = 100;
console.log(num.toString()); // Output: "100"


/*
🔹 25. trim()
- ✅ Removes whitespace from both ends.
- Syntax: str.trim()
*/
console.log("  hello  ".trim()); // Output: "hello"


/*
🔹 26. trimStart() / trimLeft()
- ✅ Removes whitespace from start.
- Syntax: str.trimStart() or str.trimLeft()
*/
console.log("  hello".trimStart()); // Output: "hello"


/*
🔹 27. trimEnd() / trimRight()
- ✅ Removes whitespace from end.
- Syntax: str.trimEnd() or str.trimRight()
*/
console.log("hello  ".trimEnd()); // Output: "hello"


/*
🔹 28. valueOf()
- ✅ Returns the primitive value of string object.
- Syntax: str.valueOf()
*/
let strObj = new String("Hello");
console.log(strObj.valueOf()); // Output: "Hello"


// ============================================================
// ✅ Summary Table
// ============================================================

/*
| Method           | Purpose                               | Returns            |
|------------------|----------------------------------------|---------------------|
| charAt()         | Char at index                          | string              |
| charCodeAt()     | Unicode of char at index               | number              |
| codePointAt()    | Full Unicode (incl. emojis)            | number              |
| concat()         | Joins strings                          | new string          |
| endsWith()       | Ends with substring?                   | boolean             |
| includes()       | Contains substring?                    | boolean             |
| indexOf()        | First occurrence index                 | number              |
| lastIndexOf()    | Last occurrence index                  | number              |
| localeCompare()  | Locale string comparison               | -1 / 0 / 1          |
| match()          | Match substrings (regex)               | array / null        |
| matchAll()       | All regex matches (iterator)           | iterator of arrays  |
| padStart()       | Add chars at start                     | new string          |
| padEnd()         | Add chars at end                       | new string          |
| repeat()         | Repeat string                          | new string          |
| replace()        | Replace substring                      | new string          |
| replaceAll()     | Replace all matches                    | new string          |
| search()         | Search with regex                      | index / -1          |
| slice()          | Substring extract                      | new string          |
| split()          | Split by delimiter                     | array of strings    |
| startsWith()     | Starts with substring?                 | boolean             |
| substring()      | Extract part of string                 | new string          |
| toLowerCase()    | Lowercase string                       | new string          |
| toUpperCase()    | Uppercase string                       | new string          |
| toString()       | Convert to string                      | string              |
| trim()           | Trim both ends                         | new string          |
| trimStart()      | Trim start only                        | new string          |
| trimEnd()        | Trim end only                          | new string          |
| valueOf()        | Primitive string value                 | string              |
*/


//! Array
//! array-methods.js
// ============================================
// 🔹 Array.isArray()
// ✅ Checks if a value is an array.
// ============================================
Array.isArray([1, 2, 3]);        // true
Array.isArray('hello');         // false


// ============================================
// 🔹 at(index)
// ✅ Returns the element at the specified index.
// ✅ Supports negative indexes (from end).
// ============================================
let arr1 = [10, 20, 30, 40];
console.log(arr1.at(2));        // 30
console.log(arr1.at(-1));       // 40


// ============================================
// 🔹 push(...items)
// ✅ Adds elements to the end of the array.
// ✅ Returns new length of the array.
// ============================================
let arr2 = [1, 2];
arr2.push(3, 4);                // [1, 2, 3, 4]


// ============================================
// 🔹 pop()
// ✅ Removes the last element and returns it.
// ============================================
let arr3 = [5, 6, 7];
let last = arr3.pop();          // 7, arr3 becomes [5, 6]


// ============================================
// 🔹 unshift(...items)
// ✅ Adds elements at the start of the array.
// ✅ Returns new length of the array.
// ============================================
let arr4 = [2, 3];
arr4.unshift(0, 1);             // [0, 1, 2, 3]


// ============================================
// 🔹 shift()
// ✅ Removes the first element and returns it.
// ============================================
let arr5 = [10, 20, 30];
let first1 = arr5.shift();       // 10, arr5 becomes [20, 30]

// ============================================
// 🔹 slice(start, end)
// ✅ Returns a shallow copy of selected elements.
// ✅ `end` is not included.
// ✅ Original array is not modified.
// ============================================

let arr6 = [0, 1, 2, 3, 4];
let sliced = arr6.slice(1, 4);  // [1, 2, 3]

// ============================================
// 🔹 splice(start, deleteCount, ...items)
// ✅ Changes array by removing/replacing/adding elements.
// ✅ Modifies original array and returns removed elements.
// ============================================

let arr7 = [1, 2, 3, 4];
arr7.splice(1, 2, 'a', 'b');    // returns [2, 3], arr7 = [1, 'a', 'b', 4]

// ============================================
// 🔹 indexOf(item)
// ✅ Returns the index of the first match.
// ✅ Returns -1 if not found.
// ============================================

[1, 2, 3].indexOf(2);           // 1
[1, 2, 3].indexOf(4);           // -1

// ============================================
// 🔹 includes(item)
// ✅ Checks if the array contains the item.
// ✅ Returns true/false.
// ============================================

[1, 2, 3].includes(2);          // true
[1, 2, 3].includes(4);          // false

// ============================================
// 🔹 reverse()
// ✅ Reverses the array in place.
// ✅ Modifies original array.
// ============================================
let arr8 = [1, 2, 3];
arr8.reverse();                 // [3, 2, 1]


// ============================================
// 🔹 sort([compareFn])
// ✅ Sorts array items (as strings by default).
// ✅ Optional compareFn for numeric/custom sort.
// ✅ Modifies original array.
// ============================================
[4, 1, 10].sort();              // [1, 10, 4] — lexicographic
[4, 1, 10].sort((a, b) => a - b); // [1, 4, 10]


// ============================================
// 🔹 concat(...arrays)
// ✅ Merges multiple arrays into a new array.
// ✅ Does not modify original arrays.
// ============================================
[1, 2].concat([3, 4]);          // [1, 2, 3, 4]


// ============================================
// 🔹 join(separator)
// ✅ Joins all elements into a string.
// ✅ Default separator is comma.
// ============================================
[1, 2, 3].join();               // "1,2,3"
[1, 2, 3].join('-');            // "1-2-3"


// ============================================
// 🔹 map(callback)
// ✅ Creates a new array by transforming each item.
// ✅ Does not modify original array.
// ============================================
[1, 2, 3].map(x => x * 2);      // [2, 4, 6]


// ============================================
// 🔹 filter(callback)
// ✅ Creates a new array with elements that pass a test.
// ✅ Does not modify original array.
// ============================================
[1, 2, 3, 4].filter(x => x % 2 === 0); // [2, 4]


// ============================================
// 🔹 reduce(callback, initialValue)
// ✅ Reduces array to a single value by applying a function.
// ============================================
[1, 2, 3, 4].reduce((acc, cur) => acc + cur, 0); // 10


// ============================================
// 🔹 forEach(callback)
// ✅ Executes a function for each array element.
// ✅ Returns undefined (cannot chain).
// ============================================
[1, 2, 3].forEach((num, i) => {
  console.log(i, num);
});
// 0 1
// 1 2
// 2 3


// ============================================
// 🔹 find(callback)
// ✅ Returns the first element that passes a test.
// ✅ Returns undefined if none found.
// ============================================

[5, 10, 15].find(x => x > 8);   // 10

// ============================================
// 🔹 findIndex(callback)
// ✅ Returns the index of the first element that passes a test.
// ✅ Returns -1 if none found.
// ============================================

[5, 10, 15].findIndex(x => x > 8); // 1

// ============================================
// 🔹 flat(depth)
// ✅ Flattens nested arrays to a given depth.
// ✅ Default depth is 1.
// ============================================

[1, [2, [3, [4]]]].flat();      // [1, 2, [3, [4]]]
[1, [2, [3, [4]]]].flat(2);     // [1, 2, 3, [4]]

// ============================================
// 🔹 fill(value, start?, end?)
// ✅ Fills part of the array with a static value.
// ✅ Modifies original array.
// ============================================

let arr9 = [1, 2, 3, 4];
arr9.fill(0, 1, 3);             // [1, 0, 0, 4]

// ============================================
// 🔹 every(callback)
// ✅ Returns true if all elements pass a test.
// ============================================

[2, 4, 6].every(x => x % 2 === 0);  // true

// ============================================
// 🔹 some(callback)
// ✅ Returns true if at least one element passes a test.
// ============================================

[1, 3, 5, 6].some(x => x % 2 === 0); // true



// ✅ JavaScript Array Methods Summary Table (Compact Format)

// | #  | Method               | Description                                         | Modifies? | Returns               |
// |----|----------------------|-----------------------------------------------------|-----------|------------------------|
// | 1  | Array.isArray()      | Checks if value is an array                         | ❌        | Boolean                |
// | 2  | at(index)            | Gets element by index (supports negatives)          | ❌        | Element                |
// | 3  | push(...items)       | Adds item(s) to end                                 | ✅        | New length             |
// | 4  | pop()                | Removes last item                                   | ✅        | Removed element        |
// | 5  | unshift(...items)    | Adds item(s) to start                               | ✅        | New length             |
// | 6  | shift()              | Removes first item                                  | ✅        | Removed element        |
// | 7  | slice(start, end)    | Returns portion (shallow copy)                      | ❌        | New array              |
// | 8  | splice(start, del)   | Adds/removes items                                  | ✅        | Removed items          |
// | 9  | indexOf(item)        | First index of item                                 | ❌        | Index / -1             |
// | 10 | includes(item)       | Checks if item exists                               | ❌        | Boolean                |
// | 11 | reverse()            | Reverses array in place                             | ✅        | Reversed array         |
// | 12 | sort(compareFn)      | Sorts items (default is string order)               | ✅        | Sorted array           |
// | 13 | concat(...arrays)    | Merges arrays                                       | ❌        | New array              |
// | 14 | join(separator)      | Joins elements to string                            | ❌        | String                 |
// | 15 | map(callback)        | Transforms each element                             | ❌        | New array              |
// | 16 | filter(callback)     | Filters items that match condition                  | ❌        | New array              |
// | 17 | reduce(callback)     | Reduces to a single value                           | ❌        | Accumulated value      |
// | 18 | forEach(callback)    | Loops through array (no return)                     | ❌        | undefined              |
// | 19 | find(callback)       | Returns first item matching condition               | ❌        | Element / undefined    |
// | 20 | findIndex(callback)  | Index of first match                                | ❌        | Index / -1             |
// | 21 | flat(depth)          | Flattens nested arrays                              | ❌        | New array              |
// | 22 | fill(value)          | Fills array with static value                       | ✅        | Modified array         |
// | 23 | every(callback)      | Checks if all items pass test                       | ❌        | Boolean                |
// | 24 | some(callback)       | Checks if any item passes test                      | ❌        | Boolean                |


//! Object
//! objects.js

// ===========================================================
// 🔹 JavaScript Object – Summary Notes
// ===========================================================

/*
🔸 What is an Object?
- An object is a collection of key-value pairs.
- Keys are always strings (or symbols), values can be anything.
- Used to store and group related data and behavior (functions/methods).

🔸 Object Syntax:
  const obj = {
    key1: value1,
    key2: value2,
    method() {
    //   function inside object
    }
  };

🔸 Why Use Objects?
✅ To represent real-world entities (person, car, book, etc.).
✅ To group multiple values in one variable.
✅ To organize code with methods (functions inside objects).

🔸 Key Terms:
- Property: A key-value pair in the object.
- Method: A property with a function value.
- Dot Notation: obj.key
- Bracket Notation: obj['key'] (useful when key is dynamic or has spaces)

🔸 Mutability:
- Objects are mutable — values can be added, changed, or deleted.
- Assigned by reference, not by value.

🔸 Property Access:
- Dot notation: obj.name
- Bracket notation: obj["name"]
- Optional chaining: obj?.name

🔸 Looping:
- for...in: loops over enumerable keys
- Object.keys/values/entries + forEach/map for arrays

*/

// ===========================================================
// 🔹 Common Built-In Object Methods (Top 20)
// ===========================================================

/*
1️⃣ Object.keys(obj)
- Returns array of all own property names (keys).
  👉 Example:
    const obj = {a: 1, b: 2};
    console.log(Object.keys(obj)); // ['a', 'b']

2️⃣ Object.values(obj)
- Returns array of all own property values.
  👉 console.log(Object.values(obj)); // [1, 2]

3️⃣ Object.entries(obj)
- Returns array of [key, value] pairs.
  👉 console.log(Object.entries(obj)); // [['a', 1], ['b', 2]]

4️⃣ Object.fromEntries(arr)
- Converts [key, value] pairs back to object.
  👉 console.log(Object.fromEntries([['a', 1]])); // {a: 1}

5️⃣ Object.assign(target, ...sources)
- Copies properties into target object.
  👉 Object.assign(obj1, obj2);

6️⃣ Object.hasOwn(obj, key) ✅ ES2022
- Checks if a key is an own property.
  👉 Object.hasOwn(obj, 'a'); // true

7️⃣ obj.hasOwnProperty(key)
- Older method to check own properties.
  👉 obj.hasOwnProperty('a'); // true

8️⃣ obj.propertyIsEnumerable(key)
- Checks if a property is enumerable.
  👉 obj.propertyIsEnumerable('a');

9️⃣ Object.freeze(obj)
- Makes object immutable (no changes allowed).
  👉 Object.freeze(obj);

🔟 Object.seal(obj)
- Prevents adding/removing properties (but can edit values).
  👉 Object.seal(obj);

1️⃣1️⃣ Object.isFrozen(obj)
- Checks if object is frozen.
  👉 Object.isFrozen(obj); // true

1️⃣2️⃣ Object.isSealed(obj)
- Checks if object is sealed.
  👉 Object.isSealed(obj); // true

1️⃣3️⃣ Object.defineProperty(obj, key, descriptor)
- Adds/modifies a property with descriptors like writable, enumerable.
  👉 Object.defineProperty(obj, 'x', { value: 10 });

1️⃣4️⃣ Object.getOwnPropertyNames(obj)
- Returns all property names (even non-enumerable).
  👉 Object.getOwnPropertyNames(obj);

1️⃣5️⃣ Object.getPrototypeOf(obj)
- Returns prototype of the object.
  👉 Object.getPrototypeOf(obj);

1️⃣6️⃣ Object.setPrototypeOf(obj, proto)
- Sets new prototype to an object.
  👉 Object.setPrototypeOf(obj, {});

1️⃣7️⃣ Object.is(a, b)
- Like === but better for NaN and +0/-0.
  👉 Object.is(NaN, NaN); // true

1️⃣8️⃣ obj.toString()
- Returns string representation of object.
  👉 obj.toString(); // "[object Object]"

1️⃣9️⃣ obj.valueOf()
- Returns primitive representation (default: same object).
  👉 obj.valueOf(); // obj

2️⃣0️⃣ JSON.stringify(obj)
- Converts object to JSON string.
  👉 JSON.stringify({a:1}); // '{"a":1}'
*/

// ===========================================================
// 🔸 Object Example
// ===========================================================

const person = {
    name: "Alice",
    age: 25,
    greet() {
      return `Hello, I'm ${this.name}`;
    }
  };
  
  console.log(person.name);         // Alice
  console.log(person['age']);       // 25
  console.log(person.greet());      // Hello, I'm Alice
  console.log(Object.keys(person)); // ['name', 'age', 'greet']
  console.log(Object.values(person)); // ['Alice', 25, ƒ]


// ✅ Summary Table
// | #  | Method                  | Description                           | Mutates? | Returns             |
// | -- | ----------------------- | ------------------------------------- | -------- | ------------------- |
// | 1  | Object.keys(obj)        | Get array of keys                     | ❌        | Array of strings    |
// | 2  | Object.values(obj)      | Get array of values                   | ❌        | Array of values     |
// | 3  | Object.entries(obj)     | Get array of \[key, value] pairs      | ❌        | Array of arrays     |
// | 4  | Object.fromEntries(arr) | Convert \[key, value] array to object | ❌        | New object          |
// | 5  | Object.assign()         | Copy properties to target             | ✅        | Modified target     |
// | 6  | Object.hasOwn(obj, key) | Check if own property                 | ❌        | Boolean             |
// | 7  | hasOwnProperty(key)     | Check if own property                 | ❌        | Boolean             |
// | 8  | propertyIsEnumerable()  | Is property enumerable                | ❌        | Boolean             |
// | 9  | Object.freeze()         | Freeze object (no changes allowed)    | ✅        | Frozen object       |
// | 10 | Object.seal()           | Lock object structure                 | ✅        | Sealed object       |
// | 11 | Object.isFrozen()       | Check if frozen                       | ❌        | Boolean             |
// | 12 | Object.isSealed()       | Check if sealed                       | ❌        | Boolean             |
// | 13 | defineProperty()        | Add/modify property with descriptor   | ✅        | Modified object     |
// | 14 | getOwnPropertyNames()   | Get all properties (including hidden) | ❌        | Array of names      |
// | 15 | getPrototypeOf()        | Get object's prototype                | ❌        | Prototype object    |
// | 16 | setPrototypeOf()        | Set object's prototype                | ✅        | Modified object     |
// | 17 | Object.is()             | Compare two values (better than ===)  | ❌        | Boolean             |
// | 18 | toString()              | Convert object to string              | ❌        | String              |
// | 19 | valueOf()               | Get primitive representation          | ❌        | Primitive or object |
// | 20 | JSON.stringify()        | Convert object to JSON string         | ❌        | String              |

  


//! ================ DOM ===========================
// DOM is a tree-like structure that represents the contents of an HTML 
// DOM provides function that allow to add, remove and modify parts of the document.

//! dom-methods.js

// ============================================
// 🔹 DOM Element Selection Methods
// ============================================

// ✅ document.getElementById(id)
// - Returns the first element with the matching ID.
// - Returns a single element or null.
const el = document.getElementById('header'); // <div id="header"></div>

// ✅ document.getElementsByName(name)
// - Returns a NodeList of elements with the matching `name` attribute.
// - Mostly used with form inputs.
const inputs = document.getElementsByName('username'); // [input name="username", …]

// ✅ document.getElementsByTagName(tag)
// - Returns an HTMLCollection of all elements with the given tag.
// - Live collection: auto-updates if DOM changes.
const divs = document.getElementsByTagName('div'); // HTMLCollection

// ✅ document.getElementsByClassName(class)
// - Returns a live HTMLCollection of all elements with the class name.
// - Can be called on document or specific element.
const boxes = document.getElementsByClassName('box'); // HTMLCollection

// ✅ document.querySelector(selector)
// - Returns the first element that matches the CSS selector.
// - More flexible (ID, class, tag, attribute, etc.)
const firstBtn = document.querySelector('.btn'); // e.g. <button class="btn">

// ✅ document.querySelectorAll(selector)
// - Returns a static NodeList of all elements matching the selector.
// - You can use forEach on NodeList.
const allBtns = document.querySelectorAll('.btn'); // NodeList

// ============================================
// 🔸 DOM Traversal Methods
// ============================================

// ✅ element.parentNode
// - Returns the parent of the specified node.
const parent = el.parentNode;

// ✅ element.firstChild
// - Returns the first child node (could be text, comment, or element).
const first = el.firstChild;

// ✅ element.nextSibling
// - Returns the next sibling node (any type).
const next = el.nextSibling;

// ✅ element.previousSibling
// - Returns the previous sibling node.
const prev = el.previousSibling;

// ============================================
// 🟡 DOM Manipulation Methods
// ============================================

// ✅ document.createElement(tagName)
// - Creates a new HTML element (not in DOM yet).
const newDiv = document.createElement('div');

// ✅ parent.appendChild(child)
// - Appends a node as the last child of a parent node.
parent.appendChild(newDiv);

// ✅ parent.append(...nodes or text)
// - Appends multiple nodes or text at once (newer & more flexible).
parent.append('Hello', newDiv);

// ✅ parent.insertBefore(newNode, existingNode)
// - Inserts a new node before the given reference node.
parent.insertBefore(newDiv, existingChild);

// ✅ parent.replaceChild(newNode, oldNode)
// - Replaces a child node with another node.
parent.replaceChild(newDiv, oldDiv);

// ✅ parent.removeChild(child)
// - Removes a child node from the DOM.
parent.removeChild(newDiv);

// ✅ element.cloneNode(deep)
// - Clones a node. Use `true` for deep clone (including children).
const cloned = el.cloneNode(true);

// ✅ element.innerHTML
// - Gets/sets HTML content (including tags).
el.innerHTML = '<span>Hi</span>';

// ✅ element.textContent
// - Gets/sets only plain text content (ignores HTML tags).
el.textContent = 'Hello World';

// ============================================
// ✅ Summary Table
// ============================================

/*
| Method                     | Returns             | Live? | Type      | Use Case                                |
|---------------------------|---------------------|-------|-----------|------------------------------------------|
| getElementById()          | Single Element      | No    | Element   | Select by ID                             |
| getElementsByName()       | NodeList            | No    | NodeList  | Select by name attribute (forms)         |
| getElementsByTagName()    | HTMLCollection      | Yes   | Collection| Select by tag name                       |
| getElementsByClassName()  | HTMLCollection      | Yes   | Collection| Select by class                          |
| querySelector()           | Single Element      | No    | Element   | First match using CSS selector           |
| querySelectorAll()        | NodeList            | No    | NodeList  | All matches using CSS selector           |
| parentNode                | Parent Node         | N/A   | Node      | Traverse upward                          |
| firstChild / nextSibling  | Node                | N/A   | Node      | Traverse sideways or down                |
| createElement()           | Element             | N/A   | Element   | Create element dynamically               |
| appendChild()             | Element             | N/A   | Element   | Append one node                          |
| append()                  | undefined           | N/A   | N/A       | Append multiple items (text/nodes)       |
| insertBefore()            | Element             | N/A   | Element   | Insert before a specific node            |
| replaceChild()            | Element             | N/A   | Element   | Replace a child                          |
| removeChild()             | Element             | N/A   | Element   | Remove a child                           |
| cloneNode(deep)           | Element             | N/A   | Element   | Clone element (optionally with children) |
| innerHTML                 | String              | N/A   | HTML      | Read/write HTML                          |
| textContent               | String              | N/A   | Text      | Read/write plain text                    |
*/

// | Feature             | `textContent` | `innerHTML`              |
// | ------------------- | ------------- | ------------------------ |
// | Returns             | Only text     | Text + HTML tags         |
// | Renders HTML        | ❌ No          | ✅ Yes                    |
// | Safer for injection | ✅ Yes         | ❌ No (vulnerable to XSS) |
// | Use case            | Just text     | Need HTML formatting     |





             