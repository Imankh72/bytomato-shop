import Image from "next/image";
import Link from "next/link";
import { Products } from "../../types/products";
import CardSlider from "../CardSlider";
import { LeftArrow } from "../svgs/LeftArrow";

const DiscountedProducts = ({ products }: Products) => {
  return (
    <section className="px-4 lg:px-20">
      <div className="flex items-center justify-between mb-6 lg:mb-12">
        <div className="flex items-center gap-x-1 transition-all">
          <Image
            src="/images/fire.svg"
            className="fire-icon"
            width={36}
            height={37}
            alt="fire"
          />
          <h2 className="discounted-products__title">کالاهای تخفیف دار</h2>
        </div>
        <Link
          href="/"
          className="text-[14px] flex items-center gap-x-2 lg:text-[16px]"
        >
          مشاهده بیشتر{" "}
          <div>
            <LeftArrow />
          </div>
        </Link>
      </div>
      <CardSlider products={products} />
    </section>
  );
};

export default DiscountedProducts;
