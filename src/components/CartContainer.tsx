import { FC } from 'react'
import { useProductStore } from '@store/productStore'
import Button from './base/Button'
import Container from './base/Container'
import Cart from './Cart'
import Order from './Order'
import TotalProducts from './TotalProducts'

const CartContainer: FC = () => {
  const hasProducts = useProductStore((state) => state.products.length > 0);
  const { clear } = useProductStore((state) => state.actions);

  return (
    <Container
        className='bg-white p-4 gap-0'
        variants={{ flow: 'col', rounded: 'xl' }}
      >
        <Container className='p-0 justify-between'>
          <TotalProducts />
          {hasProducts ? (
            <Button className='px-2' onClick={clear}>
              Clear
            </Button>
          ) : null}
        </Container>
        <Cart />
        {hasProducts ? <Order /> : null}
      </Container>
  )
}

export default CartContainer
