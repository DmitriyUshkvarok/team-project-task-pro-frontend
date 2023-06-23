import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Container from '../Container/Container';
import { ToastContainer } from 'react-toastify';
import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authOperation from '../../redux/auth/authOperation';
import authSelector from '../../redux/auth/authSelector';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

//

import { useState } from 'react';
import Modal from '../Modals/Modal';

//

const WelcomePage = lazy(() => import('../../pages/WelcomePage/WelcomePage'));
const AuthPage = lazy(() => import('../../pages/AuthPage/AuthPage'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelector.getIsRefreshing);

  useEffect(() => {
    dispatch(authOperation.refreshCurrentUser());
  }, [dispatch]);

  //
  const [showModal, setShowModal] = useState(true);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  //

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {showModal && <Modal onClose={toggleModal} />}
        {isRefreshing ? (
          <p>Loading...</p>
        ) : (
          <Suspense fallback={<p>Loading...</p>}>
            <Container>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/"
                  element={
                    <PrivateRoute
                      redirectTo="/welcome"
                      component={<HomePage />}
                    />
                  }
                />
                <Route path="/welcome" element={<WelcomePage />} />
                <Route path="/auth/:id" element={<AuthPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </Container>
          </Suspense>
        )}
        <ToastContainer />
      </LocalizationProvider>
    </>
  );
}

export default App;
