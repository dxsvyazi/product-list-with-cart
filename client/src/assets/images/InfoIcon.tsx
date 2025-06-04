import { FC } from 'react';
import { Props } from '@shared/types/types';

const InfoIcon: FC<Props<'svg'>> = (props) => {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 32 32'
    >
      <g
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      >
        <path d='M16 14v9m0-15v2'></path>
        <circle cx='16' cy='16' r='14'></circle>
      </g>
    </svg>
  );
};

export default InfoIcon;
