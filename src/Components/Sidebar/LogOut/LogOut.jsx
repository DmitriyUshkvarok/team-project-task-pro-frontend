import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import authOperation from '../../../redux/auth/authOperation';

import { Container, BtnLogOut } from './LogOut.styled';

import url from '../../../icons/sprite/icons.svg';

const LogOut = () => {
  const dispatch = useDispatch();

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
      () => {
        dispatch(authOperation.logOut());
      },
      () => {}
    );
  };

  return (
    <Container>
      <BtnLogOut onClick={handleClickLogOut} type="buttom">
        <svg width="32" height="32">
          <use xlinkHref={`${url}#icon-login`} />
        </svg>
        <span> Log out</span>
      </BtnLogOut>
    </Container>
  );
};

export default LogOut;
