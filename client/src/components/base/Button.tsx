import { cva } from 'class-variance-authority';
import { TC, ve } from '@shared/utils/VariantElementsFactory';
import { Props } from '@shared/types/types';
import { ElementType } from 'react';

const TComponent = <T extends ElementType = 'button'>({
  as: Component = 'button' as T,
  ...props
}: { as?: T } & Omit<Props<TC<T, 'button'>>, 'as'>) => (
  <Component {...(props as Props<T>)} />
);

const Button = ve(
  TComponent,
  cva(
    [
      'flex',
      'justify-center',
      'items-center',
      'rounded-full',
      'text-white',
      'transition',
      'duration-300',
      'ease-in-out',,
      'disabled:saturate-50',
      'disabled:brightness-75'
    ],
    {
      variants: {
        color: {
          white: ['bg-white', 'text-black', 'enabled:hover:text-info-orange'],
          black: ['bg-black', 'enabled:hover:bg-info-orange'],
          info: ['bg-info-primary', 'enabled:hover:bg-info-secondary'],
          orange: ['bg-info-orange', 'enabled:hover:bg-amber-700'],
          ghost: 'bg-transparent',
        },
        rounded: {
          sm: 'rounded-sm',
          md: 'rounded-md',
          xl: 'rounded-xl',
          full: 'rounded-full',
          none: 'rounded-none',
        },
        border: {
          black: ['border-black', 'enabled:hover:border-info-orange'],
          primary: [
            'border-info-primary',
            'enabled:hover:border-info-secondary',
          ],
        },
        borderWidth: {
          1: 'border-1',
          2: 'border-2',
        },
        scale: {
          10: ['enabled:hover:transform', 'enabled:hover:scale-110'],
        },
      },
      defaultVariants: {
        color: 'black',
      },
    }
  )
);

export default Button;
