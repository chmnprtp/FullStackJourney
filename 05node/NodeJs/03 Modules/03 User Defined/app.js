function printName(name){
    console.log("hello",name);
}

let arr = [1,2,3,4];
let obj = {
    a:"1234567"
}
// printName("abc");
// console.log(arr);
// console.log(obj);

//! we have two different types of exporting
// module.exports = printName;
// module.exports = obj;
// module.exports = arr;
//? in this case previous value of moduel.exports will be overwriten

// module.exports = {
//     printName,
//     arr,
//     obj
// }

/*
printName : function printName(name){}
arr: arr = [1,2,3,4];
obj: {a:"1234567"}
*/


//! second way of exporting
exports.printName = function printName(name){
    console.log("hello",name);
}
exports.myName = "chaman";
