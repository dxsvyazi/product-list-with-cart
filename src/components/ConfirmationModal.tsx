import { FC, useEffect, useRef } from 'react';
import { cn } from '@utils/shared';
import { useModalStore } from '@store/modalStore';
import OrderForm from './OrderForm';

const ConfirmationModal: FC = () => {
  const isOpen = useModalStore(({ isOpen }) => isOpen);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) dialogRef.current?.showModal();
    else dialogRef.current?.close();
  }, [isOpen]);

  return isOpen ? (
    <dialog
      className={cn(
        'flex',
        'size-full',
        'items-center',
        'justify-center',
        'bg-neutral-800/20',
        'max-w-none',
        'max-h-none'
      )}
      ref={dialogRef}
    >
      <OrderForm />
    </dialog>
  ) : null;
};

export default ConfirmationModal;
