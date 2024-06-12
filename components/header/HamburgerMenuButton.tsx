interface Props {
  openMenu: boolean;
  setOpenMenu: (openMenu: boolean) => void;
}

const HamburgerMenuButton = ({ openMenu, setOpenMenu }: Props) => {
  const handleClick = () => {
    setOpenMenu(!openMenu);
    document.body.classList.toggle("body-overflow");
  };

  return (
    <button className="hamburger-menu__container" onClick={handleClick}>
      <span
        className={`hamburger-menu__line ${openMenu ? "rotate-right" : ""}`}
      ></span>
      <span
        className={`hamburger-menu__line ${openMenu ? "opacity-0" : ""}`}
      ></span>
      <span
        className={`hamburger-menu__line ${openMenu ? "rotate-left" : ""}`}
      ></span>
    </button>
  );
};

export default HamburgerMenuButton;
