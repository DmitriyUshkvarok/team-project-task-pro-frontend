import Notiflix from 'notiflix';
import { useLogoutMutation } from '../../../redux/auth/authApi/authApiOperation';

import { Container, BtnLogOut, IconLogOut } from './LogOut.styled';

import url from '../../../images/icons/sprite/icons.svg';

const LogOut = () => {
  const [logOut] = useLogoutMutation();
  const handleClickLogOut = () => {
    Notiflix.Confirm.init({
      width: '260px',
      position: 'center-top',
      fontFamily: 'Poppins',
      titleColor: 'var(--titleTextLOMColor)',
      backgroundColor: 'var(--bgLOMColor)',
      // titleBorderBottom: '1px solid var(--accentColor)',
      
      okButtonBackground: 'var(--accentColor)',

      messageColor: 'var(--messageLOMColor)',      
    });
    

    Notiflix.Confirm.show(
      'Confirmation',
      'Are you sure you want to log out?',
      'Yes',
      'No',
      async () => {
        try {
          await logOut();
          location.reload();
        } catch (error) {
          console.log(error);
        }
      },
      () => {}
    );
  };

  return (
    <Container>
      <BtnLogOut onClick={handleClickLogOut} type="button">
        <IconLogOut width="32" height="32">
          <use xlinkHref={`${url}#icon-login`} />
        </IconLogOut>
        <span> Log out</span>
      </BtnLogOut>
    </Container>
  );
};

export default LogOut;
