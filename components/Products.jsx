import { useState } from "react";
import Accordion from "./Accordion";

const Products = ({ productsRef }) => {
  const [selected, setSelected] = useState(1);

  const toggle = (id) => {
    if (selected === id) {
      return setSelected(id);
    }

    setSelected(id);
  };

  return (
    <section ref={productsRef}>
      <div className="products">
        <h2 className="heading--secondary font-black text-white mb-8 lg:mb-10">
          Products
        </h2>
        <div className="hidden lg:flex">
          <ul className="flex flex-col lg:gap-y-[25px] lg:w-[300px] lg:mr-[75px]">
            {data.map(({ id, title }) => (
              <li
                key={id}
                className={`products__title ${
                  selected === id ? "products__title--active" : ""
                }`}
                onClick={() => toggle(id)}
              >
                {title}
              </li>
            ))}
            <div></div>
            <div></div>
          </ul>
          <div className="products__line"></div>
          <div className="lg:flex-1">
            <p className="products__text">
              {selected === 1
                ? "Mobile first design platform including cross platform web application, Android and iOS. Hybrid architecture, fully customizable and all you need to sell more."
                : ""}
              {selected === 2
                ? "Mid-size fulfillment processes including inbound, outbound and inventory control. From shelves and item locating to order processing. supervision on your operations with business intelligence dashboards to find bottle neck and improve performance."
                : ""}
              {selected === 3
                ? "Scalable delivery management including courier management, live tracking, POD and COD and configurable transportation module to make integration with 3PLs (courier services)."
                : ""}
            </p>
          </div>
        </div>
        <div className="lg:hidden">
          <Accordion data={data} />
        </div>
      </div>
    </section>
  );
};

export default Products;

const data = [
  {
    id: 1,
    title: "Store Front",
    text: "Mobile first design platform including cross platform web application, Android and iOS. Hybrid architecture, fully customizable and all you need to sell more.",
  },
  {
    id: 2,
    title: "Fulfillment Center",
    text: "Mid-size fulfillment processes including inbound, outbound and inventory control. From shelves and item locating to order processing. supervision on your operations with business intelligence dashboards to find bottle neck and improve performance.",
  },
  {
    id: 3,
    title: "Delivery",
    text: "Scalable delivery management including courier management, live tracking, POD and COD and configurable transportation module to make integration with 3PLs (courier services).",
  },
];
