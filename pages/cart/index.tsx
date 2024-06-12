import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Page from "../../components/Page";
import Cart from "../../components/cart/Cart";
import CartPriceBox from "../../components/cart/CartPriceBox";
import { Products } from "../../types/products";
import { useQuery } from "react-query";
import { fetchCartItems } from "../../lib/cart";
import { getAllProducts } from "../../lib/products";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { useEffect } from "react";
import { setProducts } from "../../redux/slices/products";

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

const CartPage: NextPage<Products> = ({ products }) => {
  const { data: cartItems } = useQuery(["getCartItems"], fetchCartItems);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setProducts(products));
  }, [dispatch, products]);

  return (
    <Page>
      {cartItems && cartItems.length !== 0 && (
        <div className="bg-neutral-100 p-4 lg:px-6 lg:py-8">
          <h2 className="text-[18px] text-grayDark mb-4">سبد خرید شما</h2>
          <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-5">
            <div className="lg:flex-[2.5]">
              <Cart />
            </div>
            <div className="flex flex-col gap-y-5 lg:flex-1">
              <CartPriceBox />
            </div>
          </div>
        </div>
      )}
      {cartItems && cartItems.length === 0 && (
        <div className="flex justify-center items-center bg-neutral-100 py-20 px-4">
          <div className="flex flex-col justify-center items-center gap-y-5 mx-auto h-full w-full bg-white rounded-lg py-20 lg:w-[80%]">
            <Image
              src="/images/man-empty-box.svg"
              width={134}
              height={133}
              alt="man-empty-box"
            />
            <p>سبد خرید شما خالی است</p>
          </div>
        </div>
      )}
    </Page>
  );
};

export default CartPage;
