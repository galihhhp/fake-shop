import { Product } from "types/index";
import Rating from "./Rating";
import { useNavigate } from "react-router-dom";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/products/${product.id}`);
      }}
      key={product.id}
      className="relative cursor-pointer">
      {/* <p className='text-sm absolute bg-neutral-200 left-0'>{product.category.name}</p> */}
      <img
        src={product.image}
        alt=""
        className="h-44 w-full object-cover mb-4"
      />
      <p className="text-xs font-bold uppercase">{product.category}</p>
      <h1 className="break-all md:text-lg h-24">
        {product.title.length > 80
          ? product.title.slice(0, 80) + "..."
          : product.title}
      </h1>
      <Rating rating={product.rating} />
      <p className="text-red-500 font-bold">${product.price}</p>
    </div>
  );
};

export default ProductCard;
