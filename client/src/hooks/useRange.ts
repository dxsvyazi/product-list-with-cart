import { useState } from 'react';

export const usePages = (
  totalPages: number,
  initPage: number,
  visiblePages: number,
  pageStart: number = 1
) => {
  const [offset, setOffset] = useState(
    Math.max(pageStart, initPage - visiblePages + 1)
  );

  const range = Array.from({ length: visiblePages }, (_, i) => i + offset);

  const decRange = () => setOffset(Math.max(1, offset - 1));

  const incRange = () =>
    setOffset(Math.min(totalPages - visiblePages + pageStart, offset + 1));

  return { range, offset, decRange, incRange };
};
