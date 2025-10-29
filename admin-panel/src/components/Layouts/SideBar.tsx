import { useState } from "react";
import {
  Bolt,
  UserRoundMinus,
  ChartNoAxesGantt,
  LayoutDashboard,
  ChevronDown,
  ChevronRight,
  LogOut,
} from "lucide-react"; // opsional, untuk ikon (pakai: npm install lucide-react)
import { Link } from "react-router";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <aside className="w-67 h-screen bg-[#15161a] text-white flex flex-col fixed">
      <div className="flex h-20 items-center px-8 py-6 gap-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/270/270023.png"
          alt=""
          className="w-12 h-12 object-cover rounded-full"
        />
        <h1 className="text-3xl font-bold ">Admin</h1>
      </div>

      <nav className="flex flex-col justify-between h-full p-4">
        <div className="space-y-1 mt-3">
          <p className="text-sm text-gray-500 px-3 py-1">MENU</p>
          {/* Menu Utama */}
          <Link
            to="/"
            className="flex items-center gap-2 py-2 px-3 rounded hover:bg-gray-700"
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          {/* Dropdown Menu */}
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between w-full py-2 px-3 rounded hover:bg-gray-700"
            >
              {" "}
              <div className="flex items-center gap-2">
                <ChartNoAxesGantt size={18} />
                <span>Manajemen</span>
              </div>
              {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            </button>

            {/* Submenu */}
            {isOpen && (
              <div className="ml-4 mt-1 space-y-1">
                <Link
                  to="/users"
                  className="flex items-center py-2 px-3 rounded gap-1 hover:bg-gray-700"
                >
                  Pengguna
                </Link>
                <Link
                  to="/Products"
                  className="block py-2 px-3 rounded hover:bg-gray-700"
                >
                  Produk
                </Link>
                <Link
                  to="/transaksi"
                  className="block py-2 px-3 rounded hover:bg-gray-700"
                >
                  Transaksi
                </Link>
              </div>
            )}
          </div>

          {/* Menu lain */}
          <Link
            to="/laporan"
            className="flex items-center gap-2 py-2 px-3 rounded hover:bg-gray-700"
          >
            <UserRoundMinus size={18} />
            Laporan
          </Link>
          <Link
            to="/settings"
            className="flex items-center gap-2 py-2 px-3 rounded hover:bg-gray-700"
          >
            <Bolt size={18} />
            Settings
          </Link>
        </div>
        <div className="">
          <Link
            to="/"
            className="flex items-center gap-2 py-2 px-3 rounded hover:bg-gray-700"
          >
            <LogOut size={18} />
            Logout
          </Link>
        </div>
      </nav>
    </aside>
  );
}
