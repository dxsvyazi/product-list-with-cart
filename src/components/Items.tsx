import { FC } from 'react';
import Container from './base/Container';

const Items: FC<{ items: any[]; to: FC<any> }> = ({
  items,
  to: Component,
}) => {
  return (
    <Container
      className='divide-info-primary p-0 gap-0'
      variants={{ flow: 'col', items: 'centered', divideY: 2 }}
    >
      {items.map((props) => (
        <Component key={crypto.randomUUID()} {...props} />
      ))}
    </Container>
  );
};

export default Items;
