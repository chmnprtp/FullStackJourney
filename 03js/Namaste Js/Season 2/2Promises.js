//! Promise ==> are used to handle asyn operation in Js, it is an empty object with 
//!             some data value in it. data value will hold value which api will return.

//! Promise is an Object that represents eventual completion of an async operation.
//! Promise has two properties:
//!    1) PromiseState
//!    2) PromiseResult
//!
//!       There are three Promise State:
//!        1)Pending - initial state
//!        2)Fulfilled
//!        3)Rejected

//!        By default PromiseResult is undefined

//! Why we use Promises?
// 1) avoid callback hell
// 2) clean syntax
// 3) better error handling - with .catch
// 4) chaining - .then() return a new Promise
// 5) works well with async/await 

//! How things work before Promises
api.createOrde(card,()=>{
    api.proceedToPayment()
});
// there is issue in this type of callback- inversion of control
//* here we are passing a function as callback to another function

//! How thing works after Promises
const cart = ["shoes","shirt","paints"];
const promise = createOrder(cart); //createOrder is async operation return promises
// {data:undefined}
// after some time promise object filled data in empty data object
// {data:orderDetails}
promise.then((orderId)=>{ // then is available to every promise object, which take callback
    proceedToPayment(orderId);
}); 
//* here we are attaching a callback function to a promise obejct
//* as soon as we have data inside promise, it will call the proceed function 100% once.


//! How pomise object looks
const GITHUB_API = "https:api.github.com.users/chmnprtp";
const user = fetch(GITHUB_API) // fetch() => api given by browser to make external call // fetch return promise object
console.log(user);
user.then((data)=>{
    console.log(data);
})

//?Promise Object
Promise
Prototype:Promise
PromiseState:"pending - fullfilled- rejected"
PromiseResult:undefined

//* Promise Object are immutable
//? Promise ==> A promise is an object representing eventual completion of an async operation
// Promise Chaining help in Callback Hell


//! How to solve callback hell with promise chaining
// const cart1 = ["shoes","shirt","paints"];
// api.createOrde(card,()=>{
//     api.proceedToPayment(()=>{
//         api.showOrderSummary(()=>{
//             api.updateWallet();
//         });
//     });
// });


//* with promise chaining
const cart1 = ["shoes","shirt","paints"];
createOrder(cart1)
.then((orderId)=>{
   return proceedToPayment(orderId);
})
.then((paymentInfo)=>{
   return showOrderSummary(paymentInfo)
})
.then((paymentInfo)=>{
   return updateWalletBalance(paymentInfo);
})
//* always use return in then() in promise chaining


//* using arrow function
const cart2 = ["shoes","shirt","paints"];
createOrder(cart1)
.then((orderId)=> proceedToPayment(orderId))
.then((paymentInfo)=> showOrderSummary(paymentInfo))
.then((paymentInfo)=> updateWalletBalance(paymentInfo))