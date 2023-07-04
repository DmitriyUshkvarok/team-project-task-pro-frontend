import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { openModal } from '../../redux/modal/modalSlice';

import authSelector from '../../redux/auth/authSelector';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Header from '../../Components/Header/Header';
import BoardScreen from '../../Components/BoardScreen/BoardScreen';

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const theme = useSelector(authSelector.getTheme);

  const dispatch = useDispatch();

  const [currentBg, setCurrentBg] = useState('');

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

  const handleOpenModal = () => {
    dispatch(openModal({ name: 'craeteModalBoard' }));
  };

  const selectedBg = (boardBg) => {
    setCurrentBg(boardBg);
  };

  return (
    <>
      <Sidebar
        currentBg={currentBg}
        handleOpenModal={handleOpenModal}
        isSidebarOpen={isSidebarOpen}
      />
      <Header openSideBar={toggleSidebar} />
      <BoardScreen
        selectedBg={selectedBg}
        handleOpenModal={handleOpenModal}
        closeSidebar={closeSidebar}
      />
    </>
  );
};

export default HomePage;
