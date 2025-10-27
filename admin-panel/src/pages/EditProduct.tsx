import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

import Button from "../components/spatial/Button";
import InputForm from "../components/spatial/InputForm";

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(Number);
  const [realPrice, setRealPrice] = useState(Number);
  const [description, setDescription] = useState("");
  const [variants, setVariants] = useState([{ name: "", stock: 0 }]);
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [rating, setRating] = useState(Number);
  const [sold, setSold] = useState(Number);
  const [image, setImage] = useState("");

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/products/${id}`
        );
        const data = response.data;

        setTitle(data.title || "");
        setPrice(data.price || 0);
        setRealPrice(data.realPrice || 0);
        setDescription(data.description || "");
        setCategory(data.category || "");
        setBrand(data.brand || "");
        setRating(data.rating || 0);
        setSold(data.sold || 0);
        setImage(data.image || "");

        // cek apakah variants ada dan berbentuk array
        if (Array.isArray(data.variants)) {
          setVariants(
            data.variants.map((v: { name: string; stock: number }) => ({
              name: v.name,
              stock: v.stock,
            }))
          );
        } else {
          setVariants([{ name: "", stock: 0 }]);
        }

        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch product:", error);
        setLoading(false);
      }
    };

    getProductById();
  }, [id]);

  const updateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/products/${id}`, {
        title,
        price,
        realPrice,
        description,
        variants, // ini array of { name, stock }
        category,
        brand,
        rating,
        sold,
        image,
      });
      navigate("/");
    } catch (err) {
      console.error("Failed to update product:", err);
    }
  };

  const Loading = () => {
    return (
      <div className="flex justify-between items-center h-96">
        <p className="text-gray-500">Loading data...</p>
      </div>
    );
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-lg mx-auto my-15 p-8 bg-white shadow shadow-slate-300">
      <h1 className="text-2xl font-bold text-slate-700 text-center">
        Edit Product Data
      </h1>
      <form onSubmit={updateProduct}>
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
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <InputForm
          label="Real Price"
          type="number"
          placeholder="Product Real Price"
          value={realPrice}
          onChange={(e) => setRealPrice(Number(e.target.value))}
        />
        <InputForm
          label="Description"
          type="text"
          placeholder="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <h3 className="text-lg font-semibold mt-6 mb-2 text-slate-700">
          Variants
        </h3>
        {variants.map((variant, index) => (
          <div key={index} className="flex gap-3 mb-3">
            <input
              type="text"
              placeholder="Variant Name (e.g. Black, White, ATX)"
              className="border p-2 w-1/2 rounded-md"
              value={variant.name}
              onChange={(e) => {
                const newVariants = [...variants];
                newVariants[index].name = e.target.value;
                setVariants(newVariants);
              }}
            />
            <input
              type="number"
              placeholder="Stock"
              className="border p-2 w-1/3 rounded-md"
              value={variant.stock}
              onChange={(e) => {
                const newVariants = [...variants];
                newVariants[index].stock = parseInt(e.target.value);
                setVariants(newVariants);
              }}
            />
            <button
              type="button"
              className="bg-red-500 text-white px-3 rounded-md"
              onClick={() =>
                setVariants(variants.filter((_, i) => i !== index))
              }
            >
              X
            </button>
          </div>
        ))}

        <button
          type="button"
          className="bg-green-500 text-white px-3 py-1 rounded-md"
          onClick={() => setVariants([...variants, { name: "", stock: 0 }])}
        >
          + Add Variant
        </button>

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
          onChange={(e) => setRating(Number(e.target.value))}
        />
        <InputForm
          label="Sold"
          type="number"
          placeholder="Product Sold"
          value={sold}
          onChange={(e) => setSold(Number(e.target.value))}
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
          Update
        </Button>
      </form>
      <div className="flex justify-end"></div>
    </div>
  );
};

export default EditProduct;
