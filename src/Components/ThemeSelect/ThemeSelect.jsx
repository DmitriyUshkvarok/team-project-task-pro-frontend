import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { setTheme } from '../../redux/theme/themeSlice';
import { useUpdateThemeMutation } from '../../redux/auth/authApi/authApiOperation';
import {
  ThemeSelectWrapper,
  ThemeTitle,
  MainContainer,
  ListThema,
  ItemThema,
} from './ThemeSelect.styled';

const themes = [
  { name: 'Light', value: 'light' },
  { name: 'Dark', value: 'dark' },
  { name: 'Violet', value: 'violet' },
];

const ThemeSelect = () => {
  const dispatch = useDispatch();
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('dark');
  const [updateTheme] = useUpdateThemeMutation();

  useEffect(() => {
    document.body.setAttribute('data-theme', selectedTheme);
  }, [selectedTheme]);

  const Close = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsSelectOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  Close(wrapperRef);

  const handleThemeToggle = (theme) => {
    dispatch(setTheme(theme));
    updateTheme(theme);
    setSelectedTheme(theme);
    setIsSelectOpen(false);
  };

  return (
    <MainContainer isOpen={isSelectOpen} ref={wrapperRef}>
      <ThemeSelectWrapper onClick={() => setIsSelectOpen(!isSelectOpen)}>
        <ThemeTitle>Theme</ThemeTitle>
        <MdKeyboardArrowDown size={16} color="var(--secondaryItemsColor)" />
      </ThemeSelectWrapper>
      <ListThema isOpen={isSelectOpen}>
        {themes.map(({ value, name }) => (
          <ItemThema key={value} onClick={() => handleThemeToggle(value)}>
            {name}
          </ItemThema>
        ))}
      </ListThema>
    </MainContainer>
  );
};

export default ThemeSelect;
