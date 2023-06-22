import BurgerMenu from '../BurgerMenu/BurgerMenu';
import ThemeSelect from '../ThemeSelect/ThemeSelect';
import { Head, Navigation, BoxMenu, UserInfo, UserText } from './Header.styled';

const Header = () => {
  return (
    <Head>
      <Navigation>
        <BurgerMenu />
        <BoxMenu>
          <ThemeSelect />
          <UserInfo>
            <UserText>Name</UserText>
          </UserInfo>
        </BoxMenu>
      </Navigation>
    </Head>
  );
};

export default Header;
