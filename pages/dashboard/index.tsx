import { GetStaticProps, NextPage } from "next";
import DashboardPage from "../../components/DashboardPage";
import UserAccountInformation from "../../components/dashboard/UserAccountInformation";
import { Products } from "../../types/products";
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

const Dashboard: NextPage<Products> = ({ products }) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setProducts(products));
  }, [dispatch, products]);

  return (
    <DashboardPage>
      <UserAccountInformation />
    </DashboardPage>
  );
};

export default Dashboard;
