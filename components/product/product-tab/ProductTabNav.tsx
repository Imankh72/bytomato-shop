import { BsCardList, BsCollectionPlay } from "react-icons/bs";
import { CommentIcon } from "../../svgs/CommentIcon";

interface Props {
  selected: number;
  toggle: (id: number) => void;
}

const ProductTabNav = ({ selected, toggle }: Props) => {
  return (
    <div className="bg-neutral-50 flex items-center justify-center gap-x-8 text-[13px] text-secondary lg:gap-x-20 lg:text-[15px]">
      <div
        className={`product-tab__nav__item ${
          selected === 1 ? "product-tab__nav__item--active" : ""
        }`}
        onClick={() => toggle(1)}
      >
        <div>
          <BsCollectionPlay />
        </div>
        <span>نقد و بررسی</span>
      </div>
      <div
        className={`product-tab__nav__item ${
          selected === 2 ? "product-tab__nav__item--active" : ""
        }`}
        onClick={() => toggle(2)}
      >
        <div>
          <BsCardList />
        </div>
        <span>مشخصات</span>
      </div>
      <div
        className={`product-tab__nav__item ${
          selected === 3 ? "product-tab__nav__item--active" : ""
        }`}
        onClick={() => toggle(3)}
      >
        <div>
          <CommentIcon className="w-[18px] h-[18px]" />
        </div>
        <span>نظر کاربران</span>
      </div>
    </div>
  );
};

export default ProductTabNav;
