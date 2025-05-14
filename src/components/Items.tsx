import { FC, ComponentPropsWithRef as Props, Key, ReactNode } from 'react';
import Container from './base/Container';
import Conditional from './base/Conditional';

interface ItemProps<T extends { key: Key }> extends Props<typeof Container> {
  items: T[];
  to: FC<Omit<{ [K in keyof T]: T[K] }, 'key'>>;
  fallback?: ReactNode;
}

const Items = <T extends { key: Key }>({
  items,
  fallback,
  to: Component,
  ...props
}: ItemProps<T>) => (
  <Conditional con={items.length > 0} fallback={fallback}>
    <Container {...props}>
      {items.map(({ key, ...rest }) => (
        <Component key={key} {...rest} />
      ))}
    </Container>
  </Conditional>
);

export default Items;
