import Link from "next/link";
import useCartCount from "../../hooks/useCartCount";

const CartPriceBox = () => {
  const { cartCount, cartTotal } = useCartCount();

  return (
    <div className="bg-white rounded-md p-4">
      <div className="flex items-center justify-between border-b border-neutral-300 pb-3">
        <div className="flex items-center gap-x-1 text-grayDark text-[14px]">
          <span>قیمت کالاها</span>
          <span>({cartCount})</span>
        </div>
        <div className="flex items-center gap-x-1">
          <span>{cartTotal}</span>
          <span className="text-[12px] text-secondary">تومان</span>
        </div>
      </div>
      <div className="py-3 border-b border-neutral-300">
        <p className="text-[12px] text-secondary">
          ﻫﺰﯾﻨﻪ ارﺳﺎل در اداﻣﻪ ﺑﺎ ﻣﺸﺨﺺ ﺷﺪن آدرس، زﻣﺎن و ﻧﺤﻮه ارﺳﺎل ﻣﺸﺨﺺ و ﺑﻪ
          ﻫﺰﯾﻨﻪ ﻧﻬﺎﯾﯽ اﺿﺎﻓﻪ ﺧﻮاﻫﺪ ﺷﺪ.
        </p>
      </div>
      <div className="flex items-center justify-between py-3 mb-5">
        <span>جمع سبد خرید</span>
        <div className="flex items-center gap-x-1">
          <span className="text-[18px]">{cartTotal}</span>
          <span className="text-[12px] text-secondary">تومان</span>
        </div>
      </div>
      <div>
        <Link
          href="/order"
          className="flex items-center justify-center w-full h-12 text-[14px] rounded-[5px] text-white bg-blue px-4 cursor-pointer"
        >
          ادامه فرایند خرید
        </Link>
      </div>
    </div>
  );
};

export default CartPriceBox;
