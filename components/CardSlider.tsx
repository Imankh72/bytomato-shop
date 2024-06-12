import Link from "next/link";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useScreenWidth from "../hooks/useScreenWidth";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import { Product } from "../types/products";
import { createUrl, imageLoader } from "../lib/imageLoader";

interface CardSliderProps {
  products: Product[];
}

const CardSlider: FC<CardSliderProps> = ({ products }) => {
  const [navigation, setNavigation] = useState<boolean>(true);
  const screenWidth = useScreenWidth();

  useEffect(() => {
    screenWidth > 1024 ? setNavigation(true) : setNavigation(false);
  }, [navigation, screenWidth]);

  return (
    <Swiper
      slidesPerView={screenWidth < 768 ? 1 : 4}
      spaceBetween={0}
      navigation={navigation}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {products.map(
        ({ id, title, discount, colors, imageUrl, realPrice, lastPrice }) => (
          <SwiperSlide key={id}>
            <Link
              href={`/products/${title.toLowerCase().split(" ").join("-")}`}
              className="flex flex-col text-secondary w-[85%] h-full rounded-lg overflow-hidden"
            >
              <div className="flex justify-center items-center h-[270px] rounded-lg bg-neutral-100 mb-2 relative">
                <Image
                  loader={imageLoader}
                  className="mix-blend-darken w-[170px]"
                  src={createUrl(imageUrl)}
                  width={170}
                  height={170}
                  alt=""
                />
                {/* <div className="flex items-center gap-x-1 absolute bottom-1 right-2 z-30">
                  {colors &&
                    colors.map(({ id, color }) => (
                      <span
                        key={id}
                        className={`inline-block w-[9px] h-[9px] rounded-full bg-[${color}]`}
                      ></span>
                    ))}
                </div> */}
              </div>
              <p className="text-[13px] leading-[1.72] self-start h-[50px]">
                {title}
              </p>
              <div className="flex items-center justify-end gap-x-2 mb-2">
                <span className="text-[14px] line-through">{realPrice}</span>
                <span className="text-[13px] pt-[6px] pb-1 px-1 text-black bg-yellow rounded-sm">
                  %{discount && discount}
                </span>
              </div>
              <p className="text-dark self-end">
                {lastPrice && lastPrice}
                <span className="text-secondary text-[12px]"> تومان</span>
              </p>
            </Link>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

export default CardSlider;
