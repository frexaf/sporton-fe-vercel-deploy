import { fetchAPI } from "../lib/api";
import { Product } from "../types";

export const getAllProduct = async (): Promise<Product[]> => {
  return await fetchAPI<Product[]>("/products");
};

export const getProductDetails = async (id: string): Promise<Product> => {
  return await fetchAPI<Product>(`/products/${id}`);
};
