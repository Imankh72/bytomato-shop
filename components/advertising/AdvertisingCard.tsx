import Image from "next/image";
import Link from "next/link";

interface props {
  image: string;
  width: number;
  height: number;
}

const AdvertisingCard = ({ image, width, height }: props) => {
  return (
    <Link href="/">
      <Image
        className="rounded-2xl"
        src={`/images/${image}`}
        width={width}
        height={height}
        alt={image}
      />
    </Link>
  );
};

export default AdvertisingCard;
