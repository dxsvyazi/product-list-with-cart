import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ProductWithCategory } from '@sharedTypes/productTypes';
import ProductCard from './ProductCard';
import Loading from './Loading';
import Items from './Items';

interface DataJSON extends ProductWithCategory {
  id: number;
}

const CardsContainter: FC = () => {
  const {
    data: cards,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['cards'],
    queryFn: () =>
      fetch('/data.json')
        .then((response) => response.json())
        .then((data: DataJSON[]) =>
          data.map(({ id, ...rest }) => ({ key: id, ...rest }))
        ),
  });

  return (
    <Loading isError={isError} isLoading={isLoading}>
      <Items
        className='max-w-250'
        variants={{ items: 'centered' }}
        items={cards ?? []}
        to={ProductCard}
      />
    </Loading>
  );
};

export default CardsContainter;
