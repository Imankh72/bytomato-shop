import { FC, useState } from "react";

import { addToCart } from "../lib/cart";

import { Product } from "../types/products";
import ButtonLoading from "./ButtonLoading";
import { useMutation, useQueryClient } from "react-query";

interface AddToCartBtnProp {
  product: Product;
}

const AddToCartBtn: FC<AddToCartBtnProp> = ({ product }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const mutation = useMutation(addToCart, {
    onMutate: () => setLoading(true),
    onSuccess: () => {
      queryClient.invalidateQueries("getCartItems");
      setLoading(false);
    },
  });

  return (
    <div>
      <button
        className="block h-12 bg-blue rounded-[10px] text-white px-4 w-full transition-all duration-300 lg:hover:bg-primary"
        onClick={() => mutation.mutate(product)}
      >
        {loading ? <ButtonLoading /> : "  افزودن به سبد خرید"}
      </button>
    </div>
  );
};

export default AddToCartBtn;
