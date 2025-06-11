function singleclicked() {
  console.log("single click");
}

function doubleclicked() {
  console.log("double clicked");
}

function cursorover() {
  console.log("cursor overed");
}

function cursorout() {
  console.log("cursor out");
}

function cursormove() {
  console.log("cursor moved");
}

function parascroll() {
  console.log("paragrapgh scrolled");
}

function pageload() {
  console.log("page is loaded");
}

function keypressed() {
  console.log("Key is pressed");
}

function keyreleased() {
  console.log("Key is released");
}

function keychange() {
  console.log("Input changed");
}

// onsubmit()
function handleForm(e) {
  e.preventDefault(); // stops refresh
  console.log(e);
  console.log("form submitted");
}
