import styled, { keyframes } from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const FormikStyle = styled(Formik)``;

export const FormLogin = styled(Form)`
  width: 100%;
  height: 298px;
  padding: 24px;
  justify-content: center;
  flex-direction: column;
  background-color: var(--bgFormColor);
  border-radius: 8px;
  margin: 219px 508px;

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 424px;
    height: 332px;
    padding: 40px;
  }
`;

export const FeedbackFormGroup = styled.div`
  width: 100%;
  margin-bottom: 14px;
  position: relative;
`;

export const PasswordWrapper = styled.div``;

export const ToggleShowPassword = styled.span`
  position: absolute;
  top: 16px;
  right: 18px;
  height: 18px;
`;

export const InputEmail = styled(Field)`
  padding: 14px 18px;
  width: 100%;
  height: 49px;
  border: 1px solid #bedbb0;
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  border-radius: 8px;
  background-color: var(--bgInputColor);
  color: var(--activeTextColor);
  font-family: var(--poppinsFont);
  font-size: var(--fontSize14);

  @media screen and (min-width: 375px) {
    width: 285px;
  }

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  &::placeholder {
    font-size: var(--fontSize14);
  }
`;

export const InputPassword = styled(Field)`
  padding: 14px 18px;
  width: 100%;
  height: 49px;
  border: 1px solid #bedbb0;
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  border-radius: 8px;
  background-color: var(--bgInputColor);
  color: var(--activeTextColor);
  font-family: var(--poppinsFont);
  font-size: var(--fontSize14);

  outline: none;

  @media screen and (min-width: 375px) {
    width: 285px;
  }

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  &::placeholder {
    font-size: var(--fontSize14);
  }
`;

export const StyleErrorMessage = styled(ErrorMessage)``;

export const Error = styled.p`
  position: absolute;
  width: 100%;
  color: red;
  font-size: 10px;
  margin-top: 1px;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  margin-top: 24px;
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


export const BtnLogIn = styled.button`
  width: 100%;
  height: 49px;
  background-color: var(--bgAccentBtnColor);
  border-radius: 8px;
  cursor: pointer;
  color: var(--primaryTextColor);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  border: none;
  transition: var(--transition);

  @media screen and (min-width: 375px) {
    width: 285px;
  }

  @media screen and (min-width: 768px) {
    width: 342px;
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

export const Link = styled.div`
  height: 27px;
  text-align: start;
  font-family: var(--poppinsFont);
  font-size: var(--fontSize18);
  font-weight: var(--fontWeight500);
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 40px;
`;
