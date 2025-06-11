//! https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick
//! https://docs.libuv.org/en/v1.x/design.html

//? event-loop ==> it is a semi-infinite running loop that handle all the pending callbacks,
//? promises,timeout, i/o operations(file reading,database conection etc..) and push it to the callstack for its executionAsyncId.

//? why semi-infinite - because it waits at pool phase when it is idle

//* Event loop phase
//! 1) timer phase ==> setTieout() and setInternval() will get executed
//! 2) pending callback phase ==> pending i/o callbacks will get executed
//! 3) idle,prepare ==> which nodejs use for its internal working
//! 4) polling ==> i/o operation --> file reading,database connection ,etc
//! 5) check phase ==> setImmediate() will get executed
//! 6) close callbacks ==> close callbacks will get executed

//? promises and nextTick() will be executed before each phase
//? when event loop is idle it wait at poll phase
//? One cycle of event loop is known as TICK

//* event-loop in browser and event-loop in node both are different

//! order ==> sync statements , nexTick() => promises 

//! ============================

// console.log("Start")
// setTimeout(()=>{ // setTimeout will execute in second cycle of timer phase
//     console.log("Inside setTImeout")
// })
// process.nextTick(()=>{
//     console.log("Inside nextTick");
// })
// console.log("middle")
// console.log("end")

//! ============================

// console.log("Start")
// setTimeout(()=>{ // setTimeout will execute in second cycle of timer phase
//     console.log("Inside setTImeout 1")
// })
// let promises = new Promise((resolve,reject)=>{
//     resolve("inside promise")
// },4000)
// promises.then(()=>{
//     console.log("promise handled")
// })
// process.nextTick(()=>{
//         console.log("Inside nextTick");
// })

// console.log("middle")
// console.log("end")

//! ============================
//TODO
// console.log("Start")
// setTimeout(()=>{ // setTimeout will execute in second cycle of timer phase
//     console.log("Inside setTImeout 1")
// })
// let promises = new Promise((resolve,reject)=>{
//     resolve("inside promise")
// },4000)
// promises.then(()=>{
//     console.log("promise handled")
// })
// process.nextTick(()=>{
//         console.log("Inside nextTick");
// })

// let api = fetch("https://jsonplaceholder.typicode.com/todos");
// api.then(()=>{
//     console.log("promise 2");
// })
// console.log("middle")
// console.log("end")

//! ============================


// setTimeout(()=>{ // setTimeout will execute in second cycle of timer phase
//     console.log("Inside setTImeout 1")
// },4000)
// setImmediate(()=>{
//     console.log("inside setImmediate");
// })
// let promises = new Promise((resolve,reject)=>{
//     resolve("inside promise")
// },4000)
// promises.then(()=>{
//     console.log("promise handled")
// })
// process.nextTick(()=>{
//         console.log("Inside nextTick");
// })

/*
// let api = fetch("https://jsonplaceholder.typicode.com/todos");
// api.then(()=>{
//     console.log("promise 2");
// })
*/
//! ============================

// todo add from sir code
////* nested
// process.nextTick(()=>{
//     process.nextTick(()=>{
//         console.log(1);
//     })
// })

// process.nextTick(()=>{
//     console.log(2);
// })
// process.nextTick(()=>{
//     console.log(3);
// })
// process.nextTick(()=>{
//     console.log(4);
// })

//!===========
//* these two order non-deterministic
console.log("first")
setImmediate(()=>{
    console.log("immediate")
})

setTimeout(()=>{
    console.log("timeout")
},0)