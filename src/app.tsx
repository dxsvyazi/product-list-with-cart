import { FC } from 'react';
import Container from '@components/base/Container';
import ConfirmationModal from '@components/ConfirmationModal';
import CardsContainter from '@components/CardsContainer';
import CartContainer from '@components/CartContainer';

const App: FC = () => {
  return (
    <Container
      className='size-full gap-0'
      variants={{ flow: 'col', items: 'centered' }}
    >
      <h1 className='flex text-2xl font-extrabold self-start'>Desserts</h1>
      <Container className='gap-8' variants={{ flow:'col', items: 'centered' }}>
        <CardsContainter />
        <CartContainer />
      </Container>
      <ConfirmationModal />
    </Container>
  );
};

export default App;
