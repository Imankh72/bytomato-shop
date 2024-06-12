import Link from "next/link";
import { FC } from "react";
import AddToCartBtn from "../AddToCartBtn";
import { FlagIcon } from "../svgs/FlagIcon";
import AboutProduct from "./AboutProduct";
import ProductColors from "./ProductColors";
import ProductInfo from "./ProductInfo";
import ProductRating from "./ProductRating";
import { Product } from "../../types/products";

interface ProductDetailsProp {
  product: Product;
}

const ProductDetails: FC<ProductDetailsProp> = ({ product }) => {
  return (
    <div className="lg:flex-[1.6]">
      <h1 className="font-medium text-grayDark leading-[25px] mb-2 lg:text-[18px] lg:leading-[28px]">
        {product.title}
      </h1>
      <ProductInfo />
      <ProductRating />
      <ProductColors colors={colors} />
      <div className="mb-4">
        <span className="text-[32px]">
          {product.sellingPrice.toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })}
        </span>
        <span className="text-[14px] text-secondary mr-2">تومان</span>
      </div>
      <AboutProduct />
      <AddToCartBtn product={product} />
      <div className="mt-4">
        <Link
          href="/"
          className="flex items-center gap-x-2 text-[11px] text-secondary"
        >
          <FlagIcon className="w-[14px] h-4" />
          <span>گزارش قیمت بهتر برای این محصول</span>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;

const colors = [
  {
    id: 1,
    colorCode: "#fff",
    colorName: "سفید",
  },
  {
    id: 2,
    colorCode: "#000",
    colorName: "مشکی",
  },
  {
    id: 3,
    colorCode: "#007bff",
    colorName: "آبی",
  },
];
