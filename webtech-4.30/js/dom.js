// ! DOM SELECTORS - 5 TYPES

//! 1) document.getElementById("id value") 
// it return first occurence of HTML Element, if its not present it returns null
const btn = document.getElementById("btn")
console.log(btn);


//! 2) document.getElementsByClassName("class value")
// it returns HTML Collection[] of elements , if its not present it returns empty HTML Collection[]
const alldivs = document.getElementsByClassName("box")
console.log(alldivs);
console.log(alldivs[1]);

//! 3) document.getElementsByTagName("tag name")
// it returns HTML Collection[] of elements , if its not present it returns empty HTML Collection[]
const allsections = document.getElementsByTagName("section")
console.log(allsections);
console.log(allsections[2]);

//! 4) document.querySelector("id,class,tagname")

const buttonTag = document.querySelector("#btn")
console.log(buttonTag);

const div = document.querySelector(".box")
console.log(div);

const section = document.querySelector("section")
console.log(section);

//! 5) document.querySelectorAll("id,class,tagname")
// it returns NodeList[] of elements , if its not present it returns empty NodeList[]
const divs = document.querySelectorAll(".box")
console.log(divs);

const btnTag = document.querySelectorAll("#btn")
console.log(btnTag);
console.log(btnTag[0]);






