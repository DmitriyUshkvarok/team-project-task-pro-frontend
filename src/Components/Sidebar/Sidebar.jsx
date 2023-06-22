import { useState, useRef, useEffect } from 'react';
import Logo from './Logo/Logo';
import CreateBoards from './CreateBoard/CreateBoards';
import Boards from './Boards/Boards';
import CustomerSupport from './CustomerSupport/CustomerSupport';
import LogOut from './LogOut/LogOut';
import { Container } from './SideBar.styled';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const sidebarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleClickOutside);
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
    <Container isOpen={isOpen} isSticky={isSticky} ref={sidebarRef}>
      <Logo />
      <CreateBoards />
      <Boards />
      <CustomerSupport />
      <LogOut />
    </Container>
  );
};

export default Sidebar;
