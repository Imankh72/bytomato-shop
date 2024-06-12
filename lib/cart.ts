import axios from "axios";
import { CartItem } from "../types/cart";
import { Product } from "../types/products";

// Fetch All CartItems
export const fetchCartItems = async () => {
  try {
    const response = await axios("/api/cart");
    const cartItems: CartItem[] = response.data;

    return cartItems;
  } catch (error) {
    console.log(error);
  }
};

// Fetch Single CartItem
export const fetchCartItem = async (id: number) => {
  try {
    const cartItems = await fetchCartItems();
    const cartItem = cartItems.find((c) => c.productId === id);
    if (!cartItem) {
      console.log("This product doesn't exist");
    }
    return cartItem;
  } catch (error) {
    console.log(error);
  }
};

// Add CartItem
export const addToCart = async (product: Product) => {
  try {
    const cartItems = await fetchCartItems();
    const itemInCart = cartItems.find(
      (cartItem) => cartItem.productId === product.id
    );
    if (itemInCart && itemInCart.quantity >= product.maxPerOrder) {
      alert(
        `حداکثر تعداد سفارش این محصول در هر خرید ${product.maxPerOrder} عدد می باشد.`
      );
      return;
    }
    await axios.put("/api/cart", {
      productId: product.id,
      quantity: itemInCart ? itemInCart.quantity + 1 : 1,
    });
  } catch (error) {
    console.log("Error adding item: ", error);
  }
};

// Increment Quantity Of CartItem
export const incrementQuantity = async (id: number) => {
  try {
    const cartItem = await fetchCartItem(id);
    if (!cartItem) {
      await axios.put("/api/cart", {
        productId: id,
        quantity: 1,
      });
    }
    if (cartItem && cartItem.quantity >= cartItem.maxPerOrder) {
      alert(
        `حداکثر تعداد سفارش این محصول در هر خرید ${cartItem.maxPerOrder} عدد می باشد.`
      );
      return;
    }
    await axios.put("/api/cart", {
      productId: id,
      quantity: cartItem.quantity + 1,
    });
  } catch (error) {}
};

// Decrement Quantity Of CartItem
export const decrementQuantity = async (id: number) => {
  try {
    const cartItem = await fetchCartItem(id);
    if (cartItem && cartItem.quantity >= 1) {
      await axios.put("/api/cart", {
        productId: id,
        quantity: cartItem.quantity - 1,
      });
    } else {
      await axios.put("/api/cart", {
        productId: id,
        quantity: 0,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
