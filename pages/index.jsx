import { useRef } from "react";
import Page from "../components/Page";
import Hero from "../components/Hero";
import Tomato from "../components/Tomato";
import Products from "../components/Products";
import Services from "../components/Services";

const Home = () => {
  const productsRef = useRef(null);

  return (
    <Page>
      <Hero productsRef={productsRef} />
      <Tomato />
      <Products productsRef={productsRef} />
      <Services />
    </Page>
  );
};

export default Home;
