// //!

// const cart = ["shoes","pant","kurta"];

// const promise = createOrder(cart); //return orderId;

// promise.then(function(){ // this will call in promise success
//     console.log(orderId);
//     // proceedToPayment(orderId);
// })
// .catch(function (err){  // this will call in promise rejected state
//     console.log(err.message)
// })
// // Promise Producer
// function createOrder(cart){
//     const pr = new Promise(function(resolve,reject){
//         // createOrder logic
//         // validateCart
//         //orderId
//         if(validateCart(cart)){
//             const err = new Error("Cart is not valid")
//             reject(err);
//         }
//         // logic for createOrder
//         const orderId = "12345"
//         if(orderId){
//             setTimeout(()=>{
//                 resolve(orderId);
//             },5000)
//             // resolve(orderId);
//         }
//     });
//     return pr;
// }


// function validateCart(){
//     // return true;
//     return false
// }


//---------------------------------------------------------
//!Promise Chaining

const cart = ["shoes","pant","kurta"];

createOrder(cart) //return orderId;
.then(function(){ // this will call in promise success
    console.log(orderId); 
    return orderId;
})
.then(function(){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})

.catch(function (err){  // this will call in promise rejected state for all above case
    console.log(err.message)
})
.then(function(dummt){
    console.log("It will definitely be called");
})

// Promise Producer
function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        // createOrder logic
        // validateCart
        //orderId
        if(validateCart(cart)){
            const err = new Error("Cart is not valid")
            reject(err);
        }
        // logic for createOrder
        const orderId = "12345"
        if(orderId){
            setTimeout(()=>{
                resolve(orderId);
            },5000)
            // resolve(orderId);
        }
    });
    return pr;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment successful");
    });
}

function validateCart(){
    return true;
    // return false
}

// How to create Promise 

// createOrder
// proceedToPayment
// showOrderSummary
// updateWalletBalance