import { useState } from "react";

const ReviewsTabNav = () => {
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

export default ReviewsTabNav;

const data = [
  { id: 1, title: "در انتظار ثبت نظر" },
  { id: 2, title: "نظرات من" },
];
