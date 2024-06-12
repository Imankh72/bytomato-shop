import Link from "next/link";
import CardSlider from "./CardSlider";
import { LeftArrow } from "./svgs/LeftArrow";
import { Product } from "../types/products";

interface ProductsListProps {
  products: Product[];
  productsTitle: string;
}

const ProductsList = ({ products, productsTitle }: ProductsListProps) => {
  return (
    <section className="lg:px-20 lg:py-10">
      <div className="flex items-center justify-between px-3 mb-4">
        <h2 className="text-[20px] lg:text-[24px]">{productsTitle}</h2>
        <Link
          href={`/categories/${productsTitle
            .toLowerCase()
            .split(" ")
            .join("-")}`}
          className="text-[14px] flex items-center gap-x-2 lg:text-[16px]"
        >
          مشاهده بیشتر
          <div>
            <LeftArrow />
          </div>
        </Link>
      </div>
      <CardSlider products={products} />
    </section>
  );
};

export default ProductsList;
