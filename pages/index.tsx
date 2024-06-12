import { NextPage } from "next";
import Page from "../components/Page";
import ScrollTop from "../components/ScrollTop";
import Hero from "../components/hero/Hero";
import OnSale from "../components/onSale/OnSale";
import Advertising from "../components/advertising/Advertising";
import ProductsList from "../components/ProductsList";
import DiscountedProducts from "../components/discounted-products/DiscountedProducts";
import ProductsCategory from "../components/products-category/ProductsCategory";
import Cosmetics from "../components/cosmetics/Cosmetics";
import { GetStaticProps } from "next/types";
import { Product } from "../types/products";
import { getAllProducts } from "../lib/products";
import { getAllBanners } from "../lib/banners";
import { Banner } from "../types/banners";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { setProducts } from "../redux/slices/products";

interface GetStaticPropsType {
  products: Product[];
  banners: Banner[];
}

export const getStaticProps: GetStaticProps<GetStaticPropsType> = async () => {
  try {
    const products = await getAllProducts();
    const banners = await getAllBanners();
    return {
      props: {
        products,
        banners,
      },
      revalidate: 60,
    };
  } catch (error) {
    return { notFound: true };
  }
};

const Home: NextPage<GetStaticPropsType> = ({ products, banners }) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setProducts(products));
  }, [dispatch, products]);

  return (
    <Page>
      <ScrollTop height={1000} />
      <Hero banners={banners} />
      <OnSale products={products} />
      <Advertising images={images1} />
      <ProductsList products={products} productsTitle="گوشی موبایل" />
      <Advertising images={images2} />
      <ProductsList products={products} productsTitle="بخاری برقی" />
      <Advertising images={images3} />
      <DiscountedProducts products={products} />
      <ProductsCategory
        products={products}
        title="لپ تاپ"
        image="laptop-category.png"
      />
      <ProductsList products={products} productsTitle="مینی واش" />
      <Cosmetics />
    </Page>
  );
};

export default Home;

const images1 = [
  {
    id: 1,
    image: "ad-image1.jpg",
    width: 541,
    height: 231,
  },
  {
    id: 2,
    image: "ad-image2.jpg",
    width: 541,
    height: 231,
  },
];

const images2 = [
  {
    id: 1,
    image: "ad-image3.png",
    width: 541,
    height: 231,
  },
  {
    id: 2,
    image: "ad-image4.png",
    width: 541,
    height: 231,
  },
];

const images3 = [
  {
    id: 1,
    image: "ad-image5.png",
    width: 295.5,
    height: 168,
  },
  {
    id: 2,
    image: "ad-image6.png",
    width: 295.5,
    height: 168,
  },
  {
    id: 3,
    image: "ad-image7.png",
    width: 295.5,
    height: 168,
  },
  {
    id: 4,
    image: "ad-image8.png",
    width: 295.5,
    height: 168,
  },
];
