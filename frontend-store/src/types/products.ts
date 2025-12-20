// types/product.ts

export interface Products {
  id: number;
  title: string;
  price: number;
  realPrice?: number;
  description?: string;
  category: string;
  brand?: string;
  image: string;
  rating?: GLfloat;
  sold?: number;
}
