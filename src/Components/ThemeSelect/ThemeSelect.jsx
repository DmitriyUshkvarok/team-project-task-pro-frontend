import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../../redux/theme/themeSlice';
import Select from 'react-select';
import { useEffect } from 'react';
import { customStyles } from './ThemeSelect.styled';

const themeOptions = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'violet', label: 'Violet' },
];

const ThemeSelect = () => {
  const dispatch = useDispatch();
  const themeColor = useSelector((state) => state.theme.themeColor);

  useEffect(() => {
    document.body.setAttribute('data-theme', themeColor);
  }, [themeColor]);

  const handleThemeToggle = (selectedOption) => {
    const selectedTheme = selectedOption.value;
    dispatch(setTheme(selectedTheme));
  };
  return (
    <Select
      value={themeOptions.find((option) => option.value === themeColor)}
      isSearchable={false}
      onChange={handleThemeToggle}
      options={themeOptions}
      styles={customStyles}
    />
  );
};

export default ThemeSelect;
