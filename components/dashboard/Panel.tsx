import Link from "next/link";
import { useRouter } from "next/router";
import {
  AiOutlineShopping,
  AiOutlineShop,
  AiOutlineEnvironment,
  AiOutlineComment,
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineLogout,
} from "react-icons/ai";

const Panel = () => {
  const router = useRouter();

  return (
    <div>
      <ul className="mb-6">
        <li>
          <Link
            className={`panel__link pb-6 border-b border-neutral-200 ${
              router.pathname === "/dashboard" ? "panel__link--active" : ""
            }`}
            href="/dashboard"
          >
            <AiOutlineShop className="panel__link__icon" />
            <span className="panel__link__text">پیشخوان</span>
          </Link>
        </li>
      </ul>
      <ul className="flex flex-col gap-y-4 pb-6 border-b border-neutral-200 mb-6">
        <li>
          <Link
            className={`panel__link ${
              router.pathname === "/dashboard/orders"
                ? "panel__link--active"
                : ""
            }`}
            href="/dashboard/orders"
          >
            <AiOutlineShopping className="panel__link__icon" />
            <span className="panel__link__text">سفارش ها</span>
          </Link>
        </li>
        <li>
          <Link
            className={`panel__link ${
              router.pathname === "/dashboard/reviews"
                ? "panel__link--active"
                : ""
            }`}
            href="/dashboard/reviews"
          >
            <AiOutlineComment className="panel__link__icon" />
            <span className="panel__link__text">نظرات</span>
          </Link>
        </li>
        <li>
          <Link
            className={`panel__link ${
              router.pathname === "/dashboard/addresses"
                ? "panel__link--active"
                : ""
            }`}
            href="/dashboard/addresses"
          >
            <AiOutlineEnvironment className="panel__link__icon" />
            <span className="panel__link__text">نشانی ها</span>
          </Link>
        </li>
        <li>
          <Link
            className={`panel__link ${
              router.pathname === "/dashboard/wishlist"
                ? "panel__link--active"
                : ""
            }`}
            href="/dashboard/wishlist"
          >
            <AiOutlineHeart className="panel__link__icon" />
            <span className="panel__link__text">مورد علاقه های من</span>
          </Link>
        </li>
        <li>
          <Link
            className={`panel__link ${
              router.pathname === "/dashboard/profile"
                ? "panel__link--active"
                : ""
            }`}
            href="/dashboard/profile"
          >
            <AiOutlineUser className="panel__link__icon" />
            <span className="panel__link__text">اطلاعات حساب کاربری</span>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link className="panel__link" href="/auth/logout">
            <AiOutlineLogout className="panel__link__icon" />
            <span className="panel__link__text">خروج</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Panel;
