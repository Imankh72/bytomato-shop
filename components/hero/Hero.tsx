import { FC } from "react";
import { Banner } from "../../types/banners";
import Slider from "../Slider";
import InstallmentSale from "./InstallmentSale";

interface HeroProps {
  banners: Banner[];
}

const Hero: FC<HeroProps> = ({ banners }) => {
  return (
    <section className="px-4 py-6 lg:px-6">
      <div className="flex justify-center mb-10">
        <Slider banners={banners} />
      </div>
      <InstallmentSale />
    </section>
  );
};

export default Hero;
