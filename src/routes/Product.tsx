import ProductCard from "components/ProductCard";
import Layout from "components/layout";
import { useEffect, useState } from "react";
import { Product } from "types/index";
import { getAllProducts } from "utils/query/products";

const Product = () => {
  const [products, setProdutcs] = useState<Product[] | undefined>([]);
  const [limit, setLimit] = useState<number>(8);

  useEffect(() => {
    getAllProducts(limit)
      .then((data) => {
        setProdutcs(data?.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [limit]);

  const handleNext = () => {
    setLimit(limit + 4);
  };

  return (
    <Layout>
      <div className="container my-10 flex flex-col gap-4">
        <h1 className="font-bold text-xl md:text-3xl">Our Products</h1>
        <div className="grid grid-rows-2 lg:grid-rows-1 grid-cols-2 lg:grid-cols-4 gap-4">
          {products &&
            products.map((product) => {
              return <ProductCard product={product} />;
            })}
        </div>
        {products?.length === 20 ? (
          <p className="text-center font-bold mt-10">No more products</p>
        ) : (
          <button
            onClick={handleNext}
            className="p-2 border border-neutral-400 w-full mt-10 rounded-md">
            LOAD MORE
          </button>
        )}
      </div>
    </Layout>
  );
};

export default Product;
