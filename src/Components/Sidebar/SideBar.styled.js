import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 225px;
  height: 100vh;
  padding: 14px 0;
  text-align: start;
  background-color: rgba(22, 22, 22, 1);
  transition: left 0.3s ease-in-out;
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

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: -0.04em;

  color: #ffffff;

  @media screen and (min-width: 1280px) {
    padding-left: 24px;
  }
`;
