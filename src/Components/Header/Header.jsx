import BurgerMenu from '../BurgerMenu/BurgerMenu';
import ThemeSelect from '../ThemeSelect/ThemeSelect';
import { Head, Navigation, BoxMenu, UserInfo, UserText } from './Header.styled';
import { useSelector } from 'react-redux';
import authSelector from '../../redux/auth/authSelector';

const Header = ({ openSideBar }) => {
  const name = useSelector(authSelector.getName);
  const userAvatar = useSelector(authSelector.getAvatar);
  return (
    <Head>
      <Navigation>
        <BurgerMenu openSideBar={openSideBar} />
        <BoxMenu>
          <ThemeSelect />
          <UserInfo>
            <UserText>{name}</UserText>
            <img src={userAvatar} alt="user name" />
          </UserInfo>
        </BoxMenu>
      </Navigation>
    </Head>
  );
};

export default Header;
