import Image from "next/image";
import Link from "next/link";

interface BenefitCardProps {
  title: string;
  subtitle?: string;
  image: string;
}

const BenefitCard = ({ title, subtitle, image }: BenefitCardProps) => {
  return (
    <Link href="/" className="flex px-10 lg:px-0 lg:justify-start lg:w-[220px]">
      <div className="w-1/3">
        <Image src={`/images/${image}`} width={40} height={40} alt={title} />
      </div>
      <div className="w-2/3">
        <h5 className="text-[14px] whitespace-nowrap font-bold text-grayDark">
          {title}
        </h5>
        {subtitle && (
          <p className="text-[12px] text-secondary whitespace-nowrap">
            {subtitle}
          </p>
        )}
      </div>
    </Link>
  );
};

export default BenefitCard;
