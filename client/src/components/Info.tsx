import { FC, ComponentPropsWithRef as Props } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@shared/utils/utils';
import InfoIcon from '@images/InfoIcon';
import Conditional from './base/Conditional';

const InfoVariants = cva(
  ['flex text-[10px]', 'gap-2', 'justify-center', 'items-center'],
  {
    variants: {
      type: {
        info: 'text-gray-400',
        error: 'text-[tomato]',
      },
    },
    defaultVariants: {
      type: 'info',
    },
  }
);

const Info: FC<
  { text: string } & Props<'span'> & VariantProps<typeof InfoVariants>
> = ({ text, className, type }) => {
  return (
    <Conditional con={text.length > 0}>
      <span className={cn(className, InfoVariants({ type }))}>
        <InfoIcon className='size-4' />
        {text}
      </span>
    </Conditional>
  );
};

export default Info;
