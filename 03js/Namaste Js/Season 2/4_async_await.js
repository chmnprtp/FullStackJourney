/**
 * what is async? - async is a keyword which is used before a function to create async function.
 * what is await?
 * How async works behind the scene?
 * Examples of using async/await
 * Error Handling
 * Interviews
 * Async await vs Promise.then/.catch
 */

//! what is async? - 
// async is a keyword which is used before a function to create async function.
async function getData(){
    return "Chaman";
}
//? How it is different from normal function
// always returns a promise
// if Fn return Promise - that's fine
// if Fn return non-promise - it wrap that value inside promise and return it.

const dataPromise = getData();
// console.log(dataPromise) // Promise { undefined }

//? How to get actual data from Promise
// dataPromise.then((res)=>console.log(res)); // Chaman
                                           

//? If Fn returned Promise how to handle that
/*
 const p = new Promise((resolve,reject)=>{
    resolve("Promise resolved")
 })

 async function getPromise(){
    return p; // p will return as it is promise
 }

 const promiseData = getPromise();
 promiseData.then((res)=>console.log(res)); // Promise resolved
 */

 //! How to use await with async function to handle Promises?
// async await uses to handle promises

//? before async await how do we used to handle promises?
const p1 = new Promise((resolve,reject)=>{
    resolve("Promise resolved")
 })

function getData1(){
    // p1.then((res)=>console.log(res)); // Promise resolved
}
getData1();


//! what is await?
// await is a keyowrd that can only be used inside async function.
// await is used in front of promise
// it resolve promise

//? How to handle Promise using async await ?
const p2 = new Promise((resolve,reject)=>{
    resolve("Promise resolved usign async await")
 })

 async function getData2(){
    const value = await p2;
    // console.log(value) // Promise resolved usign async await
 }
 getData2();


 //! Deep dive in async/await
/*

 const p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise Resolved ")
    }, 10000);
 })

 //*older way to handle promises
 function getData3(){
    // js will not wait for promise to be resolved
    p3.then((res)=>{console.log(res);})
    console.log("Chaman Pratap"); 
    //? here Chaman Pratap will come immediately but Promse Resolved will come after 10sec0
    // Chaman Pratap
    // Promise Resolved
 }
// getData3();
// console.log("inbetween")

//*new way to handle promises
 async function getData4(){
    console.log("Top of async") // it will printed immediately
    //js engine was waiting for promise to resolved
    const result = await p3;
    console.log("Chaman");
    console.log(result)
    //? here output will come after 10 sec
    // Chaman
    // Promise Resolved 

    const result1 = await p3;
    console.log(result1); // it will resolved with above result promise
 }
 getData4();
 
 */

 //! Deep dive with two promises
 const p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise Resolved 1")
    }, 10000);
 })

 const p4 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise Resolved 2 ")
    }, 5000);
 })

//*new way to handle promises
 async function getData4(){
    console.log("Top of async") // it will printed immediately
    //js engine was waiting for promise to resolved
    const result = await p3; //* sequence matter
    console.log("Chaman");
    console.log(result)
    //? here output will come after 10 sec
    // Chaman
    // Promise Resolved 

    const result1 = await p4;
    console.log(result1); // it will resolved with above result promise
 }
 getData4();

 /**
  * if there are two promise p3 taking 10 sec p4 taking 5
  * if p3 is before p4 ---result will be after 10sec for both
  * if p4 is before p3 ---reault wiil be after 5sec for p3 then after 10sec for p3
  */