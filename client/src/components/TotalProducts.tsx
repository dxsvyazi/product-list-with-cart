import { FC } from 'react';
import { useProductStore } from '@store/productStore';

const TotalProducts: FC = () => {
  const totalProducts = useProductStore(({ products }) =>
    products.reduce((total, { amount }) => total + amount, 0)
  );

  return (
    <h1 className='font-extrabold text-info-orange text-2xl'>
      Your Cart ({totalProducts})
    </h1>
  );
};

export default TotalProducts;
