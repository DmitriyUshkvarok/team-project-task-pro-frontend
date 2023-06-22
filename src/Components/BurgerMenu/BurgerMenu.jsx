import SideBar from '../Sidebar/Sidebar';
import url from '../../icons/sprite/icons.svg';
import { Button, Svg } from './BurgerMenu.styled';
import { useState } from 'react';

const BurgerMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Button onClick={toggleSidebar}>
        <Svg width={24} height={24}>
          <use xlinkHref={`${url}#icon-menu-01`} />
        </Svg>
      </Button>
      {isSidebarOpen && (
        <>
          <SideBar />
        </>
      )}
    </div>
  );
};

export default BurgerMenu;
