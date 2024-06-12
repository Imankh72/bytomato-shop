import Image from "next/image";
import { ArrowTop } from "./svgs/ArrowTop";

const Hero = ({ productsRef }) => {
  // Scroll To Products Section
  const handleClick = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section>
      <div className="background-gradient text-white flex flex-col px-6 py-10 rounded-br-[100px] lg:flex-row lg:pl-[180px] lg:pt-[120px] lg:pb-[111px] lg:rounded-br-[400px]">
        <div className="w-[158px] h-[151px] mb-8 lg:w-[428px] lg:h-[409px] lg:flex-1 lg:order-2 lg:-mt-14 lg:rounded-br-full">
          <Image
            src="/images/hero.png"
            width={428}
            height={409}
            alt="tomato image"
          />
        </div>
        <div className="lg:flex-1 lg:order-1">
          <h1 className="heading--primary">
            AN EXPERIENCE <br /> TO GROWTH
          </h1>
          <p className="text--primary mb-8 lg:mb-[110px]">
            The platform to start, run and growth your online business. It will
            reducing barriers to achieve targets and you only need to focus on
            sales and revenue.
          </p>
          <div>
            <button
              className="flex items-center gap-x-3 text-[12px] leading-[20px] lg:text-[16px] lg:leading-[24px]"
              onClick={handleClick}
            >
              Scroll Down{" "}
              <div>
                <ArrowTop />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
