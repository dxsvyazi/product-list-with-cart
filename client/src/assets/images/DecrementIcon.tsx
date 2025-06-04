import { FC } from 'react';
import { Props } from '@shared/types/types';

const DecrementIcon: FC<Props<'svg'>> = (props) => {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='10'
      height='2'
      fill='none'
      viewBox='0 0 10 2'
    >
      <path fill='currentColor' d='M0 .375h10v1.25H0V.375Z' />
    </svg>
  );
};

export default DecrementIcon;
