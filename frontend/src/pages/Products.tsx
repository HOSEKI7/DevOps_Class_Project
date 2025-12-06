import { Fragment, useEffect, useState } from "react";

import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";
import type { Products } from "../types/products";

const ProductsPage = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    // Ambil data produk pakai callback
    getProducts((data: Products[]) => {
      console.log("fetched", data);
      setProducts(data);
    });
  }, []);

  return (
    <Fragment>
      <div className="mt-12 my-1">
        <h1 className="pl-2 text-xl font-semibold tracking-wider">
          MOST POPULAR PRODUCTS
        </h1>
      </div>
      <div className="flex gap-8">
        <div className="w-full my-6 flex flex-col">
          <div className="grid grid-cols-3 gap-6">
            {products.length > 0 &&
              products.map((product) => (
                <CardProduct key={product.id}>
                  <CardProduct.Header image={product.image} id={product.id} />
                  <CardProduct.Body
                    name={product.title}
                    category={product.category}
                    id={product.id}
                  >
                    {String(product.description)}
                  </CardProduct.Body>
                  <CardProduct.Footer
                    price={product.price ?? 0}
                    realPrice={product.realPrice ?? 0}
                    id={product.id}
                  />
                </CardProduct>
              ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center my-10">
        <button className="px-4 py-2 font-semibold rounded-md bg-[#185839] text-white cursor-pointer">
          Load More
        </button>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
