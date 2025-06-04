import { FC, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@api/product.api';
import { env } from '@shared/env';
import ProductCard from './ProductCard';
import Loading from './base/Loading';
import List from './base/List';
import PageRange from './PageRange';
import Container from './base/Container';

const getLastPage = () => {
  const page = localStorage.getItem('product-page');
  return page ? parseInt(page) : 1;
};

const saveLastPage = (page: number) =>
  localStorage.setItem('product-page', `${page}`);

const CardsContainter: FC = () => {
  const [currentPage, setCurrentPage] = useState(getLastPage);
  const {
    data: cards = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: [currentPage],
    queryFn: () =>
      getProducts(
        (currentPage - 1) * env.PRODUCT_PER_PAGE,
        env.PRODUCT_PER_PAGE
      ),
    select: ({ products }) =>
      products.map(({ _id, ...rest }) => ({ key: _id, ...rest })),
  });

  useEffect(() => saveLastPage(currentPage), [currentPage]);

  return (
    <Loading isError={isError} isLoading={isLoading}>
      <Container variants={{ flow: 'col', items: 'centered' }}>
        <List
          className='max-w-250'
          variants={{ items: 'centered' }}
          items={cards}
          to={ProductCard}
        />
        <PageRange
          pages={8}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Container>
    </Loading>
  );
};

export default CardsContainter;
