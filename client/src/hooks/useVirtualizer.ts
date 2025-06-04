import { useEffect, useMemo, useState } from 'react';

type virtualizerProps<T extends HTMLElement> = {
  count: number;
  totalCount: number;
  itemSize: number;
  getScrollElement: () => T;
};

export const useVirtualizer = <T extends HTMLElement>({
  count,
  itemSize,
  totalCount,
  getScrollElement,
}: virtualizerProps<T>) => {
  const [scrollStart, setScrollStart] = useState(0);

  useEffect(() => {
    const scrollElement = getScrollElement();

    scrollElement.addEventListener('scroll', (e) => {
      const current = e.currentTarget as HTMLElement;
      if (current) {
        setScrollStart(Math.floor(current.scrollTop));
      }
    });
  }, []);

  const start = scrollStart / itemSize;

  const end = start + count;

  const listSize = useMemo(() => itemSize * count, [itemSize, count]);

  const totalHeight = useMemo(
    () => itemSize * totalCount,
    [itemSize, totalCount]
  );
};
