import Image from "next/image";
import { FC } from "react";
import { Products } from "../../types/products";
import CardSlider from "../CardSlider";
import Timer from "./Timer";

const OnSale: FC<Products> = ({ products }) => {
  return (
    <div className="flex flex-col bg-primary py-3 lg:flex-row">
      <div className="flex justify-center items-center gap-x-2 text-white lg:items-start lg:pt-20 lg:text-2xl lg:w-[20%]">
        <Timer />
        <Image
          className="lg:mt-1"
          src="/images/timer.svg"
          width={13}
          height={20}
          alt="timer icon"
        />
      </div>
      <div className="lg:w-[80%] py-5 px-10">
        <CardSlider products={products} />
      </div>
    </div>
  );
};

export default OnSale;
