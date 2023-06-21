import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../../redux/theme/themeSlice';
import { useEffect } from 'react';
import { ThemeSelectWrapper, ThemeSelects } from './ThemeSelect.styled';

const ThemeSelect = () => {
  const dispatch = useDispatch();
  const themeColor = useSelector((state) => state.theme.themeColor);

  useEffect(() => {
    document.body.setAttribute('data-theme', themeColor);
  }, [themeColor]);

  const handleThemeToggle = (e) => {
    const selectedTheme = e.target.value;
    dispatch(setTheme(selectedTheme));
  };
  return (
    <div>
      <ThemeSelectWrapper>
        <ThemeSelects value={themeColor} onChange={handleThemeToggle}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="violet">Violet</option>
        </ThemeSelects>
      </ThemeSelectWrapper>
    </div>
  );
};

export default ThemeSelect;
