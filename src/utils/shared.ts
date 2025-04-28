import clsx, { ClassValue } from 'clsx';
import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const nameToPath = (path: string) =>
  path
    .split(' ')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

export const useContextWrapper = <T>(usingcontext: React.Context<T>) => {
  const context = useContext(usingcontext);
  if (!context)
    throw new Error('Context consumer must be a child of Context provider');
  return context;
};
