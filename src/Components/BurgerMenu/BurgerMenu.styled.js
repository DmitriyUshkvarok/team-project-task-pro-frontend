import styled from 'styled-components';

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--accentColor);
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const Svg = styled.svg`
  stroke: var(--primaryItemsColor);

  &:hover,
  &:focus {
    stroke: var(--accentColor);
  }
`;
