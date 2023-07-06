import styled, { keyframes } from 'styled-components';
import { ErrorMessage, Field } from 'formik';

export const NeedHelpContainer = styled.div`
  @media screen and (min-width: 320px) {
    position: relative;

    width: 90vw;
    height: 355px;
    background-color: var(--needHelpBgColor);
    border-radius: var(--borderRadius8);
    padding: 24px;
    font-family: var(--poppinsFont);
    margin: 0 auto;
    margin-top: 50px;
  }
  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const Title = styled.h2`
  font-size: var(--fontSize18);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.36px;
  margin-bottom: 24px;
  color: var(--titleNeedHelpColor);
  text-align: left;
`;

export const InputEmail = styled(Field)`
  width: 287px;
  height: 49px;
  padding: 14px 18px;
  background-color: inherit;
  border-radius: var(--borderRadius8);
  border: 1px solid var(--borderNeedHelpColor);
  opacity: 0.4000000059604645;
  color: var(--textInputColor);
  line-height: 18px;
  font-family: var(--poppinsFont);
  font-size: var(--fontSize14);
  letter-spacing: -0.28px;
  outline: none;
  @media screen and (min-width: 320px) {
    width: 100%;
  }

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
    outline: 1px solid var(--borderNeedHelpColor);
  }

  @media screen and (min-width: 768px) {
    width: 352px;
  }
`;

export const InputComment = styled(Field)`
  width: 287px;
  height: 120px;
  padding: 14px 18px;
  background-color: inherit;
  border-radius: var(--borderRadius8);
  border: 1px solid var(--borderNeedHelpColor);
  opacity: 0.4000000059604645;

  color: var(--textInputColor);
  line-height: 18px;

  font-family: var(--poppinsFont);
  font-size: var(--fontSize14);
  letter-spacing: -0.28px;

  resize: none;

  margin-top: 14px;

  @media screen and (min-width: 320px) {
    width: 100%;
  }

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
    outline: 1px solid var(--borderNeedHelpColor);
  }

  @media screen and (min-width: 768px) {
    width: 352px;
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

export const Button = styled.button`
  width: 287px;
  height: 49px;
  border-radius: var(--borderRadius8);
  background-color: var(--btnNeedHelpColor);

  color: var(--btnTextNeedHelpColor);
  border: 0px;
  font-size: var(--fontSize14);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.28px;
  margin-top: 24px;
  cursor: pointer;

  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 352px;
  }


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
`;

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const StyleErrorMessage = styled(ErrorMessage)``;

export const Error = styled.p`
  position: absolute;
  width: 100%;
  color: var(--errorColor);
  font-size: 10px;
  bottom: -11px;
`;
