import { FC, useState } from "react";
import SearchInput from "../../SearchInput";
import ViewAllBtn from "../../ViewAllBtn";
import BrandsSort from "./BrandsSort";
import Filter from "./Filter";
import PriceRangeSlider from "./PriceRangeSlider";
import ResultsGrouping from "./ResultsGrouping";
import StatusProductsSort from "./StatusProductsSort";

const Sidebar: FC = () => {
  const [showAllCategories, setShowAllCategories] = useState<boolean>(false);

  return (
    <aside className="hidden lg:block lg:pr-10 xl:pr-20 py-5">
      <ResultsGrouping showAllCategories={showAllCategories} />
      <div className="sidebar-box__container">
        <ViewAllBtn clickHandler={setShowAllCategories} />
      </div>
      <div className="mt-10 mb-2">
        <Filter />
      </div>
      <div className="sidebar-box__container">
        <h2 className="sidebar-box__title">جستجو</h2>
        <SearchInput placeholder="کالای مورد نظر را جستجو کنید" />
      </div>
      <div className="sidebar-box__container">
        <h2 className="sidebar-box__title">برند</h2>
        <SearchInput placeholder="نام برند مورد نظر را جستجو کنید" />
        <BrandsSort />
        <ViewAllBtn />
      </div>
      <StatusProductsSort title="فقط کالاهای موجود" />
      <StatusProductsSort title="فقط کالاهای اصل" />
      <StatusProductsSort title="فقط تخفیف دار" />
      <div className="pt-6 pb-14 border-b border-[#d9d9d9]">
        <h2 className="leading-[24px] mb-4">محدوده قیمت</h2>
        <PriceRangeSlider min={200} max={1200} />
      </div>
    </aside>
  );
};

export default Sidebar;
