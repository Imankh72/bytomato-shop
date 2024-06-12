import CardSlider from "../CardSlider";

import { Product } from "../../types/products";
import Image from "next/image";
import Link from "next/link";
import { LeftArrow } from "../svgs/LeftArrow";

interface ProductsCategoryProps {
  title: string;
  image: string;
  products: Product[];
}

const ProductsCategory = ({
  title,
  image,
  products,
}: ProductsCategoryProps) => {
  return (
    <section className="flex flex-col justify-center items-center px-3 lg:flex-row lg:items-start lg:gap-x-3 lg:px-20">
      <div className="relative lg:w-[35%] lg:mt-5">
        <Image src={`/images/${image}`} width={345} height={464} alt={title} />
        <Link
          href="/"
          className="absolute left-3 top-5 z-20 text-light text-[14px] flex items-center gap-x-2 lg:text-[18px]"
        >
          بیشتر
          <div>
            <LeftArrow />
          </div>
        </Link>
        <p className="absolute top-4 right-3 z-20 text-light text-[24px]">
          {title}
        </p>
      </div>

      <CardSlider products={products} />
    </section>
  );
};

export default ProductsCategory;
