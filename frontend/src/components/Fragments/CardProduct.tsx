import type React from "react";
import Button from "../Elements/Button/button";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

type CardProductProps = {
  children: React.ReactNode;
};

const CardProduct = (props: CardProductProps) => {
  const { children } = props;

  return (
    <div className="w-full flex flex-col gap-5 justify-between bg-neutral-100 p-3 rounded">
      {children}
    </div>
  );
};

type HeaderProps = {
  image: string;
  id: number;
};

const Header = (props: HeaderProps) => {
  const { image, id } = props;

  return (
    <div className="bg-neutral-100 p-3 overflow-hidden hover:border-1 rounded hover:border-white hover:shadow-[0_0_10px_rgba(0,0,0,0.4)]">
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt=""
          className="h-60 w-full object-contain transition-all duration-700 hover:scale-110 hover:rotate-3"
        />
      </Link>
    </div>
  );
};

type BodyProps = {
  id: number;
  name: string;
  children: string;
  category: string;
  brand?: string;
};

const Body = (props: BodyProps) => {
  const { id, name, category, brand, children } = props;

  return (
    <div className="space-y-2 px-4">
      <div>
        <Link to={`/product/${id}`} className="text-base">
          {name.length > 30 ? name.substring(0, 30) + "..." : name}
        </Link>
        <div className="flex gap-1 items-center text-gray-500">
          <p className="text-xs font-light">{category}</p>

          {brand && (
            <div className="flex gap-1">
              <span>|</span>
              <p className="text-xs font-light">{brand}</p>
            </div>
          )}
        </div>
      </div>
      <div>
        <p className="text-sm">
          {children.length > 100
            ? children.substring(0, 100) + "..."
            : children}
          ...
        </p>
      </div>
    </div>
  );
};

type FooterProps = {
  price: number | null;
  realPrice: number | null;
  id: number;
};

const Footer = (props: FooterProps) => {
  const { price, realPrice, id } = props;
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row justify-between px-4 items-center">
      <div className="flex flex-col items-start">
        <p className="text-red-500 tracking-wider font-light">
          {price !== null
            ? price.toLocaleString("id-ID", {
                style: "currency",
                currency: "USD",
              })
            : "-"}
        </p>
        <p className="line-through tracking-wider font-light">
          {realPrice !== null
            ? realPrice.toLocaleString("id-ID", {
                style: "currency",
                currency: "USD",
              })
            : "-"}
        </p>
      </div>
      <div className="flex items-end">
        <Button
          type="button"
          classname="bg-[#185839] text-white hover:bg-green-700 transition-colors duration-300 "
          onClick={() => dispatch(addToCart({ id, quantity: 1 }))}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
