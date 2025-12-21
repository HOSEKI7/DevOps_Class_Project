import { Link, NavLink } from "react-router";
import { User, Search, Handbag, ChevronDown } from "lucide-react";
import Button from "../Elements/Button/button";
import CartFragment from "../Fragments/CartFragment";
import { useContext, useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useAppSelector } from "../../redux/store/hooks";
import type { Products } from "../../types/products";
import { getProducts } from "../../services/product.service";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [totalItem, setTotalItem] = useState(0);
  const cart = useAppSelector((state) => state.cart.data);

  const [products, setProducts] = useState<Products[]>([]);

  const darkMode = useContext(DarkModeContext);

  if (!darkMode) {
    throw new Error(
      "DarkModeContext must be used within DarkModeContextProvider"
    );
  }

  const { isDarkMode, setIsDarkMode } = darkMode;

  useEffect(() => {
    // Ambil data produk pakai callback
    getProducts((data: Products[]) => {
      console.log("fetched", data);
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    const sumItem = cart.reduce((total: number, item: { quantity: number }) => {
      return total + item.quantity;
    }, 0);
    setTotalItem(sumItem);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const username = useAuth().username;

  return (
    <nav
      className={`flex justify-between items-center p-4 drop-shadow-sm ${
        isDarkMode ? "bg-[#181818] text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-center items-center md:pl-14">
        <img src="/images/Hoseki Shops Logo.png" alt="" className="h-18" />
      </div>
      <div>
        <ul className="flex space-x-6">
          <NavLink to="/" className={"hover:font-bold active:text-green-600"}>
            HOME
          </NavLink>
          <NavLink
            to="/products"
            className={"hover:font-bold active:text-green-600 flex gap-0.5"}
          >
            PRODUCTS{" "}
            <span>
              <ChevronDown />
            </span>
          </NavLink>
          <NavLink
            to="/about"
            className={"hover:font-bold active:text-green-600"}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            className={"hover:font-bold active:text-green-600"}
          >
            CONTACT{" "}
          </NavLink>
        </ul>
      </div>
      <div className="flex space-x-3 md:p-4 items-center">
        <div>
          <Button
            onClick={() => setIsDarkMode(!isDarkMode)}
            classname={`${
              isDarkMode ? "bg-[#185839] text-white" : "bg-[#185839] text-white"
            }`}
          >
            {isDarkMode ? "Light" : "Dark"}
          </Button>
        </div>
        <p>{username}</p>
        <Link to="/login">
          <User />
        </Link>
        <Search />

        <div
          className="relative mr-6"
          onMouseEnter={() => setIsCartVisible(true)}
          onMouseLeave={() => setIsCartVisible(false)}
        >
          <div className="flex gap-1">
            <Handbag className="cursor-pointer" />
            <p className="absolute ml-2 bottom-4 rounded-lg border px-2.5 font-semibold bg-[#185839] text-white text-sm text-center items-center py-0.5">
              {totalItem}
            </p>
          </div>
          <CartFragment products={products} isVisible={isCartVisible} />
        </div>

        <Button onClick={handleLogout} classname="bg-[#185839] text-white">
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
