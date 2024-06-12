import { GetStaticProps, NextPage } from "next";
import AboutCategory from "../../components/AboutCategory";
import AllProducts from "../../components/all-products/AllProducts";
import Page from "../../components/Page";
import ScrollTop from "../../components/ScrollTop";
import Sidebar from "../../components/all-products/sidebar/Sidebar";
import { Products } from "../../types/products";
import { getAllProducts } from "../../lib/products";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilteredProducts,
  setProducts,
} from "../../redux/slices/products";
import { useEffect } from "react";
import { AppDispatch } from "../../redux/store";

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

const Products: NextPage<Products> = ({ products }) => {
  const filteredProducts = useSelector(selectFilteredProducts);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setProducts(products));
  }, [dispatch, products]);

  return (
    <Page>
      <ScrollTop height={800} />
      <div className="py-5 flex lg:pl-10 lg:gap-x-4 lg:mb-10 xl:pl-4 xl:gap-x-6 xl:py-5">
        <Sidebar />
        <AllProducts
          products={filteredProducts.length > 0 ? filteredProducts : products}
        />
      </div>
      <AboutCategory />
    </Page>
  );
};

export default Products;
