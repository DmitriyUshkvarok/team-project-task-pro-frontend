import styled, { keyframes } from 'styled-components';

export const BoxColumns = styled.li`
  &:last-child {
    margin-right: 34px;
  }
`;

export const BoxColumnsTitle = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    align-items: center;
    padding: 18px 20px 17px 20px;
    border-radius: 8px;
    background-color: var(--screenPageTitleBgColor);
    margin-bottom: 14px;
    width: 279px;
  }
  @media screen and (min-width: 375px) {
    width: 334px;
  }
`;
export const Subject = styled.h3`
  margin-right: auto;
  color: var(--screenPageTitleColor);
  font-size: 14px;
  font-family: var(--poppinsFont), var(--roboto);
  font-weight: 500;
  letter-spacing: -0.28px;
`;

export const IconStyled = styled.svg`
  stroke: var(--screenPageIconColor);
`;

export const ListTask = styled.ul`
  @media screen and (min-width: 320px) {
    position: relative;
    min-width: 292px;
    height: fit-content;
    max-height: calc(100vh - 340px);
    overflow-y: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 14px;
  }
  @media screen and (min-width: 375px) {
    width: 346px;
  }
  @media screen and (min-width: 768px) {
    max-height: calc(100vh - 360px);
  }
  @media screen and (min-width: 1280px) {
    max-height: calc(100vh - 305px);
  }
  ::-webkit-scrollbar {
    background: var(--screenPageBGScroll);
    width: 8px;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    width: 8px;
    border-radius: 12px;
    background-color: var(--screenPageScrollColor);
  }

  ::-webkit-scrollbar-track {
    width: 8px;
    height: 478px;
    flex-shrink: 0;

    border-radius: 12px;
    background: var(--screenPageBGScroll);
    @media screen and (min-width: 768px) {
      height: 640px;
    }
    @media screen and (min-width: 1280px) {
      height: 478px;
    }
  }
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1.03);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.03);
  }
`;


export const AddCardBtn = styled.button`
  background-color: var(--addBtnBgColor);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  min-width: 279px;
  height: 56px;
  border: none;
  color: var(--addBtnTextColor);
  font-family: var(-poppinsFont);
  font-weight: var(--fontWeight500);
  font-size: var(--fontSize14);
  border-radius: var(--borderRadius8);
  cursor: pointer;

  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:before {
    content: '';
    position: absolute;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0)
    );
    top: 0;
    left: -100%;
    transform: rotate(45deg);
    transition: all 0.3s;
    opacity: 0;
  }

  &:hover,
  &:focus {
    transform: translateY(-2px);
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
    animation: ${pulseAnimation} 1s ease-in-out infinite;
  }

  &:hover:before,
  &:focus:before {
    left: 100%;
    opacity: 1;
    transition: left 2s ease-in-out, opacity 0.3s ease-in-out;
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }



  @media screen and (min-width: 375px) {
    min-width: 334px;
  }
`;
export const AddCardIcon = styled.span`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  stroke: var(--iconBtnTextColor);
  background-color: var(--iconBtnBgColor);
  border-radius: var(--borderRadius8);
`;

export const BtnIcon = styled.button`
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
