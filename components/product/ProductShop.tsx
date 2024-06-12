import Link from "next/link";
import { BellIcon } from "../svgs/BellIcon";
import { ShieldCheckIon } from "../svgs/ShieldCheckIon";
import { StoreIcon } from "../svgs/StoreIcon";

const ProductShop = () => {
  return (
    <div className="text-[12px] text-secondary lg:flex-1">
      <div className="border border-neutral-200 rounded-lg mb-3">
        <div className="flex items-center gap-x-4 bg-neutral-100 w-full h-full p-4">
          <div>
            <StoreIcon className="w-5 h-5 fill-warning stroke-black" />
          </div>
          <div className="flex items-center gap-x-1 mt-1">
            <span>فروشنده:</span>
            <Link href="/" className="text-[13px] link">
              فروشگاه هزارتو
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-x-4 p-4">
          <div>
            <ShieldCheckIon className="w-5 h-5" />
          </div>
          <span>اصالت و سلامت فیزیکی کالا</span>
        </div>
        <div className="flex items-center gap-x-4 p-4 pt-0">
          <div>
            <BellIcon className="w-5 h-5" />
          </div>
          <span>تامین کالا از 4 روز کاری آینده</span>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <span>شما هم این محصول را برای فروش دارید؟</span>
        <Link href="/" className="link">
          فروشنده شوید.
        </Link>
      </div>
    </div>
  );
};

export default ProductShop;
