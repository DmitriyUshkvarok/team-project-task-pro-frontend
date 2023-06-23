import SideBar from '../Sidebar/Sidebar';
import url from '../../images/icons/sprite/icons.svg';
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
        <Svg>
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
