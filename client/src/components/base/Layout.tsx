import { useUserStore } from '@store/userStore';
import { FC, Suspense, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';

const redirects = ['/login', '/registration'];

const Layout: FC = () => {
  const token = useUserStore(({ token }) => token);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (token && redirects.includes(pathname)) navigate('/');
  }, [pathname]);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Outlet />
    </Suspense>
  );
};

export default Layout;
