import { FC } from 'react';
import { cn } from '@shared/utils/utils';
import { Props } from '@shared/types/types';
import { Link } from 'react-router';
import { useUserStore } from '@store/userStore';
import LogoIcon from '@images/LogoIconNoTitle.png';
import Container from './base/Container';
import Button from './base/Button';
import Conditional from './base/Conditional';

const Header: FC<Props<typeof Container<'header'>>> = (props) => {
  const token = useUserStore(({ token }) => token);

  return (
    <Container as='header' {...props}>
      <Button
        as={Link}
        to='/'
        className='gap-2 p-2 text-2xl font-extrabold self-center'
        variants={{ color: 'ghost', rounded: 'md' }}
      >
        <img src={LogoIcon} alt='logo' className='size-10' />
        Desserts
      </Button>
      <Conditional con={token === null}>
        <Container className='lg:flex-row' variants={{ flow: 'col' }}>
          <Button
            as={Link}
            to='/login'
            className='px-2 py-1'
            variants={{ color: 'orange' }}
          >
            Sign In
          </Button>
          <Button
            as={Link}
            to='/registration'
            className={cn(
              'px-2 py-1',
              'bg-black hover:invert',
              'outline-2 outline-white outline-offset-[-2px]'
            )}
            variants={{ color: 'ghost' }}
          >
            Sign Up
          </Button>
        </Container>
      </Conditional>
    </Container>
  );
};

export default Header;
