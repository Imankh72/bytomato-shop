import { useState } from "react";
import ProductComments from "./ProductComments";
import ProductFeatures from "./ProductFeatures";
import ProductReview from "./ProductReview";
import ProductTabNav from "./ProductTabNav";

const ProductTab = () => {
  const [selected, setSelected] = useState<number>(3);

  const toggle = (id: number) => {
    if (selected === id) {
      return;
    }

    setSelected(id);
  };

  return (
    <section className="px-4 mb-4 lg:px-6 lg:mb-8">
      <div className="rounded-lg overflow-hidden border border-neutral-100 lg:pb-4">
        <ProductTabNav selected={selected} toggle={toggle} />
        {selected === 1 && <ProductReview />}
        {selected === 2 && <ProductFeatures />}
        {selected === 3 && <ProductComments />}
      </div>
    </section>
  );
};

export default ProductTab;
