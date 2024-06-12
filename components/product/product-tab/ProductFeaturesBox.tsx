interface Prop {
  label?: string;
  value: string;
}

const ProductFeaturesBox = ({ label, value }: Prop) => {
  return (
    <div className="product-features__box">
      <div className={label ? "product-features__label" : "bg-white"}>
        {label}
      </div>
      <div className="product-features__value">{value}</div>
    </div>
  );
};

export default ProductFeaturesBox;
