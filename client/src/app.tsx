import { FC, lazy, useEffect } from 'react';
import { Toaster } from 'sonner';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { authRefresh } from '@api/user.api';
import { useUserStore } from '@store/userStore';
import ConfirmationModal from '@components/ConfirmationModal';
import Main from '@pages/Main';
import Header from '@components/Header';
import Layout from '@components/base/Layout';

const Login = lazy(() => import('@pages/Login'));
const Registration = lazy(() => import('@pages/Registration'));

const App: FC = () => {
  const setToken = useUserStore(({ setToken }) => setToken);

  useEffect(() => {
    authRefresh().then(({ token }) => setToken(token));
  }, []);

  return (
    <Router>
      <Header className='w-full h-fit justify-between bg-neutral-900 sticky top-0' />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
        </Route>
      </Routes>
      <ConfirmationModal />
      <Toaster theme='system' position='bottom-center' richColors />
    </Router>
  );
};

export default App;
