import styled from 'styled-components';

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
export const Svg = styled.svg`
  stroke: var(--logoHeaderColor);
  width: 24px;
  height: 24px;

  &:hover {
    stroke: var(--accentColor);
    filter: drop-shadow(0 0 20px var(--accentColor))
      drop-shadow(0 0 30px var(--accentColor));
    transition: var(--transition);
  }

  @media screen and (min-width: 768px) {
    stroke: var(--logoHeaderColor);
    width: 32px;
    height: 32px;
  }
`;
