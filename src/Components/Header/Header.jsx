import BurgerMenu from '../BurgerMenu/BurgerMenu';
import ThemeSelect from '../ThemeSelect/ThemeSelect';
import { Head, Navigation, BoxMenu, UserInfo, UserText } from './Header.styled';
import { useSelector } from 'react-redux';
import authSelector from '../../redux/auth/authSelector';

import { openModal } from '../../redux/modal/modalSlice.js';

import { useDispatch } from 'react-redux';

const Header = ({ openSideBar }) => {
  const dispatch = useDispatch();

  const name = useSelector(authSelector.getName);
  const userAvatar = useSelector(authSelector.getAvatar);

  return (
    <Head>
      <Navigation>
        <BurgerMenu openSideBar={openSideBar} />
        <BoxMenu>
          <ThemeSelect />

          <UserInfo
            onClick={() => dispatch(openModal({ name: 'editprofile' }))}
          >
            <UserText>{name}</UserText>
            <img src={userAvatar} alt="user name" />
          </UserInfo>
        </BoxMenu>
      </Navigation>
    </Head>
  );
};

export default Header;
