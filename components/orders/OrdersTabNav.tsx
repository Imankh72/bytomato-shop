import { useState } from "react";

const OrdersTabNav = () => {
  const [selected, setSelected] = useState<number>(1);

  const toggle = (id: number) => {
    if (selected === id) {
      return;
    }

    setSelected(id);
  };

  return (
    <ul className="flex flex-wrap items-center gap-x-1 cursor-pointer text-[14px] text-secondary mb-4 lg:flex-nowrap lg:gap-x-4">
      {data.map(({ id, title }) => (
        <li
          key={id}
          className={`px-4 py-1 rounded-3xl transition-all duration-300 ${
            selected === id ? "text-[#0082fd] bg-[#cce6fe]" : ""
          }`}
          onClick={() => toggle(id)}
        >
          {title}
        </li>
      ))}
    </ul>
  );
};

export default OrdersTabNav;

const data = [
  { id: 1, title: "همه" },
  { id: 2, title: "در انتظار پرداخت" },
  { id: 3, title: "جاری" },
  { id: 4, title: "لغو شده" },
  { id: 5, title: "در صف بررسی" },
  { id: 6, title: "تحویل داده شده" },
];
