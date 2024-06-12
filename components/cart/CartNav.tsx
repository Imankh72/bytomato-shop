import { BsCardText } from "react-icons/bs";
import useCartCount from "../../hooks/useCartCount";

const CartNav = () => {
  const { cartCount, cartTotal } = useCartCount();

  return (
    <div className="flex flex-col gap-y-3 items-center justify-between border-b border-neutral-100 pb-4 mb-4 lg:flex-row">
      <div className="flex items-center">
        <div className="text-[30px]">
          <BsCardText />
        </div>
        <span className="mr-4">ارسال کالاهای اکسپرس عادی</span>
        <span className="text-[13px] text-secondary mr-1">
          ({cartCount} کالا)
        </span>
      </div>
      <div className="flex items-center gap-x-4 text-secondary text-[13px]">
        <span>جمع کالاهای اکسپرس عادی:</span>
        <span>
          <span className="text-grayDark text-[18px]">{cartTotal}</span> تومان
        </span>
      </div>
    </div>
  );
};

export default CartNav;
