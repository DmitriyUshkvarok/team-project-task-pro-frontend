import styled from 'styled-components';

export const ThemeSelectWrapper = styled.div``;
export const ThemeSelects = styled.select`
  border: none;
  background-color: transparent;
  outline: none;

  option {
    color: red;
    font-size: 30px;
  }

  /* Стили при наведении на опцию */
  option:hover {
    color: red;
    font-size: 30px;
  }
`;

export const OptionStyled = styled.option`
  color: red;
  font-size: 30px;
  background-color: black;
`;
