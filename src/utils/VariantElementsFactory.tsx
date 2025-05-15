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

type StrictExtends<T1, T2, F> = [T1] extends [T2]
  ? [T2] extends [T1]
    ? F
    : T1
  : F;

export type TC<T extends ElementType, F extends ElementType> = StrictExtends<
  T,
  ElementType,
  F
>;

export type TComponentType = typeof TComponent;

export type TComponentTypeG<T extends ElementType> = typeof TComponent<T>;

export const TComponent = <T extends ElementType = 'div'>({
  as: Component = 'div' as T,
  ...props
}: { as?: T } & Omit<Props<TC<T, 'div'>>, 'as'>) => (
  <Component {...(props as Props<T>)} />
);

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
