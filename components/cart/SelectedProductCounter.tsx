import { FC, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { decrementQuantity, incrementQuantity } from "../../lib/cart";
import CounterLoading from "../CounterLoading";

interface SelectedProductCounterProp {
  quantity: number;
  id: number;
}

const SelectedProductCounter: FC<SelectedProductCounterProp> = ({
  quantity,
  id,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const incrementMutation = useMutation(incrementQuantity, {
    onMutate: () => setLoading(true),
    onSuccess: () => {
      setLoading(false);
      queryClient.invalidateQueries("getCartItems");
    },
  });

  const decrementMutation = useMutation(decrementQuantity, {
    onMutate: () => setLoading(true),
    onSuccess: () => {
      setLoading(false);
      queryClient.invalidateQueries("getCartItems");
    },
  });

  return (
    <div className="flex items-center justify-center gap-x-2 select-none border border-neutral-400 text-neutral-400 rounded-2xl py-1 px-2 w-[90px]">
      <div
        className="cart-counter"
        onClick={() => incrementMutation.mutate(id)}
      >
        <FaPlus />
      </div>
      <span className="cart-counter text-grayDark">
        {loading ? <CounterLoading /> : quantity}
      </span>
      <div
        className="cart-counter"
        onClick={() => decrementMutation.mutate(id)}
      >
        {quantity > 1 ? <FaMinus /> : <FaTrashAlt className="fill-red" />}
      </div>
    </div>
  );
};

export default SelectedProductCounter;
