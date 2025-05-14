import { FC } from 'react';
import { useProductStore } from '@store/productStore';
import empyCartIcon from '@images/illustration-empty-cart.svg';
import CartItem from './CartItem';
import Container from './base/Container';
import Items from './Items';

const EmptyCart: FC = () => (
  <Container variants={{ flow: 'col', items: 'centered' }}>
    <img src={empyCartIcon} />
    <span className='text-info-secondary'>
      Your added items will appear here
    </span>
  </Container>
);

const Cart: FC = () => {
  const products = useProductStore(({ products }) => products);

  return (
    <Items
      className='divide-info-primary p-0 gap-0'
      variants={{ flow: 'col', items: 'centered', divideY: 2 }}
      items={products}
      to={CartItem}
      fallback={<EmptyCart />}
    />
  );
};

export default Cart;
