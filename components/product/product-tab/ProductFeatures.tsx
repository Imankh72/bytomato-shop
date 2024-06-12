import ProductFeaturesBox from "./ProductFeaturesBox";

const ProductFeatures = () => {
  return (
    <div className="text-grayDark px-4 py-6 flex flex-col gap-y-16 lg:px-8 lg:py-10">
      <div>
        <h3 className="product-features__title">مشخصات کلی</h3>
        <ProductFeaturesBox label="وزن" value="135 گرم" />
      </div>
      <div>
        <h3 className="product-features__title">مشخصات فنی</h3>
        <div className="flex flex-col gap-y-3">
          <ProductFeaturesBox label="نوع اتصال" value="بی‌سیم" />
          <ProductFeaturesBox label="نوع گوشی" value="دو گوشی" />
          <ProductFeaturesBox label="رابط" value="بلوتوث" />
          <ProductFeaturesBox label="نسخه‌ی بلوتوث" value="5.0" />
          <ProductFeaturesBox label="مقاومت در برابر آب" value="بله" />
          <ProductFeaturesBox
            label="اقلام همراه هدفون"
            value="دارای 3 سری در سایز مختلف"
          />
          <ProductFeaturesBox
            label="سایر مشخصات"
            value="باتری با ظرفیت: 80 میلی‌آمپرساعت"
          />
          <ProductFeaturesBox value="120 ساعت استدبای" />
          <ProductFeaturesBox value="مدت زمان پخش موسیقی: 8 ساعت" />
          <ProductFeaturesBox value="دارای آهن‌ربا" />
          <ProductFeaturesBox value="برد 10 متر" />
          <ProductFeaturesBox value="دارای فناوری کاهش نویز" />
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
