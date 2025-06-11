const Wrapper = document.querySelector("#wrapper");

const users = [
  { ename: "John", desig: "Dev" },
  { ename: "Rohit", desig: "Tester" },
  { ename: "Raj", desig: "Dev" },
  { ename: "John", desig: "Dev" },
  { ename: "Rohit", desig: "Tester" },
  { ename: "Raj", desig: "Dev" },
  { ename: "John", desig: "Dev" },
  { ename: "Rohit", desig: "Tester" },
  { ename: "Raj", desig: "Dev" },
];

users.map((ele) => {
  let { ename, desig } = ele;

  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const btn = document.createElement("button");

  h1.textContent = ename;
  p.textContent = desig;
  btn.textContent = "click";

  div.append(h1, p, btn);

  Wrapper.append(div);
});
