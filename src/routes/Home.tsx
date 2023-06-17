import { useCallback, useEffect, useState } from "react";

import { getAllProducts } from "utils/query/products";

const Home = () => {
  const [products, setProdutcs] = useState([])

  // const data = useCallback(async () => {
  //   const data = await getAllProducts();

  //   console.log(data);
  // }, []);

  useEffect(() => {
    // data()

    getAllProducts().then((data) => {
      setProdutcs(data);
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });

  }, []);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-xl">Setup App</h1>
      <div className="flex flex-col">
        {products && products.map((product: any) => {
          return (
            <div key={product.id}>
              <h1>{product.title}</h1>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Home;