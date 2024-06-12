import Image from "next/image";
import Link from "next/link";
import { Products } from "../../types/products";

const ProductCard = ({ products }: Products) => {
  return (
    <section className="px-4 py-6 flex flex-col gap-y-10 mx-auto lg:ml-0 lg:grid lg:grid-cols-3 xl:mr-auto xl:px-0 xl:grid-cols-4">
      {products &&
        products.map(
          ({ id, title, realPrice, fixedPrice, discount, colors }) => (
            <Link key={id} href="/" className="product-card">
              <div className="product-card__img">
                <Image
                  className="mix-blend-darken w-[170px]"
                  src={`/images/product${id > 12 ? id - 12 : id}.jpg`}
                  width={170}
                  height={170}
                  alt=""
                />
                <div className="flex items-center gap-x-1 absolute bottom-1 right-2 z-30">
                  {colors &&
                    colors.map(({ id, color }) => (
                      <span
                        key={id}
                        className={`inline-block w-[9px] h-[9px] rounded-full bg-[${color}]`}
                      ></span>
                    ))}
                </div>
              </div>
              <p className="text-[13px] leading-[1.72] self-start">{title}</p>
              <div className="flex items-center justify-end gap-x-2 mb-2">
                <span
                  className={`text-[14px] ${discount ? "line-through" : ""}`}
                >
                  {realPrice}
                </span>
                <span className="text-[13px] pt-[6px] pb-1 px-1 text-black bg-yellow rounded-sm">
                  %{discount && discount}
                </span>
              </div>
              <p className="text-dark self-end">
                {fixedPrice && fixedPrice}
                <span className="text-secondary text-[12px]"> تومان</span>
              </p>
            </Link>
          )
        )}
    </section>
  );
};

export default ProductCard;
