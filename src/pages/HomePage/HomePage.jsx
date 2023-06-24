import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelector from '../../redux/auth/authSelector';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Header from '../../Components/Header/Header';

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
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <div onClick={closeSidebar}>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem minus
          soluta natus nostrum libero necessitatibus laboriosam veniam amet,
          laborum dolores iste, illum quis ullam quas! Maiores ipsa ipsum quo
          reprehenderit maxime sunt voluptatem ad asperiores officia deleniti
        </div>
      </div>
    </div>
  );
};

export default HomePage;
