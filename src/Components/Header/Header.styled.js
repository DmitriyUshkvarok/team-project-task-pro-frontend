import { keyframes } from 'styled-components';
import styled from 'styled-components';

const slideIn = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Head = styled.header`
  background-color: var(--headerColor);

  animation: ${slideIn} 0.5s ease-out;

  @media screen and (min-width: 768px) {
  }
`;

export const ContainerHead = styled.div`
  margin: 0 auto;
  padding: 14px 20px 14px 20px;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 18px 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    padding: 18px 24px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BoxMenu = styled.div`
  display: flex;
  align-items: baseline;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

export const UserText = styled.p`
  font-family: var(--poppinsFont), var(--roboto);
  font-weight: var(--fontWeight500);
  font-size: var(--fontSize14);
  margin-left: 14px;
  cursor: pointer;
  color: var(--primaryItemsColor);
  &:hover,
  &:focus {
    color: var(--accentColor);
  }
`;

export const UserIcon = styled.img`
  background-color: var(--headerPageColor);
  border-radius: 8px;
  cursor: pointer;
`;

export const UserIconSvg = styled.svg`
  fill: var(--userIconBgSvgColor);
  color: var(--userIconSvgColor);
  cursor: pointer;

  width: 32px;
  height: 32px;
  border-radius: var(--borderRadius8);
`;
