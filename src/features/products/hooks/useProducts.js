import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/getProducts";

export const useProducts = (page) => {
  return useQuery({
    queryKey: ["products", page],
    queryFn: () => getProducts(page),
    keepPreviousData: true,
  });
};