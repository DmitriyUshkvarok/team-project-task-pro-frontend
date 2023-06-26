import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import authSelector from '../../redux/auth/authSelector';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Header from '../../Components/Header/Header';
import BoardScreen from '../../Components/BoardScreen/BoardScreen';

import { ContainerHome } from './HomePage.styled';

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const theme = useSelector(authSelector.getTheme);

  useEffect(() => {
    if (!theme) {
      document.body.setAttribute('data-theme', 'light');
    } else {
      document.body.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <ContainerHome>
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div>
        <Header openSideBar={toggleSidebar} />
        <BoardScreen closeSidebar={closeSidebar} />
      </div>
    </ContainerHome>
  );
};

export default HomePage;
