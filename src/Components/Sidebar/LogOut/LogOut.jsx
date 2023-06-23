import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import authOperation from '../../../redux/auth/authOperation';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { Container, BtnLogOut, IconLogOut } from './LogOut.styled';

import url from '../../../images/icons/sprite/icons.svg';

const LogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleClickLogOut = () => {
    Notiflix.Confirm.init({
      width: '260px',
      position: 'center-top',
      fontFamily: 'Poppins',
      titleColor: '#bedbb0',
      okButtonBackground: '#bedbb0',
    });
    Notiflix.Confirm.show(
      'Confirmation',
      'Are you sure you want to log out?',
      'Yes',
      'No',
      async () => {
        setIsLoading(true);
        try {
          dispatch(authOperation.logOut());
          navigate('/welcome');
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      },
      () => {}
    );
  };

  return (
    <Container>
      {isLoading && <p>Loading...</p>}
      <BtnLogOut onClick={handleClickLogOut} type="buttom">
        <IconLogOut width="32" height="32">
          <use xlinkHref={`${url}#icon-login`} />
        </IconLogOut>
        <span> Log out</span>
      </BtnLogOut>
    </Container>
  );
};

export default LogOut;
