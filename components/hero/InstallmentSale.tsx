import Image from "next/image";
import Link from "next/link";

const InstallmentSale = () => {
  return (
    <div className="overflow-x-scroll flex-nowrap overflow-y-hidden flex items-center justify-between gap-x-3 pb-5">
      {categories.map(({ id, name, image }) => (
        <Link
          href={`/${image}`}
          key={id}
          className="flex flex-col gap-y-2 w-[120px] h-[120px]"
        >
          <div className="w-[95px] h-[95px]">
            <Image
              className="rounded-md"
              src={`/images/${image}.jpg`}
              width={95}
              height={95}
              alt={name}
            />
          </div>
          <p className="whitespace-nowrap">{name}</p>
        </Link>
      ))}
    </div>
  );
};

export default InstallmentSale;

const categories = [
  { id: 1, name: "کنسول بازی", image: "game-console" },
  { id: 2, name: "لپ تاپ", image: "laptop" },
  { id: 3, name: "گوشی موبایل", image: "mobile" },
  { id: 4, name: "تلوزیون", image: "tv" },
  { id: 5, name: "یخچال", image: "refrigerator" },
  { id: 6, name: "لباسشویی", image: "dishwasher" },
  { id: 7, name: "ظرفشویی", image: "washing-machine" },
  { id: 8, name: "بخاری", image: "gas-heater" },
  { id: 9, name: "هارد اکسترنال", image: "external-hard" },
];
