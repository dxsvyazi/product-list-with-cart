import { FC } from 'react';
import Container from '@components/base/Container';
import CardsContainter from '@components/CardsContainer';
import CartContainer from '@components/CartContainer';

const Main: FC = () => {
  return (
    <Container
      as='main'
      className='gap-8'
      variants={{ items: 'centered' }}
    >
      <CardsContainter />
      <CartContainer />
    </Container>
  );
};

export default Main;
