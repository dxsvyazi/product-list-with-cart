import { FC } from 'react';
import { ProductWithAmount } from '@shared/types/productTypes';
import { useProductStore } from '@store/productStore';
import ProductInfo, { Amount, Name, Price, TotalPrice } from './ProductInfo';
import Button from './base/Button';
import Container from './base/Container';
import RemoveIcon from '@images/RemoveIcon';

const CartItem: FC<ProductWithAmount> = (item) => {
  const { removeProduct } = useProductStore(({ actions }) => actions);

  return (
    <Container className='justify-between w-full relative'>
      <ProductInfo {...item} variants={{ flow: 'col' }}>
        <Name className='text-black text-wrap' />
        <Container className='p-0'>
          <Amount />
          <Price prefix='@' />
          <TotalPrice />
        </Container>
      </ProductInfo>
      <Button
        className='p-2 size-fit absolute right-1 top-[35%]'
        variants={{ color: 'ghost', border: 'primary', borderWidth: 2 }}
        onClick={() => removeProduct(item.name)}
      >
        <RemoveIcon className='text-info-secondary'/>
      </Button>
    </Container>
  );
};

export default CartItem;
