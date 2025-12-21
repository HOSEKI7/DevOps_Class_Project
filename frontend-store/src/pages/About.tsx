import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";

const About = () => {
  const darkMode = useContext(DarkModeContext);

  if (!darkMode) {
    throw new Error(
      "DarkModeContext must be used within DarkModeContextProvider"
    );
  }

  const { isDarkMode } = darkMode;

  return (
    <section
      className={`min-h-screen text-gray-800 flex flex-col items-center py-16 px-6 ${
        isDarkMode
          ? "bg-[#191a1c] text-neutral-100"
          : "bg-gray-50 text-gray-600"
      }`}
    >
      {/* Header */}
      <div className="max-w-4xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
          Tentang Kami
        </h1>
        <p className="text-xl">
          Kami adalah e-commerce Hoseki Shops yang berkomitmen menghadirkan
          produk teknologi berkualitas tinggi dan original. Misi kami adalah
          menyediakan pengalaman berbelanja yang mudah, aman, dan memuaskan bagi
          semua pelanggan kami.
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-4xl md:text-5xl font-semibold text-green-800 mb-4">
          Bergabung Bersama Kami
        </h3>
        <p className="mb-6 text-xl">
          Jadilah bagian dari perjalanan kami menuju masa depan yang lebih
          hijau.
        </p>
        <button className="bg-green-800 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition duration-200 mt-5 cursor-pointer">
          Mulai Belanja Sekarang
        </button>
      </div>
    </section>
  );
};

export default About;
