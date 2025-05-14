import { ProductWithAmount } from '@sharedTypes/productTypes';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Product = ProductWithAmount & { key: string };

interface ProductStoreActions {
  addProduct: (product: Product) => void;
  removeProduct: (name: string) => void;
  setAmount: (name: string, amount: number) => void;
  clear: () => void;
}

interface ProductStore {
  products: Product[];
  actions: ProductStoreActions;
}

export const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      products: [],
      actions: {
        addProduct: (product: Product) =>
          set(({ products }) => ({ products: [...products, product] })),

        removeProduct: (name: string) =>
          set(({ products }) => ({
            products: products.filter((product) => product.name !== name),
          })),

        setAmount: (name: string, amount: number) =>
          set(({ products }) => ({
            products: products.map((product) => {
              if (product.name === name) {
                product.amount = amount;
              }
              return product;
            }),
          })),

        clear: () => set({ products: [] }),
      },
    }),
    {
      name: 'product store',
      partialize: (state) => ({ products: state.products }),
    }
  )
);
