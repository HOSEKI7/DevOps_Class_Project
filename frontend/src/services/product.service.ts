import axios from "axios";
import type { Products } from "../types/products";

interface DetailProductsCallback {
  (data: Products[]): void;
}

// export const getProducts = async (): Promise<Products[]> => {
//   const res = await axios.get<Products[]>("https://fakestoreapi.com/products");
//   return res.data;
// };

export const getProducts = (callback: DetailProductsCallback): void => {
  axios
    .get<Products[]>("http://localhost:5000/products")
    .then((res) => callback(res.data))
    .catch((err: unknown) => console.log(err));
};

export const getDetailProducts = (
  id: number | string,
  callback: DetailProductsCallback
): void => {
  axios
    .get<Products[]>(`http://localhost:5000/products/${id}`)
    .then((res) => callback(res.data))
    .catch((err: unknown) => console.log(err));
};
