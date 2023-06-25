import BurgerMenu from '../BurgerMenu/BurgerMenu';
import ThemeSelect from '../ThemeSelect/ThemeSelect';
import {
  Head,
  Navigation,
  BoxMenu,
  UserInfo,
  UserText,
  UserIcon,
} from './Header.styled';
import { useSelector } from 'react-redux';
import authSelector from '../../redux/auth/authSelector';
import userDefault from '../../images/icons/iconsPng/user_default.png';
import PropTypes from 'prop-types';

import { openModal } from '../../redux/modal/modalSlice.js';

import { useDispatch } from 'react-redux';

const Header = ({ openSideBar }) => {
  const dispatch = useDispatch();

  const name = useSelector(authSelector.getName);
  const userAvatar = useSelector(authSelector.getAvatar);
  const avatarSrc = userAvatar ? userAvatar : userDefault;

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
            <UserIcon src={avatarSrc} alt="user_icon" width={32} height={32} />
          </UserInfo>
        </BoxMenu>
      </Navigation>
    </Head>
  );
};

Header.propTypes = {
  openSideBar: PropTypes.func.isRequired,
};

export default Header;
