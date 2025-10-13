import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import AddMovie from "./pages/AddMovie";
import EditMovie from "./pages/EditMovie";
import TopNavbar from "./components/Navbar";
import Sidebar from "./components/SideBar";

function App() {
  return (
    <div className="flex">
      <BrowserRouter>
        <Sidebar />
        <div className="w-full ml-64">
          <TopNavbar />
          <main className="w-full p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/add" element={<AddMovie />} />
              <Route path="/edit/:id" element={<EditMovie />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
