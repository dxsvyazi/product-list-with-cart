import { ElementType } from 'react';
import { cva } from 'class-variance-authority';
import { TC, ve } from '@shared/utils/VariantElementsFactory';
import { Props } from '@shared/types/types';

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
      text: {
        centered: 'text-center',
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
      bColor: {
        'info-primary': 'border-info-primary',
        'info-secondary': 'border-info-secondary',
      },
      bWidth: {
        1: 'border-1',
        2: 'border-2',
        3: 'border-3',
      },
      shadow: {
        sm: 'shadow-sm shadow-black/50',
        md: 'shadow-md shadow-black/50',
        xl: 'shadow-xl shadow-black/50',
      },
      dropShadow: {
        sm: 'drop-shadow-sm drop-shadow-black/50',
        md: 'drop-shadow-md drop-shadow-black/50',
        xl: 'drop-shadow-xl drop-shadow-black/50',
      },
    }
  })
);

export default Container;
