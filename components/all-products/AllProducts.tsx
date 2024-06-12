import { FC, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import {
  selectFilteredProducts,
  selectSearchItem,
} from "../../redux/slices/products";
import { Product, Products } from "../../types/products";
import ProductCard from "../ProductCard";
import SortBox from "./SortBox";

const AllProducts: FC<Products> = ({ products }) => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(12);
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems: Product[] = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const filteredProducts = useSelector(selectFilteredProducts);
  const searchItem = useSelector(selectSearchItem);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="w-[90%] mx-auto lg:w-[80%] xl:w-[75%] ">
      <SortBox products={products} />
      {searchItem && filteredProducts.length === 0 ? (
        <div className="flex justify-center items-center h-full lg:h-1/2">
          <h2 className="text-lg mb-8 lg:text-3xl">
            متاسفانه چنین کالایی در فروشگاه وجود ندارد.
          </h2>
        </div>
      ) : (
        <>
          <ProductCard products={currentItems} />
          <ReactPaginate
            className="flex flex-wrap items-center justify-center gap-x-2"
            pageLinkClassName="page-link transition-all duration-300 hover:bg-blue hover:text-white"
            activeLinkClassName="bg-blue text-white"
            nextLinkClassName="page-link"
            previousLinkClassName="page-link"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </div>
  );
};

export default AllProducts;
