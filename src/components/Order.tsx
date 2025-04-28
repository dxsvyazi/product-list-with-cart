import { FC } from 'react';
import { useProductStore } from '@store/productStore';
import { useModalStore } from '@store/modalStore';
import neutDeliveryIcon from '@images/icon-carbon-neutral.svg';
import Button from './base/Button';
import Container from './base/Container';

const Order: FC = () => {
  const toggle = useModalStore(({ toggle }) => toggle);

  return (
    <Container className='gap-4' variants={{ flow: 'col' }}>
      <OrderTotal />
      <Container className='text-[0.8rem] bg-main' variants={{ rounded: 'md' }}>
        <img src={neutDeliveryIcon} />
        <span>
          This is a <b className='font-extrabold'>carbon-neutral</b> delivery
        </span>
      </Container>
      <Button className='h-10' variants={{ color: 'orange' }} onClick={toggle}>
        Confirm Order
      </Button>
    </Container>
  );
};

export const OrderTotal: FC = () => {
  const totalPrice = useProductStore((state) => state.products.reduce(
    (total, product) => total + product.amount * Number(product.price),
    0
  ));

  return (
    <Container className='justify-between' variants={{ items: 'centered' }}>
      <span className='text-[0.8rem]'>Order Total</span>
      <span className='font-extrabold text-xl'>${totalPrice}</span>
    </Container>
  );
};

export default Order;
