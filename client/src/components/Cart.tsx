import { FC } from 'react';
import { useProductStore } from '@store/productStore';
import EmptyCartIcon from '@images/illustration-empty-cart.svg';
import CartItem from './CartItem';
import Container from './base/Container';
import List from './base/List';

const EmptyCart: FC = () => (
  <Container variants={{ flow: 'col', items: 'centered' }}>
    <img src={EmptyCartIcon} />
    <span className='text-info-secondary'>
      Your added items will appear here
    </span>
  </Container>
);

const Cart: FC = () => {
  const products = useProductStore(({ products }) => products);

  return (
    <List
      as='ul'
      className='divide-info-primary p-0 gap-0 flex-nowrap overflow-auto max-h-60'
      variants={{ flow: 'col', divideY: 2 }}
      items={products}
      to={CartItem}
      fallback={<EmptyCart />}
    />
  );
};

export default Cart;
