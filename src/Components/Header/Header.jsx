import BurgerMenu from '../BurgerMenu/BurgerMenu';
import ThemeSelect from '../ThemeSelect/ThemeSelect';
import {
  Head,
  Navigation,
  BoxMenu,
  UserInfo,
  UserText,
  UserIcon,
  UserIconSvg,
} from './Header.styled';
import { useSelector } from 'react-redux';
import authSelector from '../../redux/auth/authSelector';
// import userDefault from '../../images/icons/sprite/user_default.svg';
import url from '../../images/icons/sprite/icons.svg';
import PropTypes from 'prop-types';
import { useGetCurrentUserQuery } from '../../redux/profileApi/profileApi';
import { openModal } from '../../redux/modal/modalSlice.js';

import { useDispatch } from 'react-redux';

const Header = ({ openSideBar }) => {
  const { data: currentUser } = useGetCurrentUserQuery();
  const dispatch = useDispatch();

  const name = useSelector(authSelector.getName);
  const userAvatar = useSelector(authSelector.getAvatar);
  // console.log(currentUser.avatarURL);
  // const avatarSrc = userAvatar ? userAvatar : userDefault;

  return (
    <Head>
      <Navigation>
        <BurgerMenu openSideBar={openSideBar} />
        <BoxMenu>
          <ThemeSelect />

          <UserInfo
            onClick={() => dispatch(openModal({ name: 'editprofile' }))}
          >
            <UserText>{currentUser?.name || name}</UserText>
            {currentUser?.avatarURL ? (
              <UserIcon
                src={currentUser?.avatarURL || userAvatar}
                alt="user_icon"
                width={32}
                height={32}
              />
            ) : (
              <UserIconSvg>
                <use xlinkHref={`${url}#icon-user_default`} />
              </UserIconSvg>
            )}

            {/* <UserIcon
              src={currentUser?.avatarURL || avatarSrc}
              alt="user_icon"
              width={32}
              height={32}
            /> */}
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
