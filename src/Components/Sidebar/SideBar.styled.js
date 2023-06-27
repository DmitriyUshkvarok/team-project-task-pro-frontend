import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0px;
  left: ${({ isOpen, isClose }) => (isOpen && !isClose ? '0' : '-100%')};
  width: 225px;
  height: 812px;
  padding: 14px 14px;
  text-align: start;
  background-color: var(--primarySidebarBgColor);
  transition: left var(--transition) ease-in-out;
  overflow-y: auto;
  z-index: 1;

  @media screen and (min-width: 375px) {
    width: 225px;
  }

  @media screen and (min-width: 768px) {
    padding: 24px 24px;
    width: 260px;
    height: 1024px;
  }

  @media screen and (min-width: 1280px) {
    height: 770px;
  }

  ${({ isSticky }) =>
    isSticky &&
    css`
      position: static;
      height: auto;
      overflow-y: visible;

      padding: 24px 0;
    `}
`;
