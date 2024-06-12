import ProductBenefitCard from "./ProductBenefitCard";
import { CalendarIcon } from "../svgs/CalendarIcon";
import { LifeBuoyIcon } from "../svgs/LifeBuoyIcon";
import { CheckBadgeIcon } from "../svgs/CheckBadgeIcon";
import { CreditCardIcon } from "../svgs/CreditCardIcon";

const ProductBenefits = () => {
  return (
    <section className="px-4 lg:px-6">
      <div className="bg-neutral-50 border border-neutral-200 rounded-lg flex flex-col gap-y-5 px-5 py-4 mb-4 lg:flex-row lg:items-center lg:justify-center lg:gap-x-40 lg:py-8 lg:mb-8">
        <ProductBenefitCard text="۱۰ روز ضمانت بازگشت">
          <CalendarIcon className="w-5 h-5 fill-yellow lg:w-6 lg:h-6" />
        </ProductBenefitCard>
        <ProductBenefitCard text="پشتیبانی تا ۱۲ شب، حتی جمعه‌ها">
          <LifeBuoyIcon className="w-5 h-5 fill-yellow lg:w-6 lg:h-6" />
        </ProductBenefitCard>
        <ProductBenefitCard text="تضمین اصالت کالا">
          <CheckBadgeIcon className="w-5 h-5 fill-yellow lg:w-6 lg:h-6" />
        </ProductBenefitCard>
        <ProductBenefitCard text="امکان خرید اقساطی">
          <CreditCardIcon className="w-5 h-5 fill-yellow lg:w-6 lg:h-6" />
        </ProductBenefitCard>
      </div>
    </section>
  );
};

export default ProductBenefits;
