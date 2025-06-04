import { FC } from 'react';
import { Dispatch, Props } from '@shared/types/types';
import { useQueryClient } from '@tanstack/react-query';
import { cn } from '@shared/utils/utils';
import { usePages as useRange } from '@hooks/useRange';
import List from './base/List';
import Button from './base/Button';
import Container from './base/Container';

interface PageRangeProps
  extends Omit<Props<typeof List<'li', 'div'>>, 'as' | 'to' | 'items'> {
  pages: number;
  currentPage?: number;
  visiblePages?: number;
  setCurrentPage: Dispatch<number>;
}

interface PageNumberProps extends Props<typeof Button> {
  page: number;
}

const PageNumber: FC<PageNumberProps> = ({ page, ...props }) => (
  <Button {...props}>{page}</Button>
);

const PageRange: FC<PageRangeProps> = ({
  pages,
  setCurrentPage: setCurrPage,
  visiblePages = 5,
  currentPage: initPage = 1,
  ...props
}) => {
  const {
    range,
    offset,
    incRange: inc,
    decRange: dec,
  } = useRange(pages, initPage, visiblePages);

  const queryClient = useQueryClient();

  return (
    <Container>
      <Button
        className='size-8 text-black'
        variants={{ color: 'info' }}
        onClick={dec}
        disabled={offset === 1}
      >
        {'<'}
      </Button>
      <List
        to={PageNumber}
        className='p-0'
        items={range.map((i) => ({
          page: i,
          onClick: () => {
            setCurrPage(i);
            queryClient.invalidateQueries({ queryKey: ['cards'] });
          },
          className: cn('size-8', {
            'bg-orange-600': initPage === i,
          }),
        }))}
        {...props}
      />
      <Button
        className='size-8 text-black'
        variants={{ color: 'info' }}
        onClick={inc}
        disabled={offset === pages - visiblePages + 1}
      >
        {'>'}
      </Button>
    </Container>
  );
};

export default PageRange;
