const Child1 = (props) => {
    console.log(props.products);
  
    return (
      <div>
        <h1>I am Child 1</h1>
        <h2>{props.str}</h2>
        <h3>Welcome {props.user.ename}</h3>
        <h4>{props.arr[0]}</h4>
  
        {props.products.map((product) => {
          console.log(product.name);
          return (
            <div key={product.id}>
              <h1>
                Name :<mark>{product.name}</mark>
              </h1>
              <p>Price :{product.price}</p>
            </div>
          );
        })}
      </div>
    );
  };
  export default Child1;
  