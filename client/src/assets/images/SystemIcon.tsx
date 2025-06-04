import { FC } from 'react';
import { Props } from '@shared/types/types';

const SystemFillIcon: FC<Props<'svg'>> = (props) => {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        d='M4.615 17.462q-.69 0-1.152-.463T3 15.846v-9.77q0-.69.463-1.152t1.152-.462h14.77q.69 0 1.152.462T21 6.077v9.77q0 .69-.462 1.152t-1.153.463zm-2.846 2v-1h20.462v1z'
      ></path>
    </svg>
  );
};

export default SystemFillIcon;
