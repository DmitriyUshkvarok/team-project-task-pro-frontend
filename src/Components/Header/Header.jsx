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
import { useGetCurrentUserQuery } from '../../redux/profileApi/profileApi';
import { openModal } from '../../redux/modal/modalSlice.js';

import { useDispatch } from 'react-redux';
import Container from '../Container/ContainerHeader';

const Header = ({ openSideBar }) => {
  const { data: currentUser } = useGetCurrentUserQuery();
  const dispatch = useDispatch();

  const name = useSelector(authSelector.getName);
  const userAvatar = useSelector(authSelector.getAvatar);
  const avatarSrc = userAvatar ? userAvatar : userDefault;

  return (
    <Head>
      <Container>
        <Navigation>
          <BurgerMenu openSideBar={openSideBar} />
          <BoxMenu>
            <ThemeSelect />

            <UserInfo
              onClick={() => dispatch(openModal({ name: 'editprofile' }))}
            >
              <UserText>{currentUser?.name || name}</UserText>
              <UserIcon
                src={currentUser?.avatarURL || avatarSrc}
                alt="user_icon"
                width={32}
                height={32}
              />
            </UserInfo>
          </BoxMenu>
        </Navigation>
      </Container>
    </Head>
  );
};

Header.propTypes = {
  openSideBar: PropTypes.func.isRequired,
};

export default Header;
