import { FC } from 'react';
import { env } from '@shared/env';
import { cn, nameToPath } from '@shared/utils/utils';
import { ProductWithCategory } from '@shared/types/productTypes';
import ProductButton from './ProductButton';
import Container from './base/Container';
import ProductInfo, { Category, Name, Price } from './ProductInfo';

const ProductCard: FC<ProductWithCategory> = ({ name, category, price }) => {
  const path = `image-${nameToPath(name)}`;

  return (
    <Container
      className='max-w-80 gap-6'
      variants={{ flow: 'col' }}
    >
      <Container
        className='group'
        variants={{ flow: 'col', items: 'centered' }}
      >
        <picture>
          <source
            media='(min-width:1440px)'
            srcSet={`${env.SERVER}/products/desktop/${path}.jpg`}
          />
          <source
            media='(min-width:760px)'
            srcSet={`${env.SERVER}/products/tablet/${path}.jpg`}
          />
          <img
            src={`${env.SERVER}/products/mobile/${path}.jpg`}
            alt='Card image'
            className={cn(
              'rounded-2xl',
              'mb-[-1rem]',
              'group-has-[div]:outline-3',
              'group-has-[div]:outline-info-orange',
              'group-has-[div]:outline-offset-[-1px]'
            )}
          />
        </picture>
        <ProductButton name={name} price={price} />
      </Container>
      <ProductInfo
        name={name}
        price={price}
        category={category}
        variants={{ flow: 'col' }}
      >
        <Category />
        <Name className='text-black' />
        <Price className='text-info-orange' />
      </ProductInfo>
    </Container>
  );
};

export default ProductCard;
