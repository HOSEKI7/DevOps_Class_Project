import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getDetailProducts } from "../services/product.service";
import Button from "../components/Elements/Button/button";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>({});
  const [loading, setLoading] = useState(true);

  const {
    title,
    image,
    price,
    realPrice,
    description,
    category,
    rating,
    sold,
    variants,
  } = product;

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
    <div className="container mx-auto my-10 px-30 flex justify-center">
      {Object.keys(product).length > 0 && (
        <div className="flex flex-col justify-center">
          <p className="mb-10">Product/Product Detail</p>
          <div className="flex mx-auto">
            <div className="max-w-lg w-full flex flex-col justify-center">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-contain"
              />
              <div className="flex flex-row mt-5 gap-2 justify-center">
                {Array.from({ length: 6 }).map((_, i) => (
                  <img
                    key={i}
                    src={image}
                    alt={title}
                    className="w-19 h-19 rounded-2xl hover:border-2 hover:border-gray-600 p-2 bg-neutral-100"
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col space-y-6 px-10">
              <p className="text-md font-medium mb-3 text-neutral-400">
                {category}
              </p>
              <h1 className="text-2xl font-extrabold">{title}</h1>
              <div className="flex justify-between">
                <div className="flex gap-3 items-center">
                  <p className="text-sm font-semibold line-through">
                    {realPrice?.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }) || price}
                  </p>
                  <p className="text-xl font-extrabold">
                    {price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </p>
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
                {Array.isArray(variants) && variants.length > 0 ? (
                  <div className="flex gap-2">
                    {variants.map(
                      (v: { id: number; name: string; stock: number }) => (
                        <button
                          key={v.id}
                          className="mt-2 px-3 py-2 rounded-xl border border-neutral-400 hover:border-green-600 hover:text-green-600 transition-colors active:bg-green-100 active:text-green-600"
                        >
                          {v.name}: ({v.stock})
                        </button>
                      )
                    )}
                  </div>
                ) : (
                  <span className="text-gray-400">No variants</span>
                )}
              </div>
              <div className="flex gap-5">
                <Button classname="bg-[#185839] w-50 text-white">
                  Add to cart
                </Button>
                <Button classname="bg-green-50 w-50 text-[#185839] border border-[#185839]">
                  Checkout Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductDetailPage;
