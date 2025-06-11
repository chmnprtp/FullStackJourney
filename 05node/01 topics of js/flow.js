// console.log("start");
// for(let i= 0 ; i<9; i++){
//     console.log(i);
// }
// //! synchronous or blocking operation
// console.log("middle");
// console.log("end");

//! setTimeout - to suspend the execution of the callback
// console.log("start");
// setTimeout(() => {
//   // move to webapi then callback queue then callstack
//   console.log("inside setTimeout");
// }, 5000); // time taken to execute the callstack \\ minimun time that callback have to wait to get execute
// console.log("middle");
// console.log("end");
// // event loops check whether callstack is empty or not to push callback queue and microtask queue task to callstack
// // microtask queue - stores promises


//! setTimeout is high order funtion
// console.log("start");
// setTimeout(() => {
//   for (let i = 0; i < 9; i++) {
//     console.log(i);
//   }
// }, 5000);
// console.log("middle");
// console.log("end");


//! promise - is an object which represents eventual completion of an asynchronous operation, promises are handled using then and catch block and async await
//? then() -> it is useed for completing the operatioln
//? catch() -> it is used for error handling and promise rejection
//? then and catch accepts callback
//? then catch chaining
//! fetch - always return promise
//! callback
    //  let data = fetch("http://ad.com")
    //  console.log(data); // return promise

//! async await => they are always used together , async is used in funtion declaration, await will be used inside function body,
//! async function always return promise
    async function APICall(){
        let data = await fetch("http://ajdfa.com")
        let jsonData = await data.json(); //use await where-ever we are getting a promise
        console.log(jsonData);
    }
    APICall();


//! asyn with promise
    // setTimeout(()=>{
    //     console.log("1")
    // },1000)

    // let data = await fetch("http://akdf.com");

    // data.then((value)=>{
    //     console.log("2"); // promise has high priority than setTimeout
    // })

    // console.log("3")
    // setTimeout(()=>{
    //     console.log("4")
    // },1000)
    // console.log("5")
    // console.log("6")
    // // Output -  3 5 6 2 4 1

//! 