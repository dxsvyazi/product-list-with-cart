import { FC, ComponentPropsWithRef as Props } from 'react';
import ContainerFlex from './base/Container';
import InfoContext, {
  InfoContextProps,
  useInfoContext,
} from '@contexts/InfoContext';

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
      {prefix ? prefix : null} ${price}
    </span>
  );
};

export const Amount: FC<Props<'span'>> = (props) => {
  const { amount } = useInfoContext();

  return (
    <span className='text-amber-600' {...props}>
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
}) => {
  return (
    <InfoContext.Provider value={{ price, category, amount, name }}>
      <ContainerFlex {...props} />
    </InfoContext.Provider>
  );
};

export default ProductInfo;