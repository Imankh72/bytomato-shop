import Image from "next/image";
import Link from "next/link";

const Cosmetics = () => {
  return (
    <section className="py-10 px-4 flex flex-col gap-y-6 items-center max-w-[1140px] mx-auto lg:flex-row lg:gap-x-6 ">
      <div className="lg:w-[29.3%]">
        <Link href="/">
          <Image
            className="rounded-xl"
            src="/images/cosmetic1.jpg"
            width={324}
            height={533}
            alt=""
          />
        </Link>
      </div>
      <div className="lg:w-[68.7%] flex flex-col gap-y-6">
        <div className="flex flex-col items-center gap-y-6 h-full lg:flex-row lg:items-center lg:justify-between lg:gap-x-6">
          <Link href="/">
            <Image
              className="rounded-xl"
              src="/images/cosmetic2.jpg"
              width={268}
              height={254}
              alt=""
            />
          </Link>
          <Link href="/">
            <Image
              className="rounded-xl"
              src="/images/cosmetic3.jpg"
              width={468}
              height={254}
              alt=""
            />
          </Link>
        </div>
        <div className="flex flex-col items-center gap-y-6 lg:flex-row lg:items-center lg:justify-between lg:gap-x-6">
          <Link href="/" className="w-full h-full">
            <Image
              className="rounded-xl"
              src="/images/cosmetic4.jpg"
              width={414}
              height={254}
              alt=""
            />
          </Link>
          <Link href="/" className="lg:w-[80%] h-full">
            <Image
              className="rounded-xl"
              src="/images/cosmetic5.jpg"
              width={322}
              height={254}
              alt=""
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cosmetics;
