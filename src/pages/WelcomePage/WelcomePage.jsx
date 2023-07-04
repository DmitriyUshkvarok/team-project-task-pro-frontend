/* eslint-disable react/no-unescaped-entities */
import {
  StyleSectionWelcomePage,
  LogoBlock,
  Logo,
  Content,
  Link,
  ImgLogo,
  ImgIcon,
} from './WelcomePage.styled';

import imageUrl from '../../images/icons/iconsPng/menLaptopBig.png';
import iconUrl from '../../images/icons/sprite/icons.svg';

const WelcomePage = () => {
  return (
    <StyleSectionWelcomePage>
      <LogoBlock>
        <ImgLogo src={imageUrl} alt="Boy with laptop" />
        <Logo>
          <ImgIcon>
            <use href={`${iconUrl}#icon-iconLogo`}></use>
          </ImgIcon>
          Task Pro
        </Logo>
      </LogoBlock>
      <Content>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </Content>
      <nav>
        <Link to="/auth/register">Register</Link>
        <Link to="/auth/login">Log In</Link>
      </nav>
    </StyleSectionWelcomePage>
  );
};

export default WelcomePage;
