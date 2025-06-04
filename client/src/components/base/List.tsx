import { ElementType, FC, Key, ReactNode } from 'react';
import { Props } from '@shared/types/types';
import Container from './Container';
import Conditional from './Conditional';

type ListItem<T extends ElementType> = {
  key?: Key;
} & Omit<Props<T>, 'key'>;

type ListProps<T extends ElementType, C extends ElementType> = {
  items: ListItem<T>[];
  to: T;
  fallback?: ReactNode;
} & Props<typeof Container<C>>;

const List = <T extends ElementType, C extends ElementType>({
  items,
  fallback,
  to: Component,
  ...props
}: ListProps<T, C>) => (
  <Conditional con={items.length > 0} fallback={fallback}>
    <Container {...props}>
      {items.map(({ key, ...props }, idx) => (
        <Component key={key ?? idx} {...props} />
      ))}
    </Container>
  </Conditional>
);

export default List;
