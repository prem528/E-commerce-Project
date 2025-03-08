export interface Review {
  id: string;
  userName: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  mrp: number;
  discount: number;
  colors: string[];
  features: string[];
  rating: number;
  totalReviews: number;
  reviews: Review[];
}

export interface ProductCard {
  id: string;
  name: string;
  price: number;
  mrp: number;
  discount: number;
  imageUrl: string;
}

export interface ProductSection {
  title: string;
  products: ProductCard[];
}