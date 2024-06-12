export interface Category {
  id: number;
  title: string;
  enTitle: string;
  slug?: string;
}

export interface Categories {
  categories: Category[];
}
