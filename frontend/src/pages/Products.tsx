import { Fragment, useEffect, useRef, useState } from "react";

import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";
import type { Products } from "../types/products";

const ProductsPage = () => {
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState<Products[]>([]);

useEffect(() => {
  // Ambil cart dari localStorage
  setCart(JSON.parse(localStorage.getItem("cart") || "[]"));

  // Ambil data produk pakai callback
  getProducts((data: Products[]) => {
    console.log("fetched", data);
    setProducts(data);
  });
}, []);

useEffect(() => {
  if (products.length > 0 && cart.length > 0) {
    const sum = cart.reduce((total, item) => {
      const product = products.find((product) => product.id === item.id);
      return total + (product?.price ?? 0) * item.quantity;
    }, 0);
    setTotalPrice(sum);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}, [cart, products]);

const handleAddToCart = (id: number) => {
  if (cart.find((item) => item.id === id)) {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  } else {
    setCart([...cart, { id, quantity: 1 }]);
  }
};

const totalPriceRef = useRef<HTMLTableRowElement>(null);

useEffect(() => {
  if (totalPriceRef.current) {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }
});

// useRef addToCart
// const cartRef = useRef(JSON.parse(localStorage.getItem("cart") || "[]"));

// const handleAddToCartRef = (id: number) => {
//   cartRef.current = [...cartRef.current, { id, quantity: 1 }];
//   localStorage.setItem("cart", JSON.stringify(cartRef.current));
// };

return (
  <Fragment>
    <div className="mt-12 my-1">
      <h1 className="pl-2 text-xl font-semibold tracking-wider">
        MOST POPULAR PRODUCTS
      </h1>
    </div>
    <div className="flex gap-8">
      <div className="w-3/4 my-6 flex flex-col">
        <div className="grid grid-cols-3 gap-6">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body
                  name={product.title}
                  category={product.category}
                  id={product.id}
                >
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price ?? 0}
                  realPrice={product.realPrice ?? 0}
                  handleAddToCart={handleAddToCart}
                  id={product.id}
                />
              </CardProduct>
            ))}
        </div>
      </div>
      {/* Cart */}
      <div className="w-1/4 my-6 border-2 text-sm h-fit py-1 pb-5 px-2 rounded-lg drop-shadow-md">
        <div className="flex flex-col justify-center">
          <h1 className="text-xl font-semibold text-left ml-2 my-2">CART</h1>
          <div>
            <table className="text-left table-auto border-separate border-spacing-x-3 wrap-anywhere">
              <thead>
                <tr>
                  <th>Quantity</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 &&
                  cart.map((item) => {
                    const product = products.find(
                      (product) => product.id === item.id
                    );
                    if (!product) return null;
                    return (
                      <tr key={item.id}>
                        <td className="text-center">{item.quantity}</td>
                        <td>
                          {product.title.length > 15
                            ? product.title.substring(0, 15) + ".."
                            : product.title}
                        </td>
                        <td className="text-wrap">
                          {" "}
                          {product.price.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })}
                        </td>
                        <td>
                          {" "}
                          {(item.quantity * product.price).toLocaleString(
                            "id-ID",
                            { style: "currency", currency: "IDR" }
                          )}
                        </td>
                      </tr>
                    );
                  })}
                <tr ref={totalPriceRef}>
                  <td colSpan={3}>
                    <b>Total Price</b>
                  </td>
                  <td>
                    <b>
                      {" "}
                      {totalPrice.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center my-10">
      <button className="px-4 py-2 font-semibold rounded-md bg-[#185839] text-white cursor-pointer">
        Load More
      </button>
    </div>
  </Fragment>
);
};

export default ProductsPage;
