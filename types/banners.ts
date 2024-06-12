export interface Banner {
  id: number;
  type: string;
  url: string;
  priority: number;
  imageName: string;
  imageUrl: string;
  imageOriginalUrl: string;
}

export interface Banners {
  banners: Banner[];
}
