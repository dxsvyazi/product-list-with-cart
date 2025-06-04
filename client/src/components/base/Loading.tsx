import { FC, ReactNode } from 'react';

const Loading: FC<{
  isLoading: boolean;
  isError: boolean;
  children: ReactNode;
}> = ({ isLoading, isError, children }) => {
  if (isLoading) return <div>Loading</div>;

  if (isError) return <div>Error</div>;

  return children;
};

export default Loading;
