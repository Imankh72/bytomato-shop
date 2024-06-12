import { useState } from "react";

const Accordion = ({ data }) => {
  const [selected, setSelected] = useState(1);

  const toggle = (id) => {
    if (selected === id) {
      return setSelected(null);
    }

    setSelected(id);
  };

  return (
    <div className="accordion">
      {data.map(({ id, title, text }) => (
        <div key={id} className="accordion__item">
          <div className="accordion__title" onClick={() => toggle(id)}>
            <h4
              className={`${
                selected === id
                  ? "border-b-2 border-white font-bold"
                  : "opacity-50"
              }`}
            >
              {title}
            </h4>
          </div>
          <div
            className={
              selected === id ? "accordion__content show" : "accordion__content"
            }
          >
            <p>{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
