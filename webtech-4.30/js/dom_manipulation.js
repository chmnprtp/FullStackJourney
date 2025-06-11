const sectionContainer = document.querySelector("#container")

//! CREATING HTML ELEMENTS
// document.createElement()
const h1Tag = document.createElement("h1")
const pTag = document.createElement("p")
const btnTag = document.createElement("button")
const mainTag = document.createElement("main")

//! ADDING TEXT CONTENT
h1Tag.textContent = "John Doe"
pTag.textContent = "Mern Dev"
btnTag.textContent = "View More"

console.log(h1Tag);//<h1>John Doe</h1>
console.log(pTag);//<p>Mern Dev</p>
console.log(btnTag);//<button>View More</button>

//! ADDING ATTRIBUTES
mainTag.setAttribute("class","card")


// append h1,p and button as child of maintag
mainTag.append(h1Tag,pTag,btnTag)


// append mainTag as a child of sectionContainer
sectionContainer.append(mainTag)


