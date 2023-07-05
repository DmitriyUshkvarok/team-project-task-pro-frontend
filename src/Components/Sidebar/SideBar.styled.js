import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: ${({ isOpen, isClose }) => (isOpen && !isClose ? '0' : '-100%')};
  width: 225px;
  height: 100%;
  padding: 14px 0;
  text-align: start;
  background-color: var(--primarySidebarBgColor);
  transition: left var(--transition) ease-in-out;
  overflow-y: auto;
  z-index: 9;

  @media screen and (min-width: 768px) {
    width: 260px;
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
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
