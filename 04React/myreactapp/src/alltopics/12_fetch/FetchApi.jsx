import React, { useEffect, useState } from "react";

const FetchApi = () => {
  const [productsData, setProductsData] = useState(null);

  async function getProducts() {
    let resp = await fetch("https://fakestoreapi.in/api/products"); // return promise object
    let data = await resp.json(); // return promise
    console.log(data);
    setProductsData(data);
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <header className="p-3 bg-blue-300">
        <h1 className="text-center font-bold">All Products</h1>
      </header>
      <section className="p-3 bg-gray-100 grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {productsData === null ? (
          <h2 className="text-center">Loading</h2>
        ) : (
          productsData?.products.map((singleProduct) => {
            //  - ? - optional chaining
            console.log(singleProduct);
            let { brand, category, description, image, price, title, id } =
              singleProduct;
            return (
              <div key={id} className="bg-white my-2 p-3 rounded shadow">
                <img src={image} alt="" height={100} width={100} />
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="font-light">{description.slice(0, 50)}..</p>
                <p className="font-light">Brand:{brand}</p>
                <h3 className="text-lg font-bold">Price:{price}</h3>
              </div>
            );
          })
        )}

        {}
      </section>
    </div>
  );
};

export default FetchApi;
