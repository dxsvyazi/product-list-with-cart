import { FC, MouseEventHandler } from 'react';
import { cn } from '@utils/shared';
import { useProductStore } from '@store/productStore';
import { OrderTotal } from './Order';
import { useModalStore } from '@store/modalStore';
import orderConfirmedIcon from '@images/icon-order-confirmed.svg';
import OrderItem from './OrderItem';
import Button from './base/Button';
import Container from './base/Container';
import Items from './Items';

const OrderForm: FC = () => {
  const products = useProductStore((state) => state.products);
  const { clear } = useProductStore((state) => state.actions);
  const toggle = useModalStore(({ toggle }) => toggle);

  const handleClick: MouseEventHandler = (e) => {
    e.preventDefault();
    clear();
    toggle();
  };

  return (
    <form
      method='dialog'
      className={cn(
        'flex',
        'flex-col',
        'p-6',
        'gap-4',
        'max-w-140',
        'h-fit',
        'rounded-2xl',
        'bg-white'
      )}
    >
      <img src={orderConfirmedIcon} width={40} />
      <Container variants={{ flow: 'col' }}>
        <h1 className='text-2xl font-extrabold'>Order Confirmed</h1>
        <h5 className='text-[0.8rem] font-normal text-info-secondary'>
          We hope you enjoy your food
        </h5>
      </Container>
      <Container
        className='bg-main divide-info-primary'
        variants={{ flow: 'col', rounded: 'xl', divideY: 2 }}
      >
        <Items items={products} to={OrderItem} />
        <OrderTotal />
      </Container>
      <Button
        variants={{ color: 'orange' }}
        className='p-2'
        onClick={handleClick}
      >
        Start New Order
      </Button>
    </form>
  );
};

export default OrderForm;
