//! HTMLCollection --> LIVE COLLECTION
const divsCollection = document.getElementsByTagName("div");
console.log(divsCollection); // HTMLCollection(3) [div, div, div]
console.log(divsCollection.length); // --> 3

//! NodeList --> STATIC COLLECTION
const divNodes = document.querySelectorAll("div");
console.log(divNodes); //NodeList(3) [div, div, div]
console.log(divNodes.length); // --> 3

const div = document.createElement("div");
div.textContent = "div 4";
document.body.append(div);

console.log(divsCollection.length); // --> 4 DYNAMIC
console.log(divNodes.length); // --> 3 STATIC

//! SIMILARITY BETWEEN HTML COLLECTION AND NODE LIST
const sectionByUsingTagname = document.getElementsByTagName("section");
const sectionByUsingQueryAll = document.querySelectorAll("section");

console.log(sectionByUsingTagname); //HTMLCollection(3) [section, section, section]
console.log(sectionByUsingQueryAll); //NodeList(3) [section, section, section]

//Nodelist and HTMLCollection both are impure array
// in impure array we cannot use any of the array methods
//todo --> Only in NodeList[] we can use forEach()
sectionByUsingQueryAll.forEach((ele) => {
  console.log(ele);
});
//! TO CHECK ARRAY IS PURE OR NOT -> Array.isArray()
console.log(Array.isArray(sectionByUsingTagname));// false
console.log(Array.isArray(sectionByUsingQueryAll));// false

//! TO CONVERT IMPURE ARRAY TO PURE ->  Array.from()
const pureCollection = Array.from(sectionByUsingTagname)
console.log(pureCollection);
console.log(Array.isArray(pureCollection));// true

