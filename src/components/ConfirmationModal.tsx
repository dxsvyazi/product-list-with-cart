import { FC, useEffect, useRef } from 'react';
import { useModalStore } from '@store/modalStore';
import OrderForm from './OrderForm';
import Conditional from './base/Conditional';
import Container from './base/Container';

const ConfirmationModal: FC = () => {
  const isOpen = useModalStore(({ isOpen }) => isOpen);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) dialogRef.current?.showModal();
    else dialogRef.current?.close();
  }, [isOpen]);

  return (
    <Conditional con={isOpen}>
      <Container
        as='dialog'
        className='size-full bg-neutral-800/20 max-w-none max-h-none'
        variants={{ flow: 'col', items: 'centered' }}
        ref={dialogRef}
      >
        <OrderForm />
      </Container>
    </Conditional>
  );
};

export default ConfirmationModal;
