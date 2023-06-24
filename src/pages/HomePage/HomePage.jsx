import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import authSelector from '../../redux/auth/authSelector';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Header from '../../Components/Header/Header';
import HeadHomePage from '../../Components/HeadHomePage/HeadHomePage';

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const theme = useSelector(authSelector.getTheme);
  console.log(theme);

  useEffect(() => {
    if (!theme) {
      console.log('Iam here');
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
    <div>
      <Header openSideBar={toggleSidebar} />
      <div onClick={closeSidebar}>
        <HeadHomePage />
      </div>
      <Sidebar isSidebarOpen={isSidebarOpen} />
    </div>
  );
};

export default HomePage;
