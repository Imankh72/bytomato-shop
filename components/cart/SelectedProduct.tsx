import { FC } from "react";
import SelectedProductCounter from "./SelectedProductCounter";
import SelectedProductInfo from "./SelectedProductInfo";

interface SelectedProductProp {
  product: {
    productId: number;
    productName: string;
    productPictureUrl: string;
    payablePrice: number;
    quantity: number;
  };
}

const SelectedProduct: FC<SelectedProductProp> = ({
  product: {
    productName,
    productId,
    payablePrice,
    productPictureUrl,
    quantity,
  },
}) => {
  return (
    <div className="flex flex-col items-center gap-y-4 border-b border-neutral-200 py-4 justify-between last:border-none lg:flex-row lg:items-start lg:gap-x-5">
      <SelectedProductInfo title={productName} imageUrl={productPictureUrl} />
      <div className="flex gap-x-1">
        <p>{payablePrice}</p>
        <span className="text-[12px] text-secondary mt-1">تومان</span>
      </div>
      <div>
        <SelectedProductCounter quantity={quantity} id={productId} />
      </div>
    </div>
  );
};

export default SelectedProduct;
