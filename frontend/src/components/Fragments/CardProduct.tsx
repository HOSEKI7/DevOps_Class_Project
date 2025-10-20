import type React from "react";
import Button from "../Elements/Button/button";
import { Link } from "react-router";

type CardProductProps = {
  children: React.ReactNode;
  id: number;
};

const CardProduct = (props: CardProductProps) => {
  const { children, id } = props;

  return (
    <Link to={`/product/${id}`}>
      <div className="flex flex-col gap-5 justify-between bg-neutral-100 p-4 rounded-lg shadow hover:bg-neutral-200 transform hover:-translate-y-2 transition duration-300">
        {children}
      </div>
    </Link>
  );
};

type HeaderProps = {
  image: string;
  id: number;
};

const Header = (props: HeaderProps) => {
  const { image, id } = props;

  return (
    <div className="bg-neutral-50 p-3 overflow-hidden hover:border-1 rounded hover:border-white hover:shadow-[0_0_10px_rgba(0,0,0,0.4)]">
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
  name: string;
  children: string;
  id: number;
  variant?: string;
};

const Body = (props: BodyProps) => {
  const { name, variant, children, id } = props;

  return (
    <div className="space-y-2">
      <div>
        <Link to={`/product/${id}`} className="text-base">
          {name.length > 30 ? name.substring(0, 30) + "..." : name}
        </Link>
        <p className="text-xs font-light">{variant}</p>
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
  handleAddToCart: (id: number) => void;
  id: number;
};

const Footer = (props: FooterProps) => {
  const { price, realPrice, handleAddToCart, id } = props;

  return (
    <div className="flex flex-row justify-between">
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
          classname="bg-[#185839] text-white"
          onClick={() => handleAddToCart(id)}
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
