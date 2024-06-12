import AdvertisingCard from "./AdvertisingCard";

interface AdvertisingProps {
  images: {
    id: number;
    image: string;
    width: number;
    height: number;
  }[];
}

const Advertising = ({ images }: AdvertisingProps) => {
  return (
    <section>
      <div className="flex gap-x-2 py-6 px-2 lg:px-20 lg:justify-between">
        {images.map(({ id, image, width, height }) => (
          <AdvertisingCard
            key={id}
            image={image}
            width={width}
            height={height}
          />
        ))}
      </div>
    </section>
  );
};

export default Advertising;
