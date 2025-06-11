//!Array are special object in js, that can store 1 or more than 1 value of different
//! types together
// In memory, array are created in the form of 1D space- continuous memory.
// Array are heterogenous - different types
// internally indexes becoms keys and value is value .
//* array is not keyword

//---------------------------
// const arr1 = [];
// const arr2 = [1,"fa",true,-5];
// console.log(arr1,arr2); //[] [ 1, 'fa', true, -5 ]

// console.log(arr2[3]); // access element at an index // -5
// arr2[3] = 100;  // we can update it also 
// console.log(arr2); //[ 1, 'fa', true, 100 ]

// console.log(arr2[8]); // undefined

// arr2[10] = "js";
// console.log(arr2); // [ 1, 'fa', true, 100, <6 empty items>, 'js' ]

//---------------------------

//* other way to create array
// let arr3 = new Array(10,20,30); 
// console.log(arr3); // [ 10, 20, 30 ]

// let arr4 = new Array(3);
// console.log((arr4)); // [ <3 empty items> ]

// let arr5 = new Array(4).fill(-1);
// console.log(arr5) // [ -1, -1, -1, -1 ]

//---------------------------

//! Array function

let arr = [1,5,3,6,3];
console.log(arr.length) //5 // length is not a function it is a property/key

arr.push(10);
console.log(arr); // [ 1, 5, 3, 6, 3, 10 ]

arr.pop();
console.log(arr); // [ 1, 5, 3, 6, 3 ]

arr.shift(); // remove element from the start
console.log(arr); // [ 5, 3, 6, 3 ]

arr.unshift(100); // add element from the start
console.log(arr); // [ 100, 5, 3, 6, 3 ]

arr.reverse(); // [ 3, 6, 3, 5, 100 ] // update same array
console.log(arr);

console.log(arr.indexOf(100)) //4 