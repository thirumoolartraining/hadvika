export interface Product {
  name: string;
  price: number;
  slug: string;
  image?: string; // Keeping for backward compatibility
  images?: string[]; // Array of image paths for the product gallery
  description?: string;
  ingredients?: string[];
  certifications?: string[];
  moq?: number; // Minimum Order Quantity
  increment?: number; // Order increment value
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface RFQForm {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  country: string;
  message: string;
  products?: CartItem[];
}