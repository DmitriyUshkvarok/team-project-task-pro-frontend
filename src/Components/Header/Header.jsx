import BurgerMenu from '../BurgerMenu/BurgerMenu';
import EditProfile from '../Modals/EditProfile/EditProfile';
import ThemeSelect from '../ThemeSelect/ThemeSelect';
import {
  Head,
  Navigation,
  BoxMenu,
  UserInfo,
  UserText,
  UserIcon,
} from './Header.styled';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import authSelector from '../../redux/auth/authSelector';
import userDefault from '../../images/icons/iconsPng/user_default.png';

import { openModal } from '../../redux/modal/modalSlice.js';

import { useDispatch } from 'react-redux';

const Header = ({ openSideBar }) => {
  const dispatch = useDispatch();

  const name = useSelector(authSelector.getName);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };


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
            <UserIcon
              src={userDefault}
              alt="user_icon"
              width={32}
              height={32}
            />
          </UserInfo>
          {isModalOpen && <EditProfile />}
        </BoxMenu>
      </Navigation>
    </Head>
  );
};

export default Header;
