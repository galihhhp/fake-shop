import { Product } from "types/index";
import Rating from "./Rating";
import { useNavigate } from "react-router-dom";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const navigate = useNavigate();

  const discountCalc = (price: number, discount: number) => {
    if (discount === 0) {
      return price;
    } else {
      const discountPrice = (price * discount) / 100;
      return Math.round(price - discountPrice);
    }
  };

  return (
    <div
      onClick={() => {
        navigate(`/products/${product.id}`);
      }}
      key={product.id}
      className="relative cursor-pointer">
      {/* <p className='text-sm absolute bg-neutral-200 left-0'>{product.category.name}</p> */}
      <img
        src={product.thumbnail}
        alt=""
        className="h-44 w-full object-cover mb-4"
      />
      <p className="text-xs font-bold uppercase">{product.category}</p>
      <h1 className="break-all md:text-lg h-24">
        {product.title.length > 60
          ? product.title.slice(0, 60) + "..."
          : product.title}
      </h1>
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
      <div className="flex flex-col gap-2 absolute top-2 right-2">
        <button
          onClick={(e) => {
            e.stopPropagation();

            console.log("add to cart");
          }}
          className="rounded-md p-2 w-10 h-10 border border-neutral-400 bg-white flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();

            console.log("add to cart");
          }}
          className="rounded-md p-2 w-10 h-10 border border-neutral-400 bg-white flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
