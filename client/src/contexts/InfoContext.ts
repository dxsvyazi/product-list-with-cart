import { createContext } from 'react';
import { useContextWrapper } from '@shared/utils/utils';
import {
  ProductWithAmount,
  ProductWithCategory,
} from '@shared/types/productTypes';

export type InfoContextProps = Partial<ProductWithCategory & ProductWithAmount>;

const InfoContext = createContext<InfoContextProps | undefined>(undefined);

export const useInfoContext = () => useContextWrapper(InfoContext);

export default InfoContext;
