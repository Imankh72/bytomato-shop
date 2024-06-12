import { NextPage } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import DashboardPage from "../../components/DashboardPage";
import { createUrl, imageLoader } from "../../lib/imageLoader";
import {
  removeFavorite,
  selectFavoriteProducts,
} from "../../redux/slices/products";
import { AppDispatch } from "../../redux/store";

const Wishlist: NextPage = () => {
  const favoriteProducts = useSelector(selectFavoriteProducts);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  return (
    <DashboardPage>
      <div>
        <h2 className="text-[18px] font-bold text-grayDark mb-4">
          مورد علاقه ها
        </h2>
        {favoriteProducts.length > 0 && (
          <div className="p-2 flex flex-col gap-y-8 lg:flex-row lg:flex-wrap lg:gap-x-8">
            {favoriteProducts.map((p) => (
              <div
                key={p.id}
                className="flex flex-col items-center gap-y-4 border border-neutral-300 p-3 rounded-md lg:w-[340px]"
              >
                <Image
                  loader={imageLoader}
                  src={createUrl(p.imageUrl)}
                  width={312}
                  height={312}
                  alt={p.title}
                />
                <p>{p.title}</p>
                <span>{p.lastPrice} تومان</span>
                <div className="flex items-center gap-x-4">
                  <button
                    className="nav__btn nav__btn--primary"
                    onClick={() => router.push(`/products/${p.id}`)}
                  >
                    مشاهده محصول
                  </button>
                  <button
                    className="nav__btn border border-red text-red rounded-xl px-3 py-[6px] lg:hover:bg-red lg:hover:text-white"
                    onClick={() => dispatch(removeFavorite(p.id))}
                  >
                    حذف از مورد علاقه ها
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {favoriteProducts.length === 0 && (
          <div className="flex flex-col gap-y-5">
            <div className="text-[14px] text-grayDark">
              اطلاعاتی موجود نیست!
            </div>
          </div>
        )}
      </div>
    </DashboardPage>
  );
};

export default dynamic(() => Promise.resolve(Wishlist), { ssr: false });
