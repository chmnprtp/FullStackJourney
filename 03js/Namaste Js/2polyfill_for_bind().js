// let name = {
//     firstName:"Chaman",
//     lastName: "Pratap",
// }
// let printName = function(){
//     console.log(this.firstName + " " + this.lastName);
// }

// let printMyName = printName.bind(name);
// printMyName();
//--------------------------

//! create your own bind
let name = {
    firstName:"Chaman",
    lastName: "Pratap",
}
let printName = function(hometown){
    console.log(this.firstName + " " + this.lastName+" ", hometown);
}

let printMyName = printName.bind(name,"UP");
printMyName();

Function.prototype.mybind = function(...args){ // if we keep any method in Function.prototype then each and every method we write have access those method
    let obj = this
    params = args.slice(1);
    return function(){
        obj.apply(args[0],params);
    }
}
let printMyName2 = printName.mybind(name,"UP")
printMyName2()