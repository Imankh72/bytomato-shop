import BenefitCard from "./BenefitCard";

const Benefits = () => {
  return (
    <section className="flex  overflow-x-scroll gap-x-14 overflow-y-hidden border-t border-neutral-300 px-5 py-10 lg:overflow-hidden lg:px-10 lg:justify-center lg:gap-x-30 lg:py-10 lg:gap-x-32">
      {data.map(({ id, title, subtitle, image }) => (
        <BenefitCard key={id} title={title} subtitle={subtitle} image={image} />
      ))}
    </section>
  );
};

export default Benefits;

const data = [
  {
    id: 1,
    title: "10 روز ضمانت بازگشت",
    subtitle: "حتی سلیقه ای!",
    image: "benefit1.svg",
  },
  {
    id: 2,
    title: "امکان خرید اقساطی",
    subtitle: "بدون چک و ضامن",
    image: "benefit2.svg",
  },
  {
    id: 3,
    title: "تضمین اصالت کالا",
    subtitle: "واقعی!",
    image: "benefit3.svg",
  },
  {
    id: 4,
    title: "پشتیبانی تا 12 شب",
    subtitle: "حتی جمعه ها",
    image: "benefit4.svg",
  },
];
