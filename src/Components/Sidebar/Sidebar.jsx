import { useState, useEffect } from 'react';
import Logo from './Logo/Logo';
import CreateBoards from './CreateBoard/CreateBoards';
import Boards from './Boards/Boards';
import CustomerSupport from './CustomerSupport/CustomerSupport';
import LogOut from './LogOut/LogOut';
import { Container } from './SideBar.styled';

const Sidebar = ({ isSidebarOpen, handleOpenModal, currentBg }) => {
  const [isClose, setClose] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setClose(true);
    }
  };

  useEffect(() => {
    if (isSidebarOpen === true) {
      setClose(false);
    }
  }, [isSidebarOpen]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSticky(window.innerWidth >= 1280);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container isClose={isClose} isOpen={isSidebarOpen} isSticky={isSticky}>
      <Logo />
      <CreateBoards handleOpenModal={handleOpenModal} />
      <Boards currentBg={currentBg} />
      <CustomerSupport />
      <LogOut />
    </Container>
  );
};

export default Sidebar;
