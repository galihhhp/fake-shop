import { getAllCategories, getAllProducts } from "utils/query/products";
import { useEffect, useState } from "react";

import Layout from "components/layout";
import { Product } from "types/index";
import ProductCard from "components/ProductCard";
import Section from "components/Section";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProdutcs] = useState<Product[] | undefined>([]);
  const [flashSale, setFlashSale] = useState<Product[] | undefined>([]);
  const [bestSelling, setBestSelling] = useState<Product[] | undefined>([]);
  const [categories, setCategories] = useState<string[] | undefined>([]);
  const [countdownTime, setCountdownTime] = useState<string>("00:00:00");
  // const data = useCallback(async () => {
  //   const data = await getAllProducts();

  //   console.log(data);
  // }, []);

  const countdown = () => {
    const today = new Date();
    today.setHours(23, 59, 59, 0);
    const todayTime = today.getTime();

    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = todayTime - now;

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
        .toString()
        .padStart(2, "0");
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, "0");
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, "0");

      if (distance < 0) {
        // clearInterval(x);
      }

      setCountdownTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    return () => {
      clearInterval(x);
    };
  };

  useEffect(() => {
    getAllCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => {
        console.log(err);
      });

    getAllProducts(12)
      .then((data) => {
        setProdutcs(data);
        console.log("render", data);
      })
      .catch((err) => {
        console.log(err);
      });

    getAllProducts(6)
      .then((data) => {
        setFlashSale(data);
      })
      .catch((err) => {
        console.log(err);
      });

    getAllProducts(4)
      .then((data) => {
        setBestSelling(data);
      })
      .catch((err) => {
        console.log(err);
      });

    countdown();
  }, []);

  const navigate = useNavigate();

  return (
    // <div>asfs</div>
    <Layout>
      <div className="flex md:flex-row flex-col container md:px-0 px-5">
        <div className="md:border-r border-neutral-300 py-6 gap-4 overflow-x-scroll md:overflow-x-hidden flex md:flex-col md:w-[20%]">
          {categories &&
            categories.map((category) => {
              return (
                <button
                  key={category}
                  className="w-full text-start hover:font-bold uppercase">
                  {category}
                </button>
              );
            })}
        </div>
        <div className="md:p-6 md:w-[80%]">
          <div className="bg-black h-[200px] md:h-[300px]">sfa</div>
        </div>
      </div>
      <Section title="Today's">
        <div className="flex items-center gap-10">
          <h1 className="font-bold text-xl md:text-3xl">Flash Sales</h1>
          <h1 className="md:text-xl">{countdownTime}</h1>
        </div>
        <div className="grid grid-rows-2 lg:grid-rows-1 md:grid-cols-3 grid-cols-2 lg:grid-cols-6 gap-4">
          {flashSale &&
            flashSale.map((product) => {
              return <ProductCard product={product} />;
            })}
        </div>
        <button
          onClick={() => navigate("/products")}
          className="text-white bg-red-500 w-48 p-2 rounded-md self-center">
          View All Products
        </button>
      </Section>
      <Section title="Categories">
        <div className="flex items-center gap-10">
          <h1 className="font-bold text-xl md:text-3xl">Browse By Category</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories &&
            categories.map((category) => {
              return (
                <button
                  key={category}
                  className="w-full text-start hover:bg-red-500 hover:text-white uppercase border border-neutral-400 p-2 rounded-md flex justify-center items-center h-12">
                  {category}
                </button>
              );
            })}
        </div>
      </Section>
      <Section title="This Month">
        <div className="flex items-center justify-between gap-10">
          <h1 className="font-bold text-xl md:text-3xl">
            Best Selling Products
          </h1>
          <button className="text-white bg-red-500 w-32 p-2 rounded-md self-center">
            View All
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {bestSelling &&
            bestSelling.map((product) => {
              return <ProductCard product={product} />;
            })}
        </div>
      </Section>
      <Section title="Our Products">
        <div className="flex items-center justify-between gap-10">
          <h1 className="font-bold text-xl md:text-3xl">
            Explore Our Products
          </h1>
          {/* <button className="text-white bg-red-500 w-32 p-2 rounded-md self-center">
            View All
          </button> */}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products &&
            products.map((product) => {
              return <ProductCard product={product} />;
            })}
        </div>
        <button className="text-white bg-red-500 w-48 p-2 rounded-md self-center">
          View All Products
        </button>
      </Section>
    </Layout>
  );
};

export default Home;
