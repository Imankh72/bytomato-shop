import Link from "next/link";
import { ExclamationIcon } from "../svgs/ExclamationIcon";

const AboutProduct = () => {
  return (
    <div className="text-secondary  text-[12px] flex flex-col gap-y-2 mb-4">
      <h6 className="text-black">ویژگی‌های ﻣﺤﺼﻮل :</h6>
      <div className="flex items-center gap-x-1">
        <span>نوع رابط :</span>
        <span>USB</span>
      </div>
      <div>
        <span>طول کابل :</span>
        <span>2 سانتی متر</span>
      </div>
      <p>
        مناسب برای : اتصال فلش دیسک ، هارد اکسترنال ، کیبورد ، ماوس ، دسته‌ی
        بازی ، رم ریدر ، حتی پرینتر و...
      </p>
      <Link href="/" className="link my-2">
        توضیحات بیشتر
      </Link>
      <div className="py-4 px-2 rounded-lg border border-slate-300 flex items-center gap-x-2">
        <div>
          <ExclamationIcon />
        </div>
        <p className="text-[14px] text-black">
          بازگشت کالا در گروه "کابل و مبدل" و با دلیل "انصراف از خرید"، فقط در
          صورت بازنشدن پلمب کالا امکان‌پذیر است.
        </p>
      </div>
    </div>
  );
};

export default AboutProduct;
