import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import AllProducts from "../../components/all-products/AllProducts";
import Page from "../../components/Page";
import ScrollTop from "../../components/ScrollTop";
import { ApiError } from "../../lib/api";
import { getAllCategories, getCategory } from "../../lib/categories";
import { getAllProducts } from "../../lib/products";
import { Category } from "../../types/categories";
import { Product } from "../../types/products";

interface CategoryPageParams extends ParsedUrlQuery {
  slug: string;
}

interface CategoryPageProps {
  category: Category;
  products: Product[];
}

export const getStaticPaths: GetStaticPaths<CategoryPageParams> = async () => {
  const categories = await getAllCategories();

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.title.toLowerCase().split(" ").join("-"),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  CategoryPageProps,
  CategoryPageParams
> = async ({ params: { slug } }) => {
  try {
    const category = await getCategory(slug);
    const allProducts: Product[] = await getAllProducts();
    const products = allProducts.filter((p) => p.categoryId === category.id);

    return {
      props: {
        category,
        products,
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

const Category: NextPage<CategoryPageProps> = ({ products }) => {
  return (
    <Page>
      <ScrollTop height={800} />
      <div className="px-1 py-3 lg:py-10">
        <AllProducts products={products} />
      </div>
    </Page>
  );
};

export default Category;
