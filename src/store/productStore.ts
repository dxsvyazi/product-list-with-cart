import { ProductWithAmount } from '@sharedTypes/productTypes';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ProductStoreActions {
  addProduct: (product: ProductWithAmount) => void;
  removeProduct: (name: string) => void;
  setAmount: (name: string, amount: number) => void;
  clear: () => void;
}

export interface ProductStore {
  products: ProductWithAmount[];
  actions: ProductStoreActions;
}

export const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      products: [],
      actions: {
        addProduct: (product: ProductWithAmount) =>
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
      partialize: (state) => ({products: state.products})
    }
  )
);
