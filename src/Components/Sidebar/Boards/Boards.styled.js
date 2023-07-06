import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BoxBoard = styled.div`
  @media screen and (min-width: 320px) {
    margin-top: 20px;

    margin-bottom: 20px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 30px;

    margin-bottom: 30px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListBoard = styled.ul``;

export const ItemBoard = styled.li`
  position: relative;
  padding: 20px;

  background-color: ${({ isSelected }) =>
    isSelected ? 'var(--secondarySidebarBgColor)' : 'transparent'};
  ::after {
    position: absolute;
    top: 0;
    right: 0px;
    bottom: 0;
    width: 4px;
    content: '';
    background: var(--accentBoardColor);
    border-radius: 4px 0px 0px 4px;
    display: ${({ isSelected }) => (isSelected ? 'block' : 'none')};
  }

  @media screen and (min-width: 1280px) {
    padding-left: 24px;
  }
`;

export const WrapTitle = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

export const IconProject = styled.svg`
  fill: none;

  width: 18px;
  height: 18px;
  stroke: ${({ isSelected }) =>
    isSelected ? 'var(--primarySidebarColor)' : 'var(--secondarySidebarColor)'};
`;

export const TitleBoard = styled.p`
  font-family: var(--poppinsFont), var(--roboto);

  font-weight: var(--fontWeight500);
  font-size: var(--fontSize14);
  line-height: 1.43em;

  letter-spacing: -0.02em;

  color: ${({ isSelected }) =>
    isSelected ? 'var(--primarySidebarColor)' : 'var(--secondarySidebarColor)'};
`;

export const WrapIcons = styled.div`
  display: ${({ isSelected }) => (isSelected ? 'flex' : 'none')};
  gap: 8px;
`;

export const IconStyled = styled.svg`
  fill: none;
  stroke: var(--secondarySidebarColor);
`;

export const BtnIcon = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover,
  &:focus {
    color: var(--accentColor);
    ${IconStyled} {
      stroke: currentColor;
    }
  }
`;
