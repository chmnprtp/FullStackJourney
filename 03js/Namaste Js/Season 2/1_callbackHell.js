// console.log("1");
// console.log("2");
// console.log("3")
// These three will be quickly printed on console
//----------------------------------

//? Callback ==> primarily to handle asynchronous operation
//?              callback help handling operation that take time.
//?              - Reading  file
//?              - Making a API request
//?              - Querying a database
//?              - Setting a timeout

//?               pass function as an argument to another function
//?                -this gives more control over what should happn after a task is done


//! Suppose we have to print 2nd console after 5 second
// console.log("1");

// setTimeout(()=>{
//     console.log("2")
// },5000)

// console.log("3")
//----------------------------------

//! example of ecommerce for callbackHell
// 1) we need to create order
// 2) we need to proceedToPayment ony after order is created
// 3) we need to showOrderSummary only after payment is successful
// 4) then we want to update the wallet after showing order summary

const cart = ["shoes","shirt","paints"];

api.createOrde(card,()=>{
    api.proceedToPayment(()=>{
        api.showOrderSummary(()=>{
            api.updateWallet();
        });
    });
});
// if we have api which is dependent to one after another then we fall in callback hell
//? callbackHell ==> one callback inside another callback. 
//?                  code grows horizontally
//?                  that structure is known as pyramid of doom



//! inversion of control ==> you loose the control of your code when we are using callbcack

api.createOrde(card,()=>{
    api.proceedToPayment();
});

// whenever we have callbackFn we pass it to some other function - we are giving control
// of our function to some other code.
// we don't know that other function will call our fn or not - 

// Promise Chaining help in Callback Hell

//? Summary:--
//! Importance of Callback?
//! Callback Hell?
//! Inversion of Control?