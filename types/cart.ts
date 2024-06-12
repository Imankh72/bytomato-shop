export interface CartItem {
  id: number;
  productId: number;
  productName: string;
  productEnName: string;
  productPictureUrl: string;
  quantity: number;
  optionList?: null;
  optionTitleList?: null;
  optionEnTitleList?: null;
  maxPerOrder: number;
  productUnitPrice?: number;
  totalPrice: number;
  payablePrice: number;
  discount?: number;
  voucherDiscount?: number;
  tax?: number;
}

export interface Cart {
  cartItems: CartItem[];
}
