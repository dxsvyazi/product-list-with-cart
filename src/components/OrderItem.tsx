import { FC } from 'react';
import { ProductWithAmount as OrderItemProps } from '@sharedTypes/productTypes';
import { nameToPath } from '@utils/shared';
import ProductInfo, { Amount, Name, Price, TotalPrice } from './ProductInfo';
import Container from './base/Container';

const OrderItem: FC<OrderItemProps> = (item) => {
  return (
    <ProductInfo {...item} className='justify-between w-full'>
      <img
        className='size-12 rounded-xl self-center'
        src={`./src/assets/products/${nameToPath(
          item.name
        )}/image-thumbnail.jpg`}
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
};

export default OrderItem;
