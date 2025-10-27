import { Routes, Route } from "react-router";
import MainLayout from "./components/Layouts/MainLayout";
import ProductList from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/login" />
        <Route path="/register" />

        <Route element={<MainLayout />}>
          <Route path="/" element={<ProductList />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
