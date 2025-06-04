import { FC } from 'react';
import { Props } from '@shared/types/types';

const SystemIcon: FC<Props<'svg'>> = (props) => {
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
        d='M1.77 19.462v-1h20.46v1zm2.845-2q-.69 0-1.152-.463T3 15.846v-9.77q0-.69.463-1.152t1.152-.462h14.77q.69 0 1.152.462T21 6.077v9.77q0 .69-.462 1.152t-1.153.463zm0-1h14.77q.23 0 .423-.193t.192-.423v-9.77q0-.23-.192-.422q-.193-.192-.423-.192H4.615q-.23 0-.423.192T4 6.077v9.77q0 .23.192.422t.423.193m-.615 0v-11z'
      ></path>
    </svg>
  );
};

export default SystemIcon;
