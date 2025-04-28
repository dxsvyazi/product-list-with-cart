import { createContext } from 'react';
import { useContextWrapper } from '@utils/shared';

export type InfoContextProps = {
  name?: string;
  price?: string;
  category?: string;
  amount?: number;
};

const InfoContext = createContext<InfoContextProps | undefined>(undefined);

export const useInfoContext = () => useContextWrapper(InfoContext);

export default InfoContext;
