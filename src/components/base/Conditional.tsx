import { FC, ReactNode } from 'react';

interface ConditionalProps {
  con: boolean;
  children: ReactNode;
  fallback?: ReactNode;
}

const Conditional: FC<ConditionalProps> = ({ con, fallback = null, children }) => {
  return con ? children : fallback;
};

export default Conditional;
