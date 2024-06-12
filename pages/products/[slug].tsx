import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Page from "../../components/Page";
import ScrollTop from "../../components/ScrollTop";
import ProductDetails from "../../components/product/ProductDetails";
import ProductImages from "../../components/product/ProductImages";
import ProductShop from "../../components/product/ProductShop";
import ProductBenefits from "../../components/product/ProductBenefits";
import ProductTab from "../../components/product/product-tab/ProductTab";
import { ParsedUrlQuery } from "querystring";
import { getAllProducts, getProduct } from "../../lib/products";
import { Product } from "../../types/products";
import { ApiError } from "../../lib/api";

interface ProductsPageParams extends ParsedUrlQuery {
  slug: string;
}

interface ProductPageProps {
  product: Product;
}

export const getStaticPaths: GetStaticPaths<ProductsPageParams> = async () => {
  const products = await getAllProducts();

  return {
    paths: products.map((product) => ({
      params: {
        slug: product.title.toLowerCase().split(" ").join("-"),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  ProductPageProps,
  ProductsPageParams
> = async ({ params: { slug } }) => {
  try {
    const product = await getProduct(slug);
    return {
      props: {
        product,
      },
      revalidate: 60,
    };
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      return {
        notFound: true,
      };
    }
    throw error;
  }
};

const Product: NextPage<ProductPageProps> = ({ product }) => {
  return (
    <Page>
      <ScrollTop height={800} />
      <div className="main-size">
        <div className="flex flex-col items-center gap-y-7 px-4 py-3 lg:flex-row lg:items-start lg:gap-x-5 lg:px-6 lg:py-5">
          <ProductImages product={product} />
          <ProductDetails product={product} />
          <ProductShop />
        </div>
        <ProductBenefits />
        <ProductTab />
      </div>
    </Page>
  );
};

export default Product;
