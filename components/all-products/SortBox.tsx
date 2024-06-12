import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Product } from "../../types/products";
import { SortIcon } from "../svgs/SortIcon";

interface SortBoxProp {
  products: Product[];
}

const SortBox: FC<SortBoxProp> = ({ products }) => {
  const [selected, setSelected] = useState<number>(1);
  const filteredProducts = useSelector(
    (state: RootState) => state.products.filteredProducts
  );

  const toggle = (id: number) => {
    if (selected === id) return setSelected(null);
    setSelected(id);
  };

  return (
    <div className="px-4 lg:px-6 xl:px-2">
      <div className="flex justify-between items-center p-3 border-2 border-neutral-200 rounded-md xl:gap-x-10">
        <div className="flex items-center gap-x-3">
          <SortIcon />
          <span className="text-[13px] whitespace-nowrap">ترتیب نمایش:</span>
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-x-1 lg:cursor-pointer xl:gap-x-5">
          {sortCategory.map(({ id, category }) => (
            <span
              key={id}
              className={`sort-category__option ${
                selected === id ? "sort-category__option--active" : ""
              }`}
              onClick={() => toggle(id)}
            >
              {category}
            </span>
          ))}
        </div>
        <div className="text-[12px] text-secondary flex gap-x-1">
          <span>
            {filteredProducts.length > 0
              ? filteredProducts.length
              : products.length}
          </span>
          <span> کالا</span>
        </div>
      </div>
    </div>
  );
};

export default SortBox;

const sortCategory = [
  { id: 1, category: "پربازدید‌ها" },
  { id: 2, category: "ارزان‌ترین" },
  { id: 3, category: "گران ترین" },
  { id: 4, category: "پرفروش ترین" },
  { id: 5, category: "جدیدترین" },
  { id: 6, category: "سریع ترین ارسال!" },
  { id: 7, category: "تخفیف دار" },
];
