import Image from "next/image";

const Services = () => {
  return (
    <section className="pt-12 px-6 pb-[234px] lg:px-[180px] lg:pt-[150px] lg:pb-[35px]">
      <h2 className="heading--primary text-primary mb-6 lg:mb-[70px]">
        Services
      </h2>
      <div className="flex flex-col lg:flex-row lg:gap-x-6 ">
        <div className="flex flex-col gap-y-6 mb-6 lg:mb-0 lg:flex-1 lg:order-2 lg:-mt-32">
          <div className="services__card">
            <h3 className="services__card__title lg:mb-[30px]">
              Product <br /> Marketing
            </h3>
            <p className="services__card__text">
              Bringing your product to market including product positioning,
              product launch plan, ensuring customers understand your idea and
              drive the demand and usage of your product by promotes product and
              features to target audience. highlighting key features to attract
              customers and creating marketing campaigns for products.
            </p>
          </div>{" "}
          <div className="services__card">
            <h3 className="services__card__title lg:mb-[30px]">
              Consulting Team
            </h3>
            <p className="services__card__text">
              From concept to fruition including strategy, business design, user
              study and experience design and technology transformation.
            </p>
          </div>
        </div>
        <div className="flex-1 lg:order-1">
          <div className="services__card relative">
            <h3 className="services__card__title lg:mb-[60px]">
              Product Development Community
            </h3>
            <p className="services__card__text lg:pb-[140px]">
              We are a worldwide community and have network of talented
              multi-skills product heroes to help your business growth including
              development squads, mentorship and training, support and product
              strategy workgroups.
            </p>
            <div className="absolute w-[217px] -bottom-44 h-[211px] lg:w-[427px] lg:h-[417px] lg:-bottom-56 lg:-left-12">
              <Image
                src="/images/services.png"
                width={427}
                height={417}
                alt="tomato image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
