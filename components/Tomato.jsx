import Image from "next/image";
import { TomatoCircle } from "./svgs/TomatoCircle";
import { RedCircle } from "./svgs/RedCircle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Tomato = () => {
  return (
    <section className="px-6 pt-11 pb-12 overflow-hidden lg:py-[150px]">
      <div className="lg:px-[180px]">
        <h2 className="heading--secondary mb-4 lg:mb-10">
          TOMATO <span className="font-bold">Platform,</span>
        </h2>
        <p className="text--primary mb-12 lg:mb-[150px]">
          is a combination of experience, software and strategy planning. <br />{" "}
          Full customizable, scalable architecture and Easy to launch!
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-x-[14px]">
        <div className="lg:relative lg:inline-block">
          <div className="hidden lg:-translate-x-6 lg:block">
            <TomatoCircle />
          </div>
          <div className="hidden lg:block lg:absolute lg:top-1/2 lg:left-1/2 lg:translate-x-[-50%] lg:translate-y-[-50%] lg:w-[422px] lg:h-[400px]">
            <Image
              src="/images/tomato.png"
              width={422}
              height={400}
              alt="tomato image"
            />
          </div>
          <div className="hidden lg:block lg:absolute lg:right-28 lg:top-36">
            <RedCircle />
          </div>
          <div className="hidden lg:block lg:absolute lg:-right-4 lg:top-[29rem]">
            <RedCircle />
          </div>
          <div className="hidden lg:block lg:absolute lg:right-28 lg:bottom-[9rem]">
            <RedCircle />
          </div>
        </div>
        <div className="-translate-x-8 lg:hidden">
          <Image
            src="/images/tomatoImage.png"
            width={375}
            height={581}
            alt=""
          />
        </div>
        <div className="hidden lg:flex lg:mb-0 lg:mt-0 lg:flex-col lg:gap-y-[30px]">
          {data.map(({ id, title, text }) => (
            <article key={id} className="tomato__card">
              <h3 className="tomato__card__title">{title}</h3>
              <p className="tomato__card__text">{text}</p>
            </article>
          ))}
        </div>
        <div className="-mt-56 lg:hidden">
          <Swiper
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {data.map(({ id, title, text }) => (
              <SwiperSlide key={id} className="tomato__card">
                <h3 className="tomato__card__title">{title}</h3>
                <p className="tomato__card__text">{text}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Tomato;

const data = [
  {
    id: 1,
    title: "WHY",
    text: "Because you want to growth and need to expand your product/service sales channels and operations. You want more customers and provide best experience for them.",
  },
  {
    id: 2,
    title: "HOW",
    text: "You need a budget friendly strategy to manage your cost and time , scalable tools to grow your online business over time and experienced platform.",
  },
  {
    id: 3,
    title: "WHAT",
    text: "An experienced platform to moving forward and achieve big goals. The platform includes infrastructure, software, processes, mentorship and online business experience with professional community support.",
  },
];
