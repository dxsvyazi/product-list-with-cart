import { FC } from 'react';
import { useProductStore } from '@store/productStore';
import Button from './base/Button';
import Container from './base/Container';
import Cart from './Cart';
import Order from './Order';
import TotalProducts from './TotalProducts';
import Conditional from './base/Conditional';

const CartContainer: FC = () => {
  const hasProducts = useProductStore(({ products }) => products.length > 0);
  const { clear } = useProductStore(({ actions }) => actions);

  return (
    <Container
      className='bg-white p-4 gap-0'
      variants={{ flow: 'col', rounded: 'xl' }}
    >
      <Container className='p-0 justify-between'>
        <TotalProducts />
        <Conditional con={hasProducts}>
          <Button className='px-2' onClick={clear}>
            Clear
          </Button>
        </Conditional>
      </Container>
      <Cart />
      <Conditional con={hasProducts}>
        <Order />
      </Conditional>
    </Container>
  );
};

export default CartContainer;
