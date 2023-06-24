import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdKeyboardArrowDown } from 'react-icons/md';
import authOperation from '../../redux/auth/authOperation';
import { setTheme } from '../../redux/theme/themeSlice';
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

  useEffect(() => {
    document.body.setAttribute('data-theme', selectedTheme);
  }, [selectedTheme]);

  const handleThemeToggle = (theme) => {
    dispatch(setTheme(theme));
    dispatch(authOperation.updateTheme(theme));
    setSelectedTheme(theme);
    setIsSelectOpen(false);
  };

  return (
    <MainContainer isOpen={isSelectOpen}>
      <ThemeSelectWrapper onClick={() => setIsSelectOpen(!isSelectOpen)}>
        <ThemeTitle>Theme</ThemeTitle>
        <MdKeyboardArrowDown size={16} color="var(--logoHeaderColor)" />
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
