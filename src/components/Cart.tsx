import { FC } from 'react';
import { useProductStore } from '@store/productStore';
import empyCartIcon from '@images/illustration-empty-cart.svg';
import CartItem from './CartItem';
import Container from './base/Container';
import Items from './Items';

const Cart: FC = () => {
  const products = useProductStore((state) => state.products);

  return products.length ? (
    <Items items={products} to={CartItem} />
  ) : (
    <Container variants={{ flow: 'col', items: 'centered' }}>
      <img src={empyCartIcon} />
      <span className='text-info-secondary'>
        Your added items will appear here
      </span>
    </Container>
  );
};

export default Cart;
