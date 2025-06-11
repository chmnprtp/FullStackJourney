const openmodalbtn = document.querySelector("#openmodalbtn");
const closemodalbtn = document.querySelector("#closemodalbtn");
const overlay = document.querySelector(".overlay");

console.log(openmodalbtn);

openmodalbtn.addEventListener("click", () => {
  overlay.style.visibility = "visible";
  overlay.style.opacity = "1";
  openmodalbtn.style.display = "none";
});

closemodalbtn.addEventListener("click", () => {
  overlay.style.visibility = "hidden";
  overlay.style.opacity = "0";
  openmodalbtn.style.display = "block";
});
