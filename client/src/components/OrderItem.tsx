import { FC } from 'react';
import { env } from '@shared/env';
import { ProductWithAmount } from '@shared/types/productTypes';
import { nameToPath } from '@shared/utils/utils';
import ProductInfo, { Amount, Name, Price, TotalPrice } from './ProductInfo';
import Container from './base/Container';

const OrderItem: FC<ProductWithAmount> = (item) => (
  <ProductInfo {...item} className='justify-between w-full'>
    <img
      className='size-12 rounded-xl self-center border-2 border-info-orange'
      src={`${env.SERVER}/products/thumbnail/image-${nameToPath(
        item.name
      )}.jpg`}
    />
    <Container className='mr-auto' variants={{ flow: 'col' }}>
      <Name className='truncate' />
      <Container className='p-0'>
        <Amount />
        <Price prefix='@' />
      </Container>
    </Container>
    <TotalPrice className='self-center' />
  </ProductInfo>
);

export default OrderItem;
