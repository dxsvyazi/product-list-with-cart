import { FC } from 'react';
import ContainerFlex from './base/Container';
import InfoContext, {
  InfoContextProps,
  useInfoContext,
} from '@contexts/InfoContext';
import { Props } from '@shared/types/types';

export const Name: FC<Props<'span'>> = ({ ...props }) => {
  const { name } = useInfoContext();

  return (
    <span className='text-info-primary' {...props}>
      {name}
    </span>
  );
};

export const Category: FC<Props<'span'>> = ({ ...props }) => {
  const { category } = useInfoContext();

  return (
    <span className='text-info-primary' {...props}>
      {category}
    </span>
  );
};

export const Price: FC<{ prefix?: string } & Props<'span'>> = ({
  prefix,
  ...props
}) => {
  const { price } = useInfoContext();

  return (
    <span className='text-info-primary' {...props}>
      {prefix ?? null} ${price}
    </span>
  );
};

export const Amount: FC<Props<'span'>> = (props) => {
  const { amount } = useInfoContext();

  return (
    <span className='text-info-orange' {...props}>
      {amount}x
    </span>
  );
};

export const TotalPrice: FC<Props<'span'>> = (props) => {
  const { amount, price } = useInfoContext();

  return (
    <span className='text-info-secondary' {...props}>
      ${amount && price && (amount * parseFloat(price)).toFixed(2)}
    </span>
  );
};

const ProductInfo: FC<Props<typeof ContainerFlex> & InfoContextProps> = ({
  name,
  price,
  category,
  amount,
  ...props
}) => (
  <InfoContext.Provider value={{ price, category, amount, name }}>
    <ContainerFlex {...props} />
  </InfoContext.Provider>
);

export default ProductInfo;
