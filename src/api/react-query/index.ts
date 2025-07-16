import { Product } from "@/types";
import { queryOptions } from "@tanstack/react-query";
import { fetchData } from "..";

export const fetchProducts = async (): Promise<Product[]> => {
  //   const endpoint = "https://dummyjson.com/products";
  //   //   const { products } = await fetchData(endpoint);
  //   const response = await fetch(endpoint);
  //   if (!response.ok) {
  //     throw new Error("Failed to fetch products");
  //   }
  //   const products = await response.json();

  const endpoint = "https://dummyjson.com/products";
  const { products } = await fetchData(endpoint);

  if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(products));
  }

  return products;
};

export const fetchProductBySlug = async (
  slug: string
): Promise<Product | undefined> => {
  const products = await fetchProducts();
  return products.find((product) => product.slug === slug);
};

export default function createProductsQueryOptions() {
  return queryOptions({
    // queryKey: ["todos", id],
    // queryFn: () => getTodos(id),
    queryKey: ["porducts"],
    queryFn: fetchProducts,
    // enabled: on, //automatically run when on is true
    // needs two properties o wrok querykey and qery function
  });
}
