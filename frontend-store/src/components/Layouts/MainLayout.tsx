import { useContext } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import { DarkModeContext } from "../../context/darkModeContext";

export const MainLayout = () => {
  const darkMode = useContext(DarkModeContext);

  if (!darkMode) {
    throw new Error(
      "DarkModeContext must be used within DarkModeContextProvider"
    );
  }

  const { isDarkMode } = darkMode;
  return (
    <div>
      <Navbar />
      <main
        className={`min-h-screen ${
          isDarkMode ? "bg-[#191a1c] text-white" : "bg-white text-black"
        }`}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

// import type { ReactNode } from "react";
// import Footer from "./Footer";
// import Navbar from "./Navbar";

// type MainLayoutProps = {
//   children: ReactNode;
//   classname?: string;
// };

// const MainLayout = (props: MainLayoutProps) => {
//   const { children, classname } = props;

//   return (
//     <div className="w-full min-h-screen">
//       <Navbar />
//       <div className="w-full bg-[#fcf3ec] h-5"></div>
//       <main className={`${classname} mx-auto text-black`}>
//         {/* Main Content */}
//         {children}
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default MainLayout;
