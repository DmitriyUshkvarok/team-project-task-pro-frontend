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
  width: 100%;
  height: 60px;
  padding: 18px 32px;
  animation: ${slideIn} 0.5s ease-out;

  @media screen and (min-width: 768px) {
    height: 68px;
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
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  font-size: var(--fontSize14);
  margin-left: 14px;
  cursor: pointer;
  color: var(--primaryItemsColor);
  &:hover {
    color: var(--accentColor);
  }
`;
export const UserIcon = styled.img`
  background-color: var(--headerPageColor);
  border-radius: 8px;
  cursor: pointer;
`;

export const UserIconSvg = styled.svg`
  fill: var(--userIconBgSvgColor); /* Цвет фона */
  color: var(--userIconSvgColor); /* Цвет человечка */
  color: #eff878; /* Цвет человечка */
  fill: #009fff; /* Цвет фона */

  width: 32px;
  height: 32px;
  border-radius: 8px;
`;

// body[data - theme= 'light'] {
//   --userIconBgSvgColor: #F6F6F7;
//   --userIconSvgColor: #ffffff;
// }

// body[data - theme= 'dark'] {
//   --userIconBgSvgColor: #1F1F1F;
//   --userIconSvgColor: #151515;
// }

// body[data - theme= 'violet'] {
//   --userIconBgSvgColor: #ECEDFD;
//   --userIconSvgColor: #ffffff;
// }
