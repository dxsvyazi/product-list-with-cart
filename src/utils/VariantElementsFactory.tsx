import { ElementType, FC, ComponentPropsWithRef as Props } from 'react';
import { VariantProps } from 'class-variance-authority';
import { cn } from '@utils/shared';

const ve = <T extends ElementType, U extends (...args: any) => any>(
  Component: T,
  getVariants: U
): FC<{ variants?: VariantProps<U> } & Props<T>> => {
  return ({ variants, className, children, ...props }) => {
    return (
      <Component
        {...props}
        className={cn(getVariants({ ...variants }), className)}
      >
        {children}
      </Component>
    );
  };
};

export default ve;
