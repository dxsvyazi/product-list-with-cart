export type Product = {
  name: string;
  price: string;
};

export type ProductWithCategory = Product & {
  category: string;
};

export type ProductWithAmount = Product & {
  amount: number;
};
