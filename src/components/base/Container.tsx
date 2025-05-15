import { ElementType, ComponentPropsWithRef as Props } from 'react';
import { cva } from 'class-variance-authority';
import { TC, ve } from '@utils/VariantElementsFactory';

const TComponent = <T extends ElementType = 'div'>({
  as: Component = 'div' as T,
  ...props
}: { as?: T } & Omit<Props<TC<T, 'div'>>, 'as'>) => (
  <Component {...(props as Props<T>)} />
);

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
