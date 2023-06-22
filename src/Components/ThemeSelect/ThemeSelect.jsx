// import { useSelector, useDispatch } from 'react-redux';
// import { setTheme } from '../../redux/theme/themeSlice';
// import { useEffect } from 'react';
// import {
//   ThemeSelectWrapper,
//   ThemeSelects,
//   OptionStyled,
// } from './ThemeSelect.styled';

// const ThemeSelect = () => {
//   const dispatch = useDispatch();
//   const themeColor = useSelector((state) => state.theme.themeColor);

//   useEffect(() => {
//     document.body.setAttribute('data-theme', themeColor);
//   }, [themeColor]);

//   const handleThemeToggle = (e) => {
//     const selectedTheme = e.target.value;
//     dispatch(setTheme(selectedTheme));
//   };
//   return (
//     <div>
//       <ThemeSelectWrapper>
//         <ThemeSelects value={themeColor} onChange={handleThemeToggle}>
//           <OptionStyled value="light">Light</OptionStyled>
//           <OptionStyled value="dark">Dark</OptionStyled>
//           <OptionStyled value="violet">Violet</OptionStyled>
//         </ThemeSelects>
//       </ThemeSelectWrapper>
//     </div>
//   );
// };

// export default ThemeSelect;
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from '../../redux/theme/themeSlice';

const ThemeSelect = () => {
  const dispatch = useDispatch();
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('dark'); // Изначально выбранное значение

  useEffect(() => {
    document.body.setAttribute('data-theme', selectedTheme);
  }, [selectedTheme]);

  const handleThemeToggle = (theme) => {
    dispatch(setTheme(theme));
    setSelectedTheme(theme);
    setIsSelectOpen(false);
  };

  return (
    <div>
      <div onClick={() => setIsSelectOpen(!isSelectOpen)}>Theme</div>
      {isSelectOpen && (
        <ul>
          <li onClick={() => handleThemeToggle('light')}>Light</li>
          <li onClick={() => handleThemeToggle('dark')}>Dark</li>
          <li onClick={() => handleThemeToggle('violet')}>Violet</li>
        </ul>
      )}
    </div>
  );
};

export default ThemeSelect;
