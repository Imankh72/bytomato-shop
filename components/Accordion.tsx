import { useState } from "react";
import Link from "next/link";

interface AccordionProps {
  data: { id: number; title: string; links: { id: number; link: string }[] }[];
}

const Accordion = ({ data }: AccordionProps) => {
  const [selected, setSelected] = useState<number>(1);

  const toggle = (id: number) => {
    if (selected === id) {
      return setSelected(null);
    }

    setSelected(id);
  };

  return (
    <div className="accordion">
      {data.map(({ id, title, links }) => (
        <div key={id}>
          <div
            className={`accordion__title ${selected === id ? "border-0" : ""}`}
            onClick={() => toggle(id)}
          >
            <h4>{title}</h4>
          </div>
          <div
            className={
              selected === id ? "accordion__content show" : "accordion__content"
            }
          >
            {links.map(({ id, link }) => (
              <Link key={id} href="/" className="block opacity-50">
                {link}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
