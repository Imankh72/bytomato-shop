import { useState } from "react";
import ProgressBox from "./ProgressBox";
import StarsBox from "./StarsBox";
import UsersCommentsBox from "./UsersCommentsBox";
import UsersCommentsNav from "./UsersCommentsNav";

const ProductComments = () => {
  const [selected, setSelected] = useState<number>(1);

  const toggle = (id: number) => {
    if (selected === id) {
      return;
    }

    setSelected(id);
  };

  return (
    <div className="px-4 py-6 lg:px-8 lg:py-10">
      <div className="flex flex-col gap-y-7 mb-20 lg:flex-row lg:gap-x-52">
        <div className="lg:flex-1">
          <h2 className="mb-4 lg:text-[18px]">
            چطور می‌توانم در مورد این کالا نظر بدهم؟
          </h2>
          <p className="text-secondary text-[14px] leading-[32px] mb-4">
            اگر این محصول را از تیمچه خریداری کرده‌اید و یا تجربه استفاده از آن
            را دارید، می‌توانید با زدن بر روی دکمه زیر، نظر خود ثبت کنید.
          </p>
          <button className="inline-block text-center px-[60px] rounded-[10px] text-white bg-blue leading-[48px]">
            افزودن نظر جدید
          </button>
        </div>
        <div className="lg:flex-1">
          <div className="flex items-center gap-x-3 mb-4">
            <span className="text-[24px]">4.8</span>
            <StarsBox />
            <span className="text-[14px] text-secondary">از 25 نفر</span>
          </div>
          <ProgressBox />
        </div>
      </div>
      <div>
        <UsersCommentsNav selected={selected} toggle={toggle} />
        <UsersCommentsBox />
      </div>
    </div>
  );
};

export default ProductComments;
