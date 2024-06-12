import { FC } from "react";
import { useQuery } from "react-query";
import { fetchCartItems } from "../../lib/cart";
import CartNav from "./CartNav";
import SelectedProduct from "./SelectedProduct";

const Cart: FC = () => {
  const { data: cartItems } = useQuery(["getCartItems"], fetchCartItems);

  return (
    <div className="w-full bg-white rounded-md px-4 py-2 lg:py-4 lg:px-8">
      <CartNav />
      <div className="flex flex-col gap-y-5 lg:py-8">
        {cartItems.map((cartItem) => (
          <SelectedProduct product={cartItem} key={cartItem.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
