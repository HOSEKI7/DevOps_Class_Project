import { useState, useEffect } from "react";
import { Link } from "react-router";
import axios from "axios";

interface Product {
  id: string;
  title: string;
  price: number;
  realPrice: number;
  description: string;
  variants: string;
  category: string;
  brand: string;
  rating: number;
  sold: number;
  image: string;
}

const ProductList = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const deleteProduct = async (product: Product) => {
    try {
      await axios.delete(`http://localhost:5000/products/${product.id}`);
      // Untuk versi tanpa SWR, kita tidak memperbarui state secara langsung.
      // User harus refresh halaman untuk melihat perubahan.
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div className="my-6">
      {/* Tombol Add */}
      <div className="">
        <Link
          to="/add"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
        >
          Add New
        </Link>
      </div>

      {/* Wrapper tabel agar bisa di-scroll horizontal jika datanya lebar */}
      <div className="mt-4 overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-600 border-collapse">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4 text-center">No</th>
              <th className="py-3 px-6">Title</th>
              <th className="py-3 px-6">Price</th>
              <th className="py-3 px-6">Real Price</th>
              <th className="py-3 px-6">Description</th>
              <th className="py-3 px-6">Variant</th>
              <th className="py-3 px-6">Category</th>
              <th className="py-3 px-6">Brand</th>
              <th className="py-3 px-6">Image</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((product, index) => (
              <tr
                key={product.id}
                className="border-b hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="py-3 px-2 text-center font-medium text-gray-800">
                  {index + 1}
                </td>
                <td className="py-3 px-6 font-medium text-gray-900">
                  {product.title}
                </td>
                <td className="py-3 px-6">{product.price}</td>
                <td className="py-3 px-6">{product.realPrice}</td>
                <td className="py-3 px-6 text-gray-700 break-all">
                  {product.description}
                </td>
                <td className="py-3 px-6">
                  {Array.isArray(product.variants) &&
                  product.variants.length > 0 ? (
                    <ul>
                      {product.variants.map(
                        (v: { id: number; name: string; stock: number }) => (
                          <li key={v.id}>
                            {v.name} ({v.stock})
                          </li>
                        )
                      )}
                    </ul>
                  ) : (
                    <span className="text-gray-400">No variants</span>
                  )}
                </td>

                <td className="py-3 px-6">{product.category}</td>
                <td className="py-3 px-6">{product.brand}</td>
                <td className="py-3 px-6 break-all">{product.image}</td>

                <td className="py-3 px-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <Link
                      to={`/edit/${product.id}`}
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white py-1.5 rounded text-sm font-medium"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      onClick={() => deleteProduct(product)}
                      className="w-full bg-red-500 hover:bg-red-600 text-white py-1.5 rounded text-sm font-medium"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
