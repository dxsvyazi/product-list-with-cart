import { FC } from 'react';
import { cn } from '@utils/shared';
import { Product as AddButtonProps } from '@sharedTypes/productTypes';
import { useProductStore } from '@store/productStore';
import addToCartIcon from '@images/icon-add-to-cart.svg';
import Button from './base/Button';
import Container from './base/Container';

const ProductButton: FC<AddButtonProps> = ({ name, price }) => {
  const amount = useProductStore(
    ({ products }) =>
      products.find((product) => product.name === name)?.amount || 0
  );
  const { setAmount, addProduct, removeProduct } = useProductStore(
    ({ actions }) => actions
  );

  const inc = () => {
    setAmount(name, amount + 1);
  };

  const dec = () => {
    setAmount(name, amount - 1);
    if (amount === 1) {
      removeProduct(name);
    }
  };

  const addToCart = () => {
    addProduct({ name, price, amount: 1, key: crypto.randomUUID() });
  };

  return amount ? (
    <Container
      className={cn(
        'bg-info-orange',
        'justify-between',
        'min-w-25',
        'w-[40%]',
        'h-10',
        'text-white'
      )}
      variants={{ rounded: 'full' }}
    >
      <Button
        className='max-w-[80%] px-2 bg-black hover:invert'
        variants={{ color: 'ghost' }}
        onClick={dec}
      >
        -
      </Button>
      <span className='font-bold'>{amount}</span>
      <Button
        className='max-w-[80%] px-2 bg-black hover:invert'
        variants={{ color: 'ghost' }}
        onClick={inc}
      >
        +
      </Button>
    </Container>
  ) : (
    <Button
      className='gap-2 py-2 px-4 min-w-35 w-[80%] h-10 text-sm'
      variants={{ color: 'white', border: 'black', borderWidth: 1, scale: 10 }}
      onClick={addToCart}
    >
      <img src={addToCartIcon} />
      Add To Cart
    </Button>
  );
};

export default ProductButton;
