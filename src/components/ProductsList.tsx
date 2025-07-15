import { Product } from "@/types";
import ProductCard from "./shared/ProductCard";
import Container from "./Container";

type ProductsArray = {
  products: Product[];
};

const ProductsList = ({ products }: ProductsArray) => {
  return (
    <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products?.map((item) => (
        <ProductCard key={item?.id} product={item} />
      ))}
    </Container>
  );
};

export default ProductsList;
