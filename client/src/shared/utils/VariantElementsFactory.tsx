import { ElementType, JSX } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@shared/utils/utils';
import { Props } from '@shared/types/types';

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
> = T extends TComponentType ? Props<TComponentTypeG<V, T>> : Props<T>;

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

export type TComponentType = <T extends ElementType, V extends ElementType>({
  as,
}: { as?: T } & Omit<Props<TC<T, V>>, 'as'>) => JSX.Element;

export type TComponentTypeG<T extends ElementType, V extends ElementType> = ({
  as,
}: { as?: T } & Omit<Props<TC<T, V>>, 'as'>) => JSX.Element;

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

    return <VeComponent<V, T> {...props} />;
  };
};
