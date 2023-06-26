import styled from 'styled-components';

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: var(--accentColor);
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
export const Svg = styled.svg`
  stroke: var(--primaryItemsColor);

  &:hover {
    stroke: var(--accentColor);
  }
`;
