import styled, { keyframes } from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as FormikError,
  Field as FormikField,
} from 'formik';

export const ModalContainer = styled.div`
  @media screen and (max-width: 374px) {
    width: 90vw;
  }
  width: 350px;
  height: 221px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid var(--borderBoardColor);
  background-color: var(--modalBgColor);
  position: relative;
`;

export const Title = styled.div`
  color: var(--titleBoardColor);
  font-size: var(--fontSize18);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  letter-spacing: var(--letterSpacing36);
  margin-bottom: 24px;
  text-align: start;
`;

export const Form = styled(FormikForm)``;

export const FormFieldTitle = styled.label`
  width: 100%;
  position: relative;
`;

export const ErrorMessage = styled(FormikError)`
  position: absolute;
  top: 120px;
  color: var(--errorColor);
  font-size: 10px;
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
`;

export const FieldTitle = styled(FormikField)`
  width: 100%;
  height: 49px;
  padding: 14px 18px 14px 18px;
  margin-bottom: 24px;
  align-items: center;
  border-radius: var(--borderRadius8);
  border: 1px solid var(--borderInputBoardColor);
  opacity: 0.4000000059604645;
  background-color: var(--bgInputBoardColor);
  box-shadow: 0px 4px 16px 0px rgba(var(--boxShadowInputBoardColor));

  color: var(--textInputBoardColor);
  font-size: var(--fontSize14);
  font-family: var(--poppinsFont), var(--roboto);
  letter-spacing: -0.28px;

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
    outline: 1px solid var(--borderNeedHelpColor);
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
  display: flex;
  justify-content: center;
  width: 100%;
  height: 49px;
  padding: 10px 0px 11px 0px;
  align-items: center;
  border-radius: var(--borderRadius8);
  border: none;
  background-color: var(--btnBoardColor);
  color: var(--btnTextBoardColor);
  font-size: var(--fontSize14);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.28px;

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

`;

export const ContainerIconButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 8px;
  background-color: var(--iconBoardBgColor);
  border-radius: var(--borderRadius8);
  stroke: var(--iconPlusBoardColor);
`;
