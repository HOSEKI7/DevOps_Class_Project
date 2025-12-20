import { useAppSelector } from "../../redux/store/hooks";
import { useContext, useEffect, useRef, useState } from "react";
import type { Products } from "../../types/products";
import { DarkMode } from "../../context/darkMode";

interface VisibleProps {
  isVisible?: boolean;
}

interface CartProps {
  products?: Products[];
}

type CartFragmentProps = VisibleProps & CartProps;

const CartFragment = ({
  isVisible = true,
  products = [],
}: CartFragmentProps) => {
  const cart = useAppSelector((state) => state.cart.data ?? []);
  const [totalPrice, setTotalPrice] = useState(0);
  const { isDarkMode } = useContext(DarkMode);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce(
        (total: number, item: { id: number; quantity: number }) => {
          const product = products.find((product) => product.id === item.id);
          return total + (product?.price ?? 0) * (item.quantity ?? 1);
        },
        0
      );
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

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
  if (!isVisible) return null;

  const maxItemsToShow = 5;
  const lastIndex = cart.length; //20
  const newestIndex = () => {
    if (lastIndex >= maxItemsToShow) {
      return lastIndex - maxItemsToShow; //15
    } else {
      return 0;
    }
  };
  const limitItems = cart.slice(newestIndex(), lastIndex).reverse();

  return (
    <div className={`absolute top-full right-0 z-50 `}>
      <div className="h-2 w-full" />
      <div
        className={`w-lg border border-gray-200 rounded-lg shadow-lg p-6 ${
          isDarkMode ? "bg-[#181818]" : "bg-gray-100"
        }`}
      >
        <div className="flex flex-col text-left mb-5">
          <h5 className="text-lg font-bold">CART</h5>
          <p className="text-gray-400 text-sm">Newest Added</p>
        </div>
        <div className="flex items-center justify-center">
          <table className="text-left table-auto border-separate border-spacing-x-3 wrap-anywhere">
            <thead>
              <tr>
                <th>Qty</th>
                <th>Product</th>
                <th>Price</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                limitItems.map((item: { id: number; quantity: number }) => {
                  const product = products.find(
                    (product: Products) => product.id === item.id
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
        <div className="mt-4 pt-4 border-t border-gray-200">
          <button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartFragment;
