import { FC } from 'react';
import { ProductWithAmount as CartItemProps } from '@sharedTypes/productTypes';
import { useProductStore } from '@store/productStore';
import ProductInfo, { Amount, Name, Price, TotalPrice } from './ProductInfo';
import removeIcon from '@images/icon-remove-item.svg';
import Button from './base/Button';
import Container from './base/Container';

const CartItem: FC<CartItemProps> = (item) => {
  const { removeProduct } = useProductStore(({ actions }) => actions);

  return (
    <Container className='justify-between w-full'>
      <ProductInfo {...item} variants={{ flow: 'col' }}>
        <Name className='text-black' />
        <Container className='p-0'>
          <Amount />
          <Price prefix='@' />
          <TotalPrice />
        </Container>
      </ProductInfo>
      <Button
        className='p-2 size-fit self-center'
        variants={{ color: 'ghost', border: 'primary', borderWidth: 2 }}
        onClick={() => removeProduct(item.name)}
      >
        <img src={removeIcon} />
      </Button>
    </Container>
  );
};

export default CartItem;
