import { getProductByCategory, getSingleProduct } from "utils/query/products";
import { useEffect, useState } from "react";

import Layout from "components/layout";
import { Product } from "types/index";
import ProductCard from "components/ProductCard";
import Rating from "../components/Rating";
import Section from "components/Section";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [relatedProducts, setRelatedProducts] = useState<Product[] | undefined>(
    undefined
  );

  useEffect(() => {
    getSingleProduct(id)
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    if (product) {
      getProductByCategory(product.category, 4)
        .then((data) => {
          setRelatedProducts(data?.products);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [product]);

  const discountCalc = (price: number, discount: number) => {
    if (discount === 0) {
      return price;
    } else {
      const discountPrice = (price * discount) / 100;
      return Math.round(price - discountPrice);
    }
  };

  console.log(product);

  return product ? (
    <Layout>
      <div className="flex container mt-10 mb-20 gap-8">
        <img
          src={product.thumbnail}
          alt=""
          className="w-[40%] h-[600px] bg-cover bg-center"
        />
        <div className="flex flex-col gap-2">
          <p className="uppercase font-bold">{product.category}</p>
          <h1 className="text-4xl font-bold uppercase">{product.title}</h1>
          <p className="">{product.description}</p>
          <Rating rating={product.rating} stock={product.stock} />
          <p className="text-red-500 font-bold">
            {product.discountPercentage > 0 ? (
              <span className="text-gray-400 line-through mr-2">
                ${product.price}
              </span>
            ) : null}
            <span
              className={
                product.discountPercentage > 0
                  ? "text-red-500 font-bold"
                  : "text-gray-400 font-bold"
              }>
              ${discountCalc(product.price, product.discountPercentage)}
            </span>
          </p>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <button className="bg-red-500 w-56 p-2 rounded-md text-white">
                BUY NOW
              </button>
              <button className="border border-red-500 w-56 p-2 rounded-md text-red-500">
                ADD TO CART
              </button>
              <button className="rounded-md p-2 w-10 h-10 border border-neutral-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
            </div>
            <div className="flex gap-2">
              <button className="p-2 border border-neutral-400 rounded-md w-10 h-10 text-2xl flex justify-center items-center">
                +
              </button>
              <p className="p-2 rounded-md border text-sm border-neutral-400 w-10 h-10 flex justify-center items-center">
                1
              </p>
              <button className="p-2 border border-neutral-400 rounded-md w-10 h-10 text-2xl flex justify-center items-center">
                -
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-10 gap-4">
            <div className="grid grid-cols-[30px_1fr] items-center gap-4 border border-neutral-400 rounded-md p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>

              <div className="flex flex-col">
                <h1 className="font-bold text-lg">FREE DELIVERY</h1>
                <p>Free shipping on all orders over $100</p>
              </div>
            </div>
            <div className="grid grid-cols-[30px_1fr] items-center gap-4 border border-neutral-400 rounded-md p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>

              <div className="flex flex-col">
                <h1 className="font-bold text-lg">RETURN DELIVERY</h1>
                <p>
                  Not satisfied with your order? Return it within 30 days for a
                  full refund of the product price.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[30px_1fr] items-center gap-4 border border-neutral-400 rounded-md p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                />
              </svg>

              <div className="flex flex-col">
                <h1 className="font-bold text-lg">
                  ALL PAYMENT METHODS ACCEPTED
                </h1>
                <p>
                  You can pay us by debit/credit card, PayPal or with cash on
                  delivery.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[30px_1fr] items-center gap-4 border border-neutral-400 rounded-md p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                />
              </svg>

              <div className="flex flex-col">
                <h1 className="font-bold text-lg">
                  SECURE CHECKOUT WITH SSL ENCRYPTION
                </h1>
                <p>
                  Your personal data is always protected and encrypted when you
                  shop with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Section title="Related Product">
        <div className="grid grid-rows-2 lg:grid-rows-1 grid-cols-2 md:grid-cols-4 gap-4">
          {relatedProducts &&
            relatedProducts.map((product) => {
              return <ProductCard product={product} />;
            })}
        </div>
      </Section>
    </Layout>
  ) : (
    <div>loading...</div>
  );
};

export default ProductDetails;
