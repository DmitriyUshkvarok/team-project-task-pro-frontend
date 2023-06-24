import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelector from '../../redux/auth/authSelector';

const RestictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestictedRoute;
