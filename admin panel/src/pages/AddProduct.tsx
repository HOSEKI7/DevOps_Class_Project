import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

import Button from "../components/Elements/Button";
import InputForm from "../components/Elements/InputForm";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(Number);
  const [realPrice, setRealPrice] = useState(Number);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [rating, setRating] = useState(Number);
  const [sold, setSold] = useState(Number);
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const saveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/products", {
        title,
        price,
        realPrice,
        description,
        category,
        brand,
        rating,
        sold,
        image,
      });
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Failed to save product");
    }
  };

  return (
    <div className="max-w-lg mx-auto my-15 p-8 bg-white shadow shadow-slate-300">
      <h1 className="text-2xl font-bold text-slate-700 text-center">
        Add New Product
      </h1>
      <form onSubmit={saveProduct}>
        <InputForm
          label="Title"
          type="text"
          placeholder="Product Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <InputForm
          label="Price"
          type="number"
          placeholder="Product Price"
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
        />
        <InputForm
          label="Real Price"
          type="number"
          placeholder="Product Real Price"
          value={realPrice}
          onChange={(e) => setRealPrice(parseInt(e.target.value))}
        />
        <InputForm
          label="Description"
          type="text"
          placeholder="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <InputForm
          label="Category"
          type="text"
          placeholder="Product Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <InputForm
          label="Brand"
          type="text"
          placeholder="Product Brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <InputForm
          label="Rating"
          type="number"
          placeholder="Product Rating"
          value={rating}
          onChange={(e) => setRating(parseInt(e.target.value))}
        />
        <InputForm
          label="Sold"
          type="number"
          placeholder="Product Sold"
          value={sold}
          onChange={(e) => setSold(parseInt(e.target.value))}
        />
        <InputForm
          label="Image"
          type="text"
          placeholder="Product Image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Button
          type="submit"
          style="w-full bg-indigo-600 hover:bg-indigo-500 rounded-lg border border-indigo-500 text-white hover:shadow"
        >
          Save
        </Button>
      </form>
      <div className="flex justify-end"></div>
    </div>
  );
};

export default AddProduct;
