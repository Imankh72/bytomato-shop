import { useState, useEffect, FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { RightArrowSlider } from "./svgs/RightArrowSlider";
import { LeftArrowSlider } from "./svgs/LeftArrowSlider";
import { Banner } from "../types/banners";

interface SliderProps {
  banners: Banner[];
}

const Slider: FC<SliderProps> = ({ banners }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const toPreviousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? banners.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const toNextSlide = () => {
    const isLastSlide = currentIndex === banners.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (id: number) => {
    setCurrentIndex(id - 1);
  };

  const imageLoader = ({ src }: any) => {
    return `http://103.75.196.169:8090/Images/Banners/${src}`;
  };

  useEffect(() => {
    const sliderLoop = setInterval(() => {
      if (currentIndex === banners.length - 1) {
        setCurrentIndex(-1);
      }
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 4000);
    return () => clearInterval(sliderLoop);
  }, [currentIndex, banners.length]);

  return (
    <div className="w-[100vw] transition-all duration-300 lg:h-full">
      <div className="h-full relative transition-all duration-300">
        <div className="arrow-slider right-1" onClick={toPreviousSlide}>
          <RightArrowSlider className="stroke-[#fff] w-4 h-4 lg:w-10 lg:h-10" />
        </div>
        <Link href="/" className="transition-all duration-300 select-none">
          <Image
            loader={imageLoader}
            src={banners[currentIndex].imageOriginalUrl.split("/Banners")[1]}
            className="transition-all duration-300 rounded-md overflow-hidden"
            width={1231}
            height={280}
            alt=""
          />
        </Link>
        <div className="arrow-slider left-1" onClick={toNextSlide}>
          <LeftArrowSlider className="stroke-[#fff] w-4 h-4 lg:w-10 lg:h-10" />
        </div>
        <div className="flex justify-center items-center gap-x-2 absolute bottom-1 z-10 left-1/2 translate-x-[-50%] lg:bottom-3">
          {banners.map(({ id }) => (
            <div
              key={id}
              className={`w-2 h-2 lg:w-4 lg:h-4 rounded-full cursor-pointer ${
                id - 21 === currentIndex ? "bg-neutral-500" : "bg-neutral-300"
              }`}
              onClick={() => goToSlide(id - 20)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
