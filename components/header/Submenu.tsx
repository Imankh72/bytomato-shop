import Link from "next/link";
import { BsChevronLeft } from "react-icons/bs";

interface SubmenuProps {
  subTitles: {
    id: number;
    subTitle: string;
    brands: {
      id: number;
      name: string;
    }[];
  }[];
  setOpenMenu: (openMenu: boolean) => void;
}

const Submenu = ({ subTitles, setOpenMenu }: SubmenuProps) => {
  const handleLinkClick = () => {
    setOpenMenu(false);
    document.body.classList.remove("body-overflow");
  };

  return (
    <div className="submenu">
      {subTitles.map(({ id, subTitle, brands }) => (
        <div key={id}>
          <div className="submenu__title__container">
            <h6 className="submenu__title">{subTitle}</h6>
            <BsChevronLeft />
          </div>
          <ul className="submenu__links__container">
            {brands.map(({ id, name }) => (
              <li key={id} onClick={handleLinkClick}>
                <Link href="/" className="submenu__link">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Submenu;
