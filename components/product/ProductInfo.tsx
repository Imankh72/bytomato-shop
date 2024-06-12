import Link from "next/link";

const ProductInfo = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="product__info__container">
        <span className="">برند:</span>
        <Link href="/" className="link">
          سامسونگ
        </Link>
        <span className="text-[13px] leading-[22px] text-[#fa953e] bg-[#fcead4] inline-block py-[2px] px-3 text-center rounded-3xl">
          غیر اصل
        </span>
      </div>
      <div className="product__info__container">
        <span className="">دسته بندی:</span>
        <Link href="/" className="link">
          کابل و مبدل
        </Link>
      </div>
    </div>
  );
};

export default ProductInfo;
