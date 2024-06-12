import Link from "next/link";
import { FC, useEffect, useState } from "react";
import Submenu from "./Submenu";
import {
  BsGift,
  BsQuestionCircle,
  BsCart2,
  BsChevronDown,
} from "react-icons/bs";
import HamburgerMenuButton from "./HamburgerMenuButton";
import useCartCount from "../../hooks/useCartCount";
import { fetchCategories } from "../../redux/slices/categories";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import SearchInput from "../SearchInput";
import axios from "axios";

const Header: FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [user, setUser] = useState(null);

  const dispatch = useDispatch<AppDispatch>();
  const categoriesSlice = useSelector((state: RootState) => state.categories);
  const { cartCount } = useCartCount();

  useEffect(() => {
    (async () => {
      await dispatch(fetchCategories());
      await axios.post("/api/login");
      const { status } = await axios("/api/user");
      if (status === 200) setUser("ایمان");
    })();
  }, [dispatch]);

  return (
    <header className="main-size px-2 py-3 border-b border-neutral-300 relative lg:px-0">
      <nav className="flex flex-col gap-y-4 mb-4 lg:flex-row lg:justify-between">
        <div className="flex items-center gap-x-4 lg:flex-1">
          <div>
            <Link href="/" className="text-primary text-xl">
              فروشگاه
            </Link>
          </div>
          <div className="w-full lg:w-1/2">
            <SearchInput placeholder="جستجو ..." />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <HamburgerMenuButton
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />
          </div>
          <div className="nav__link">
            <button className="nav__btn nav__btn--primary">
              در اینجا بفروش!
            </button>
          </div>
          <div className="nav__link">
            <BsGift className="fill-green w-6 h-6" />
          </div>
          <div className="nav__link">
            <BsQuestionCircle className="fill-black w-6 h-6" />
          </div>
          <div className="nav__link">
            {!user && <button className="nav__btn">ورود/ثبت نام</button>}
            {user && <span>{user}</span>}
          </div>
          <Link
            href="/cart"
            className="pr-2 h-8 flex justify-center items-center relative lg:cursor-pointer"
          >
            <BsCart2 className="fill-blue w-6 h-6" />
            <div
              className={`w-4 h-4 text-[10px] flex justify-center items-center text-white rounded-md absolute right-0 bottom-0 ${
                cartCount === 0
                  ? "bg-red"
                  : cartCount === 1
                  ? "bg-warning"
                  : "bg-green"
              }`}
            >
              {cartCount}
            </div>
          </Link>
        </div>
      </nav>
      <ul
        className={`nav__menu__container ${
          openMenu ? "right-0 opacity-100" : "-right-full opacity-0"
        } md:opacity-100`}
      >
        {!categoriesSlice.loading &&
          categoriesSlice.categories.length > 0 &&
          categoriesSlice.categories.map(({ id, title }) => (
            <li key={id} className="menu__category">
              <Link href="/" className="menu__link">
                {title}
              </Link>
              <BsChevronDown className="arrow-down" />
              {/* <Submenu subTitles={subTitles} setOpenMenu={setOpenMenu} /> */}
            </li>
          ))}
      </ul>
    </header>
  );
};

export default Header;
