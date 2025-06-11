const section = document.querySelector("section");
const article = document.querySelector("article");
const div = document.querySelector("div");

section.addEventListener("click", (e) => {
    e.stopPropagation()
  section.style.backgroundColor = "red";
  console.log("section");
},0);

article.addEventListener("click", (e) => {
    e.stopPropagation()
  article.style.backgroundColor = "orange";
  console.log("article");
},0);

div.addEventListener("click", (e) => {
  div.style.backgroundColor = "yellow";
  console.log("div");
},0);

div.addEventListener("click",(e)=>{
    e.stopImmediatePropagation()
    console.log("I am 2nd Event of div");
})

div.addEventListener("click",()=>{
    console.log("I am 3nd Event of div");
})