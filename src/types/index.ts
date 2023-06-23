export interface ListProducts {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}


export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface Rating {
  rate: number;
  count: number;
}

export interface Cart {
  id: number;
  userId: number;
  date: Date;
  products: CartProduct[];
  __v: number;
}

export interface CartProduct {
  productId: number;
  quantity: number;
  productDetails: Product | undefined;
}
