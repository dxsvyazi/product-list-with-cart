import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ProductWithCategory as DataJSON } from '@sharedTypes/productTypes';
import ProductCard from './ProductCard';
import Loading from './Loading';
import Container from './base/Container';

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
        .then((data: DataJSON[]) => data),
  });

  return (
    <Loading isError={isError} isLoading={isLoading}>
      <Container className='max-w-250' variants={{ items: 'centered' }}>
        {cards?.map(({ name, ...rest }) => (
          <ProductCard key={name} name={name} {...rest} />
        ))}
      </Container>
    </Loading>
  );
};

export default CardsContainter;
