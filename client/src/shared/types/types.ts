import { ComponentPropsWithRef, ElementType } from 'react';

export type Props<T extends ElementType> = ComponentPropsWithRef<T>;

export type Dispatch<T> = React.Dispatch<React.SetStateAction<T>>;
