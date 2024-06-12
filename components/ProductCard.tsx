import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { createUrl, imageLoader } from "../lib/imageLoader";
import { Products } from "../types/products";

const ProductCard: FC<Products> = ({ products }) => {
  return (
    <section className="px-4 py-6 flex flex-col gap-y-10 mx-auto lg:ml-0 lg:grid lg:grid-cols-3 xl:mr-auto xl:px-0 xl:grid-cols-4 xl:mb-20">
      {products &&
        products.map(
          ({
            id,
            title,
            discount,
            colors,
            imageUrl,
            sellingPrice,
            lastPrice,
            isAvailable,
          }) => (
            <Link
              key={id}
              href={`/products/${title.toLowerCase().split(" ").join("-")}`}
              className="product-card"
            >
              <div className="product-card__img">
                <Image
                  loader={imageLoader}
                  className="mix-blend-darken w-[170px]"
                  src={createUrl(imageUrl)}
                  width={170}
                  height={170}
                  alt=""
                />
                <div className="flex items-center gap-x-1 absolute bottom-1 right-2 z-30">
                  {/* {colors &&
                    colors.map(({ id, color }) => (
                      <span
                        key={id}
                        className={`inline-block w-[9px] h-[9px] rounded-full bg-[${color}]`}
                      ></span>
                    ))} */}
                </div>
              </div>
              <p className="text-[13px] leading-[1.72] self-start lg:h-[50px]">
                {title}
              </p>
              <div className="flex items-center justify-end gap-x-2 mb-2">
                <span
                  className={`text-[14px] ${discount ? "line-through" : ""}`}
                >
                  {lastPrice}
                </span>
                <span className="text-[13px] pt-[6px] pb-1 px-1 text-black bg-yellow rounded-sm">
                  %{discount}
                </span>
              </div>
              <div className="flex items-center justify-between text-secondary text-[12px]">
                <p className="text-dark self-end">
                  {sellingPrice && sellingPrice}
                  <span> تومان</span>
                </p>
                <p>
                  {!isAvailable && <span>در حال حاضر این کالا موجود نیست</span>}
                </p>
              </div>
            </Link>
          )
        )}
    </section>
  );
};

export default ProductCard;
