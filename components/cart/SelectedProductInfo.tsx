import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { createUrl, imageLoader } from "../../lib/imageLoader";
import { ShieldCheckIon } from "../svgs/ShieldCheckIon";

interface SelectedProductInfoProp {
  title: string;
  imageUrl: string;
}

const SelectedProductInfo: FC<SelectedProductInfoProp> = ({
  title,
  imageUrl,
}) => {
  return (
    <div className="flex items-center gap-x-3 lg:items-start">
      <div className="bg-neutral-100">
        <Link
          className="w-[80px] inline-block"
          href={`/products/${title.toLowerCase().split(" ").join("-")}`}
        >
          <Image
            loader={imageLoader}
            className="mix-blend-darken"
            src={createUrl(imageUrl)}
            width={80}
            height={80}
            alt={title}
          />
        </Link>
      </div>
      <div className="flex flex-col gap-y-4 text-[13px] text-secondary">
        <p className="text-[14px] text-grayDark">{title}</p>
        <div className="flex items-center gap-x-5">
          <span className="bg-green inline-block w-4 h-4 rounded-sm"></span>
          <span>سبز</span>
        </div>
        <div className="flex items-center gap-x-4">
          <div>
            <ShieldCheckIon className="w-5 h-5" />
          </div>
          <span>گارانتی 18 ماهه شرکتی</span>
        </div>
      </div>
    </div>
  );
};

export default SelectedProductInfo;
