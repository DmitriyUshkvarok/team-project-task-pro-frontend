import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Container from '../Container/Container';
import { ToastContainer } from 'react-toastify';
import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authOperation from '../../redux/auth/authOperation';
import authSelector from '../../redux/auth/authSelector';
import Sidebar from '../Sidebar/Sidebar';
import ThemeSelect from '../ThemeSelect/ThemeSelect';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const WelcomePage = lazy(() => import('../../pages/WelcomePage/WelcomePage'));
const AuthPage = lazy(() => import('../../pages/AuthPage/AuthPage'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelector.getIsRefreshing);

  useEffect(() => {
    dispatch(authOperation.refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {isRefreshing ? (
          <p>Loading...</p>
        ) : (
          <Suspense fallback={<p>Loading...</p>}>
            <Sidebar />
            <ThemeSelect />
            <Container>
              <Routes>
                <Route path="/" element={<WelcomePage />}></Route>
                <Route path="welcome" element={<WelcomePage />} />
                <Route path="/auth/:id" element={<AuthPage />} />
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
