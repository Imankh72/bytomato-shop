import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeartIcon } from "../svgs/HeartIcon";
import { Product } from "../../types/products";
import { createUrl, imageLoader } from "../../lib/imageLoader";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import {
  selectFavoriteProducts,
  setFavorite,
} from "../../redux/slices/products";

interface ProductsImagesProps {
  product: Product;
}

const ProductImages: FC<ProductsImagesProps> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>();
  const favoriteProducts = useSelector(selectFavoriteProducts);
  const favoriteProduct = favoriteProducts.filter((p) => p.id === product.id);

  return (
    <div className="flex flex-col items-center gap-y-3 relative w-[320px] lg:flex-1">
      <div className="bg-neutral-100 rounded-lg overflow-hidden relative">
        <Image
          loader={imageLoader}
          className="mix-blend-darken"
          src={createUrl(product.imageUrl)}
          width={320}
          height={350}
          alt={product.title}
        />
        <button
          className="absolute top-1 right-1 p-2 bg-white rounded-full"
          onClick={() => dispatch(setFavorite(product))}
        >
          <HeartIcon
            className={`w-6 h-6 ${
              favoriteProduct.length > 0 ? "fill-red stroke-red" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default ProductImages;
