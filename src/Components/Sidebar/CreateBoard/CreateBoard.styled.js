import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  padding: 0 14px;

  @media screen and (min-width: 768px) {
    padding: 0 24px;
    margin-top: 40px;
  }
`;

export const Desc = styled.p`
  padding-bottom: 8px;
  border-bottom: 1px solid var(--borderSidebarColor);

  font-family: var(--poppinsFont);

  font-size: var(--fontSize12);
  line-height: 1.5em;

  letter-spacing: -0.02em;

  color: var(--secondarySidebarColor);
`;

export const WrapTitleContent = styled.div`
  display: flex;
  gap: 77px;

  padding-bottom: 17px;
  border-bottom: 1px solid var(--borderSidebarColor);

  margin-top: 14px;
`;

export const Title = styled.h2`
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  font-size: var(--fontSize14);
  line-height: 1.5em;
  letter-spacing: -0.28px;

  color: var(--primarySidebarColor);
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

export const BtnCreateBoard = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 46px;
  height: 36px;
  background: var(--iconPlusBgColor);
  border-radius: 6px;
  border: none;
  font-size: var(--fontSize20);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:before {
    content: '';
    position: absolute;
    width: 500%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0)
    );
    top: 0;
    left: -300%;
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
    transition: left 1s ease-in-out, opacity 0.3s ease-in-out;

  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;


export const IconStyled = styled.svg`
  stroke: var(--iconPlusColor);
`;
