import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Container from '../Container/Container';
import { ToastContainer } from 'react-toastify';
import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authOperation from '../../redux/auth/authOperation';
import authSelector from '../../redux/auth/authSelector';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

import Modal from '../Modals/Modal/Modal';

import RestictedRoute from '../RestictedRoute/RestictedRoute';

const WelcomePage = lazy(() => import('../../pages/WelcomePage/WelcomePage'));
const AuthPage = lazy(() => import('../../pages/AuthPage/AuthPage'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelector.getIsRefreshing);
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(authOperation.refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isOpen && <Modal />}
      {isRefreshing ? (
        <p>Loading...</p>
      ) : (
        <Suspense fallback={<p>Loading...</p>}>
          <Container>
            <Routes>
              <Route
                path="/"
                element={
                  <PrivateRoute
                    redirectTo="/welcome"
                    component={<HomePage />}
                  />
                }
              />
              <Route
                path="/welcome"
                element={
                  <RestictedRoute redirectTo="/" component={<WelcomePage />} />
                }
              />
              <Route
                path="/auth/:id"
                element={
                  <RestictedRoute redirectTo="/" component={<AuthPage />} />
                }
              />
              <Route path="*" element={<WelcomePage />} />
            </Routes>
          </Container>
        </Suspense>
      )}
      <ToastContainer />
    </>
  );
}

export default App;
