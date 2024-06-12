import { GetStaticProps, NextPage } from "next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Page from "../../components/Page";
import UserInformation from "../../components/UserInformation";
import { getAllProducts } from "../../lib/products";
import { setProducts } from "../../redux/slices/products";
import { AppDispatch } from "../../redux/store";
import { Products } from "../../types/products";

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

const OrderPage: NextPage<Products> = ({ products }) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setProducts(products));
  }, [dispatch, products]);

  return (
    <Page>
      <div className="bg-neutral-100 p-4 lg:px-6 lg:py-8">
        <h2 className="text-[18px] text-grayDark mb-4">فرآیند تکمیل سفارش</h2>
        <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-5">
          <div className="lg:flex-[2.5]">
            <UserInformation />
          </div>
          <div className="flex flex-col gap-y-5 lg:flex-1"></div>
        </div>
      </div>
    </Page>
  );
};

export default OrderPage;
