import { FC } from 'react';
import { Props } from '@shared/types/types';

const SunIcon: FC<Props<'svg'>> = (props) => {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <g fill='none' stroke='currentColor' strokeLinecap='round' strokeWidth='2'>
        <path d='M12 3V2m0 20v-1m9-9h1M2 12h1m15.5-6.5L20 4M4 20l1.5-1.5M4 4l1.5 1.5m13 13L20 20' />
        <circle cx='12' cy='12' r='4' />
      </g>
    </svg>
  );
};

export default SunIcon;
