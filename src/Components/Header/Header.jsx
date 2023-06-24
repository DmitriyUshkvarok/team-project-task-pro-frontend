import BurgerMenu from '../BurgerMenu/BurgerMenu';
import ThemeSelect from '../ThemeSelect/ThemeSelect';
import { Head, Navigation, BoxMenu, UserInfo, UserText } from './Header.styled';

import { openModal } from '../../redux/modal/modalSlice.js';

import { useDispatch } from 'react-redux';

const Header = ({ openSideBar }) => {
  const dispatch = useDispatch();
  return (
    <Head>
      <Navigation>
        <BurgerMenu openSideBar={openSideBar} />
        <BoxMenu>
          <ThemeSelect />
          <UserInfo
            onClick={() => dispatch(openModal({ name: 'editprofile' }))}
          >
            <UserText>Name</UserText>
          </UserInfo>
        </BoxMenu>
      </Navigation>
    </Head>
  );
};

export default Header;
