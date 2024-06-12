import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Page from "../components/Page";
import { getAllProducts } from "../lib/products";
import { setProducts } from "../redux/slices/products";
import { AppDispatch } from "../redux/store";
import { Products } from "../types/products";

export const getStaticProps: GetStaticProps<Products> = async () => {
  try {
    const products = await getAllProducts();
    return {
      props: {
        products,
      },
      revalidate: 60,
    };
  } catch (error) {
    return { notFound: true };
  }
};

const NotFoundPage: NextPage<Products> = ({ products }) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setProducts(products));
  }, [dispatch, products]);

  return (
    <Page>
      <div className="flex flex-col justify-center items-center py-10">
        <Image
          src="/images/404.svg"
          className="mb-10"
          width={254}
          height={294}
          alt="not found page"
        />
        <h1 className="text-xl mb-4">متاسفانه صفحه ی مورد نظر پیدا نشد!</h1>
        <Link href="/" className="text-blue text-bold">
          بازگشت به صفحه ی اصلی
        </Link>
      </div>
    </Page>
  );
};
export default NotFoundPage;
