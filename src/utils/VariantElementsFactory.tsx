import { ElementType, ComponentPropsWithRef as Props } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@utils/shared';

type VeFnType = ReturnType<typeof cva>;

type VeProps<
  T extends ElementType,
  V extends ElementType,
  U extends VeFnType
> = {
  variants?: VariantProps<U>;
  className?: string;
} & ResolvedProps<T, V>;

type Resolved<T extends ElementType> = T extends TComponentType
  ? TComponentType
  : T;

type ResolvedProps<
  T extends ElementType,
  V extends ElementType
> = T extends TComponentType ? Props<TComponentTypeG<V>> : Props<T>;

export type TComponentType = typeof TComponent;

export type TComponentTypeG<T extends ElementType> = typeof TComponent<T>;

export const TComponent = <T extends ElementType>({
  as: Component = 'div' as T,
  ...props
}: { as?: T } & Omit<Props<T>, 'as'>) => <Component {...(props as Props<T>)} />;

export const ve = <T extends ElementType, U extends VeFnType>(
  Component: T,
  getVariants: U
) => {
  const VeComponent = Component as Resolved<T>;

  return <V extends ElementType>({
    variants,
    className,
    ...rest
  }: VeProps<T, V, U>) => {
    const props = {
      ...rest,
      className: cn(getVariants(variants), className),
    } as Props<T>;

    return <VeComponent<V> {...props} />;
  };
};
