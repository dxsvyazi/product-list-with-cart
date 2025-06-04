import { ElementType } from 'react';
import { Props } from '@shared/types/types';
import { cn } from '@shared/utils/utils';
import Container from './Container';
import AnyList from './AnyList';

const DropDown = <T extends ElementType, C extends ElementType>({
  items,
  selected,
  ...props
}: Props<typeof AnyList<T, C>> & { selected?: number }) => {
  const { as: Component, props: sprops } = items[selected ?? 0];

  return (
    <Container
      className='relative group'
      variants={{ flow: 'col', items: 'centered' }}
    >
      <Component {...sprops} />
      <Container
        className={cn(
          'p-0 absolute top-full overflow-hidden',
          'transition duration-500 ease-in-out',
          'opacity-0 group-hover:opacity-100'
        )}
      >
        <AnyList items={items} {...props} />
      </Container>
    </Container>
  );
};

export default DropDown;
