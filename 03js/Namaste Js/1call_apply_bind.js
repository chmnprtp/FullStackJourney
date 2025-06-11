//! Call - is used to invoke a fn immediately by passing the reference which points to this
/*
let name1 = {
    firstName:"Chaman",
    lastName:"Pratap",
}

let printfullName = function (hometown,state){
    console.log(this.firstName + "",this.lastName + " from", hometown + ",",state)
}
printfullName.call(name1,"Noida", "UttarPradesh"); 

let name2 = {
    firstName:"Rajat",
    lastName:"Pratap",

}
printfullName.call(name2,"Gr.Noida","UttarPradesh");
*/
//* Every non-arrow function in Js have access to this keyword?
//* using call method we can do function borrowing

//! apply  - the only diff between call and apply is it takes second argument as arraylist
/*
let name3 = {
    firstName:"Chaman",
    lastName:"Pratap",
}

let printfullName1 = function (hometown,state){
    console.log(this.firstName + "",this.lastName + " from", hometown + ",",state)
}
 

let name4 = {
    firstName:"Rajat",
    lastName:"Pratap",

}
printfullName1.apply(name3,["Noida", "UttarPradesh"]);
printfullName1.apply(name4,["Gr.Noida","UttarPradesh"]);
*/

//! bind - same as call but it bind and keeps copy of method which can be call later.
//* it doesnot directy call the method but return as method which can call later.
let name5 = {
    firstName:"Chaman",
    lastName:"Pratap",
}

let name6 = {
    firstName:"Rajat",
    lastName:"Pratap",
}

let printfullName2 = function (hometown,state){
    console.log(this.firstName + "",this.lastName + " from", hometown + ",",state)
}

let printMyName1 = printfullName2.bind(name5,"Noida", "UttarPradesh"); 
let printMyName2 = printfullName2.bind(name6,"Gr.Noida","UttarPradesh");

console.log(printMyName1);
console.log(printMyName2);

printMyName1();
printMyName2();


