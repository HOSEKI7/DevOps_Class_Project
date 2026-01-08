import axios from "axios";
import type { Products } from "../types/products";

interface DetailProductsCallback {
  (data: Products[]): void;
}

export const getProducts = (callback: DetailProductsCallback): void => {
  axios
    .get<Products[]>("/api/products")
    .then((res) => callback(res.data))
    .catch((err: unknown) => console.log(err));
};

export const getDetailProducts = (
  id: number | string,
  callback: DetailProductsCallback
): void => {
  axios
    .get<Products[]>(`/api/products/${id}`)
    .then((res) => callback(res.data))
    .catch((err: unknown) => console.log(err));
};
