export interface Product {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
}

export type ProductListItem = Pick<
  Product,
  'id' | 'title' | 'thumbnailUrl' | 'thumbnailAlt'
>;
