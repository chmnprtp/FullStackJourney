// printName("abc");
// console.log(arr);
// console.log(obj);


//! we have 2 different types of importing
//! 1) importing using require
// * let/const variableName = require("path of the file")

// Example:
// const value = require("./app")
// // console.log(value)
// value("hi");

    const payload = require("./app")
    console.log(payload)
    /* Output:
    {
        printName: [Function: printName],
        arr: [ 1, 2, 3, 4 ],
        obj: { a: '1234567' }
      }
    */

    // console.log(payload.arr); //Output: [ 1, 2, 3, 4 ]
    // console.log(payload.obj); //Output: { a: '1234567' }
    // console.log(payload.printName); // Output : [Function: printName]

    //! 2) destructure
    // let {printName,obj,arr} = require("./app")
    // console.log(arr); //Output: [ 1, 2, 3, 4 ]
    // console.log(obj); // Output: { a: '1234567' }
    // printName("chaman"); // Output: hello chaman


