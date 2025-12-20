import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Sidebar from "./SideBar";

const MainLayout = () => {
  return (
    <div className="w-full">
      <Sidebar />
      <div className="ml-64">
        <Navbar />
        <main className="container mx-auto px-2 py-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
