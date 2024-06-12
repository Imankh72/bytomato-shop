import { useQuery } from "react-query";
import { fetchCartItems } from "../lib/cart";

const useCartCount = () => {
  const { data: cartItems } = useQuery(["getCartItems"], fetchCartItems);

  if (cartItems) {
    const cartCount = cartItems.reduce(
      (a, cartItem) => a + cartItem.quantity,
      0
    );
    const cartTotal = cartItems.reduce(
      (a, cartItem) => a + cartItem.quantity * cartItem.payablePrice,
      0
    );
    return { cartCount, cartTotal };
  }

  return { cartCount: 0, cartTotal: 0 };
};

export default useCartCount;
