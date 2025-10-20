import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getDetailProducts } from "../services/product.service";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { title, image, price, description, category, rating, sold, variant } =
    product;

  useEffect(() => {
    if (!id) return;
    getDetailProducts(id, (data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);

  if (loading)
    return (
      <div className="container justify-center items-center text-center h-full">
        <h1 className="p-10 bg-neutral-300">Loading...</h1>
      </div>
    );

  return (
    <div className="container mx-auto my-10 px-30">
      {product && (
        <div>
          <p className="mb-10">Product/Product Detail</p>
          <div className="grid grid-cols-2 gap-10">
            <div className="grid grid-cols-2">
              <div className="max-w-lg">
                <img src={image} alt={title} />
                <div className="flex flex-row mt-5 gap-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <img
                      key={i}
                      src={image}
                      alt={title}
                      className="w-20 h-20 rounded-2xl hover:border-2 hover:border-gray-600 p-2"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-6">
              <p className="text-md font-medium mb-3 text-neutral-400">
                {category}
              </p>
              <h1 className="text-2xl font-extrabold">{title}</h1>
              <div className="flex justify-between">
                <div className="flex gap-3 items-center">
                  <p className="text-sm font-semibold line-through">{price}</p>
                  <p className="text-xl font-extrabold">${price}</p>
                </div>
                <div className="flex justify-between gap-2">
                  <p className="text-lg font-normal text-neutral-400">
                    {sold} Sold
                  </p>
                  <p className="text-lg font-semibold">|</p>
                  <p className="text-lg font-semibold">⭐ {rating}</p>
                </div>
              </div>
              <hr className="border-2 border-dashed border-neutral-400" />
              <div>
                <p className="text-lg font-semibold">Description:</p>
                <p className="text-md font-normal mt-2 text-neutral-500">
                  {description.length > 300
                    ? description.substring(0, 300) + " " + "See more..."
                    : description + " "}
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold">Variant:</p>
                <p>{variant}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductDetailPage;
