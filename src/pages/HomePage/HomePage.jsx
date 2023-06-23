import { useState } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Header from '../../Components/Header/Header';

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Header openSideBar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <div onClick={toggleSidebar}>
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
