import clsx, { ClassValue } from 'clsx';
import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const nameToPath = (path: string) =>
  path
    .split(' ')
    .map((part) => part.toLocaleLowerCase())
    .join('-');

export const fixKeys = <
  T extends object,
  R extends string,
  U extends (key: string) => R
>(
  source: T,
  transformKey: U
) =>
  Object.fromEntries(
    Object.entries(source).map(([key, value]) => [transformKey(key), value])
  );

export const useContextWrapper = <T>(usingcontext: React.Context<T>) => {
  const context = useContext(usingcontext);
  if (!context)
    throw new Error('Context consumer must be a child of Context provider');
  return context;
};
