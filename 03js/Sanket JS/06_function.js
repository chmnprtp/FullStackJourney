//! 

/**
 * In software development, a lot of times we have to resure our logic.
 * 
 * DRY - don't repeat yourself
 * 
 * if we repeat our common code implementation then (may be coping) there will be issue.
 *   - lot of code duplication.
 *   - we have to maintain code at multiple places.
 *   - we need  to debug the same logic at multiple places.
 *   - if modification is required we have to do it at multiple places.
 *
 *  In js we can make our function & apart from those we have a lot of inbuit function
 *  as well
 * 
 *  keyword
 *  function nameOfFunction(Parameter){
 *  .......
 *  }
 *  nameOfFunction(arguments); 
 * 
 * ? arguments are actual value that you prrovide as input to the func while calling the func
 * ? parameter is the placeholder variable that we mention during function definition. this has no value untill we call a funciton and pass arguments.
 *  function isEvenOdd(x){ //parameter
 *      ...
 *  }
 *  isEvenOdd(5) //arguments
 */

// defining our function - definition
/*
function greeting(){
    console.log("My logic line 1");
    console.log("My logic line 2");
}
greeting(); // calling a function
*/
        //object.function
// console.log(Math.sqrt(100)); // 10


//-------------------------
// argument and parameter
// function isEvenOdd(x){
//     if(x%2==0){
//         console.log('even');
//     }
//     else{
//         console.log("odd"); //odd
//     }
// }
// isEvenOdd(); //odd
//-------------------------

//-------------------------
// multiple value 
// function multiply(a,b){
//     console.log(a*b);
// }
// multiply(10,2); // 20
//-------------------------

//-------------------------
// if we donot pass any argument
// function multiply(a,b){
//     console.log(a); // 20
//     console.log(b); // undefined
// }
// multiply(10); 
//-------------------------

//? How is printing a value diff. than giving an output
//-> 1) when you print a value you cannot use it for some operation.
// to generate output in js function we can use return keyword
// the moment you hit return the function stops the execution

//-------------------------
// function isEvenOdd(x){
//     if(x%2==0){
//         return "even";
//     }else{
//         return "odd";
//     }
// }
// const result = isEvenOdd(10);
// console.log(result); //even

// the moment we hit return statement fun ext immediately stops
//-------------------------

/**
 * There are 3 main storage areas in a process
 * 1) callstack - linear memory storage
 * 2) kernel stack
 * 3) Heap memory - big pool of memory - objects are created in heap runtime
 * 
 *  In single core - computer can only run only one process (context switching)
 * 
 *  at any point of time in your code if you call a fn a new entry will be added in 
 *  callstack:
 * 
 *  The moment you hit return it removes the entry from callstack
 * 
 *  every entry that is created inside a callstack by the function call is called stack frame
 * 
 * ! if we donot return anythng manually from the function then js will automatically 
 * ! return undefined
 */

//-------------------------
// function abc(){
//     console.log("first")
// }
// const ans = abc();
// console.log(ans); //undeefined
// console.log(abc()) //undeefined'
//-------------------------


//-------------------------
//Default parameter
// function add(x,y=5){
//     return x+y;
// }
// console.log(add(10,20)); // 30
//-------------------------

//-------------------------
// function add(x,y=5){
//     return x+y;
// }
// console.log(add(10)); // 15
//
//* In  functions we can define default parameter value , if we donot manually paas
//* anything to the parameter it automatically pick the default value or if we pass
//* something then it will take the passed value.
//-------------------------

//-------------------------
// function add(x,y=5,z){
//     return x+y;
// }
// console.log(add(10,20)); // 30
//
//-------------------------

//-------------------------
//* receive any number of parameter
// function fun(...values){ // ...values represents rest parameters
//     console.log(values); // [ 10, 24, 2, 3, 5 ]
// }
// fun(10,24,2,3,5);
//
//-------------------------

//* In javascript there are lot of internal inbuilt funciton
//?Math - object 
// console.log(Math) // Object [Math] {}
// console.log(Math.abs(5)); // 5
// console.log(Math.abs(-5)) // 5

// console.log(Math.floor(8.7)); // 8
// console.log(Math.ceil(8.7));  // 9
// console.log(Math.round(8.6))  // 9
// console.log(Math.round(8.4))  // 8

// console.log(Math.min(1,-5,3,7,8,3,-8,)) // -8
// console.log(Math.max(3,8,-8,3,7,83))    // 83

// console.log(Math.sqrt(100)) // 10
// console.log(Math.sqrt(90))  // 9.486....

// console.log(Math.random()) // this function generates a random number between 0 and 1


//! console.log()
// console.log(10,"chaman",true) // 10 chaman true
// console.log(10,"chaman",true, false, undefined,null); // 10 chaman true false undefined null

// console.log("value of this is",10); // value of this is 10

//* Console.log is not a part of official spec of js.

//! Date()
//  const date = new Date();
//  console.log(date); //2025-05-30T21:10:35.000Z

//  date.getDate()
//  date.getDay()
//  date.getFullYear()
//  date.getMonth();
//  date.getTime()
//  date.getHours();
//  date.getMilliseconds();
//  date.getMinutes();
 
 //* In js functions are first class citizen
 //* in js function can be returned from a function and function can be paased as an
 //* argument to another function
// function someFunction(){
//     return function x(){
//         return 10;
//     }
// }
//----------------------------
function anotherFunction(f1){
    f1();
    console.log("Called f1");
}
function hello(){
    console.log("helllo")
}
// anotherFunction(hello)
anotherFunction(hello()) // equals to --> let x = hello() anotherFunction(x); -->// f1 is not a function
//----------------------------