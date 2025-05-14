import { cva } from 'class-variance-authority';
import { ve, TComponent } from '@utils/VariantElementsFactory';

const Container = ve(
  TComponent,
  cva('flex flex-wrap gap-2 p-2', {
    variants: {
      flow: {
        col: 'flex-col',
      },
      items: {
        centered: 'place-content-center items-center',
      },
      divideY: {
        1: 'divide-y-1',
        2: 'divide-y-2',
      },
      rounded: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        xl: 'rounded-xl',
        full: 'rounded-full',
      },
    },
  })
);

export default Container;
