export interface Color {
  name: string;
  hex: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  category: string;
  gender: 'Men' | 'Women' | 'Unisex';
  images: string[];
  sizes: string[];
  colors: Color[];
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  featured?: boolean;
  newArrival?: boolean;
  fabric?: string;
}

export interface CartItem extends Omit<Product, 'colors'> {
  selectedSize: string;
  selectedColor: { name: string; hex: string; image: string };
  quantity: number;
}

export type Category = 'Men' | 'Women' | 'T-Shirts' | 'Shirts' | 'Boxers' | 'Nightdress' | 'New Arrivals';
