import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { setTheme } from '../../redux/theme/themeSlice';
import {
  ThemeSelectWrapper,
  ThemeTitle,
  MainContainer,
  ListThema,
  ItemThema,
} from './ThemeSelect.styled';

const ThemeSelect = () => {
  const dispatch = useDispatch();
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('dark');

  useEffect(() => {
    document.body.setAttribute('data-theme', selectedTheme);
  }, [selectedTheme]);

  const handleThemeToggle = (theme) => {
    dispatch(setTheme(theme));
    setSelectedTheme(theme);
    setIsSelectOpen(false);
  };

  return (
    <MainContainer>
      <ThemeSelectWrapper onClick={() => setIsSelectOpen(!isSelectOpen)}>
        <ThemeTitle>Theme</ThemeTitle> <MdKeyboardArrowDown size={16} />
      </ThemeSelectWrapper>
      {isSelectOpen && (
        <ListThema>
          <ItemThema onClick={() => handleThemeToggle('light')}>
            Light
          </ItemThema>
          <ItemThema onClick={() => handleThemeToggle('dark')}>Dark</ItemThema>
          <ItemThema onClick={() => handleThemeToggle('violet')}>
            Violet
          </ItemThema>
        </ListThema>
      )}
    </MainContainer>
  );
};

export default ThemeSelect;
