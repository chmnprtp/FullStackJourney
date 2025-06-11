import Child1 from "./Child1";

const Parent1 = () => {
  let str = "Hello Child 1";
  let user = {
    id: 1,
    ename: "Rohit",
  };
  let arr = [10, 20, 30, 40];

  let products = [
    {
      id: 1,
      name: "Samsumg",
      price: 60000,
    },
    {
      id: 2,
      name: "Apple",
      price: 90000,
    },
    {
      id: 3,
      name: "Vivo",
      price: 45000,
    },
  ];

  return (
    <div>
      <h1>I am Parent 1</h1>
      <Child1 str={str} user={user} arr={arr} products={products}/>
    </div>
  );
};
export default Parent1;
