import { cva } from 'class-variance-authority';
import { ve } from '@utils/VariantElementsFactory';

const Button = ve(
  'button',
  cva(
    [
      'flex',
      'justify-center',
      'items-center',
      'rounded-full',
      'text-white',
      'transition',
      'duration-300',
      'ease-in-out',
    ],
    {
      variants: {
        color: {
          white: ['bg-white', 'text-black', 'hover:text-info-orange'],
          black: ['bg-black', 'hover:bg-info-orange'],
          orange: ['bg-info-orange', 'hover:bg-amber-700'],
          ghost: 'bg-transparent',
        },
        border: {
          black: ['border-black', 'hover:border-info-orange'],
          primary: ['border-info-primary', 'hover:border-info-secondary'],
        },
        borderWidth: {
          1: 'border-1',
          2: 'border-2',
        },
        scale: {
          10: ['hover:transform', 'hover:scale-110'],
        },
      },
      defaultVariants: {
        color: 'black',
      },
    }
  )
);

export default Button;
