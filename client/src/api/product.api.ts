import { ProductWithCategory } from '@shared/types/productTypes';

type ProductJSON = ProductWithCategory & {
  _id: number;
};

interface DataJSON {
  products: ProductJSON[];
}

export const getProducts = (
  offset: number = 0,
  limit?: number
): Promise<DataJSON> =>
  fetch(`/api/products?offset=${offset}${limit ? `&limit=${limit}` : ''}`).then(
    (response) => response.json()
  );
