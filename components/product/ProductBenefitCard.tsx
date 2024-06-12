import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  text: string;
}

const ProductBenefitCard = ({ children, text }: Props) => {
  return (
    <div className="flex items-center gap-x-3">
      <div>{children}</div>
      <span className="text-grayDark text-[12px] lg:text-[14px]">{text}</span>
    </div>
  );
};

export default ProductBenefitCard;
