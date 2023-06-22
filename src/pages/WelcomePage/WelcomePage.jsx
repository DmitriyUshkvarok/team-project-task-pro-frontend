import { StyleSectionWelcomePage, IconStyled } from './WelcomePage.styled';
import { Link } from 'react-router-dom';

import imageUrl from '../../images/icons/iconsPng/imageLogo.png';
import iconUrl from '../../images/icons/icons.svg';

const WelcomePage = () => {
  return (
    <StyleSectionWelcomePage>
      <img src={imageUrl} alt="Boy with laptop" width="162" height="162" />
      <IconStyled>
        <use href={`${iconUrl}#icon-iconLogo`}></use>
      </IconStyled>
      <Link to="/auth/login">Log In</Link>
      <Link to="/auth/register">Register</Link>
    </StyleSectionWelcomePage>
  );
};

export default WelcomePage;
