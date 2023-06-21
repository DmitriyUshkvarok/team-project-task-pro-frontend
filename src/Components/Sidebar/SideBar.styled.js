import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 225px;
  height: 100vh;
  padding: 14px 0;
  text-align: start;
  background-color: var(--sidebarColor);
  transition: left var(--transition) ease-in-out;
  overflow-y: auto;

  @media screen and (min-width: 768px) {
    width: 260px;
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

export const Logo = styled.a`
  padding-left: 14px;

  font-family: var(--poppinsFont);

  font-weight: var(--fontWeight600);
  font-size: var(--fontSize16);
  line-height: 1.5em;

  letter-spacing: -0.04em;

  color: var(--whiteColor);

  @media screen and (min-width: 1280px) {
    padding-left: 24px;
  }
`;
