//! 1) Example -Output
//--------------------------
const fs = require("fs")
const a = 100;
setImmediate(()=>{console.log("SetImmediate")});

fs.readFile("./file.txt","utf-8",()=>{

        console.log("File Reading CB")
    })

setTimeout(()=>{console.log("Timer expired")},0);

function printA(){
    console.log("a",a);
}

printA();
console.log("Last line of the file")
//--------------------------
/**
 1) a
 2) Last line of the file
 3) Timer expired
 4) File Reading CB
 5) SetImmediate

 */


//! 2) Example - Output
//--------------------------
// const fs = require("fs")
// const a = 100;
// setImmediate(()=>{console.log("SetImmediate")});

// Promise.resolve("Promise").then(()=> console.log("Promise"));

// fs.readFile("./file.txt","utf-8",()=>{

//         console.log("File Reading CB")
//     })

// setTimeout(()=>{console.log("Timer expired")},0);

// process.nextTick(()=> console.log("nextTick"));

// function printA(){
//     console.log("a",a);
// }

// printA();
// console.log("Last line of the file")
//--------------------------
/*
 1) a
 2) Last line of the file
 3) nextTick
 4) Promise
 5) Timer expired
 6) File Reading CB
 7) setImmediate
 */

//! 3) Example - Output
//--------------------------
// const fs = require("fs")
// setImmediate(()=>{console.log("setImmediate")});

// setTimeout(()=>{console.log("Timer expired")},0);

// Promise.resolve("Promise").then(()=> console.log("Promise"));

// fs.readFile("./file.txt","utf-8",()=>{
//     setTimeout(()=>{console.log("2nd Timer")},0);

//     process.nextTick(()=> console.log("2nd nextTick"));

//     setImmediate(()=> console.log("2nd setImmediate"));

//     console.log("File Reading CB")
// })

// process.nextTick(()=> console.log("nextTick"));

// console.log("Last line of the file");
//----------------------------
/*
1) Last line of the file
2) nextTick
3) Promise
4) Timer expired
5) setImmediate

6) File Reading CB
7) 2nd nextTick
8) 2nd setImmediate
9) 2nd Timer
10)
*/

//! 4) Example - Output
//----------------------------
// const fs = require("fs");
// setImmediate(()=>{console.log("setImmediate")});

// setTimeout(()=>{console.log("Timer expired")},0)

// Promise.resolve("Promise").then(()=>{console.log("Promise")});

// fs.readFile("./file.txt","utf-8",()=>{
//     console.log("File Reading CB")
// });

// process.nextTick(()=>{
//     process.nextTick(()=>{
//         console.log("inner nextTick");
//     })
//     console.log("nextTick");
// })

// console.log("last line of the file")
//----------------------------
/*
1) last line of the file
2) nextTick
3) inner nextTick
4) Promise
5) Timer expired
6) File Reading CB
7) setImmediate
*/