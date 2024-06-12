export interface Product {
  id: number;
  title: string;
  enTitle: string;
  categoryId: number;
  isActive: number;
  status: string;
  imageName: string | null;
  imageUrl: string;
  sellingPrice: number;
  maxPerOrder: number;
  lastPrice: number;
  discount: number;
  shortDescription: string;
  enShortDescription: string;
  description: string;
  enDescription: string | null;
  isAvailable: number;
  similarity: number;
  realPrice: number;
  fixedPrice?: number;
  colors?: { id: number; color: string }[];
  quantity?: number;
  slug?: string;
}

export interface Products {
  products: Product[];
}
