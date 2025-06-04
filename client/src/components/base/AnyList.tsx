import { ElementType, Key, ReactNode } from 'react';
import { Props } from '@shared/types/types';
import Container from './Container';
import Conditional from './Conditional';

type ListItem<T extends ElementType> = {
  key?: Key;
  as: T;
  props: Props<T>;
};

type AnyListProps<T extends ElementType, C extends ElementType> = {
  items: ListItem<T>[];
  fallback?: ReactNode;
} & Props<typeof Container<C>>;

function AnyList<T extends ElementType, C extends ElementType>({
  items,
  fallback,
  ...props
}: AnyListProps<T, C>) {
  return (
    <Conditional con={items.length > 0} fallback={fallback}>
      <Container {...props}>
        {items.map(({ as: Component, key, props }, idx) => (
          <Component key={key ?? idx} {...props} />
        ))}
      </Container>
    </Conditional>
  );
}

export default AnyList;
