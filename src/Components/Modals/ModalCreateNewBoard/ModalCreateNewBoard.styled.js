import styled, { keyframes } from 'styled-components';
import { Form, ErrorMessage as FormikError, Field } from 'formik';

export const ModalCard = styled.div`
  height: 433px;
  background-color: var(--modalBgColor);
  border-radius: var(--borderRadius8);
  border: 1px solid var(--borderBoardColor);
  position: relative;
  padding: 24px;
  @media screen and (min-width: 320px) {
    width: 90vw;
  }
  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;

export const Title = styled.h2`
  color: var(--titleBoardColor);
  font-size: var(--fontSize18);
  font-family: var(--poppinsFont);
  font-weight: (--fontWeight500);
  letter-spacing: var(--letterSpacing36);
  text-align: start;
  margin-bottom: 24px;
`;

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const FormFieldTitle = styled.label`
  width: 100%;
  position: relative;
`;

export const ErrorMessage = styled(FormikError)`
  position: absolute;
  top: ${({ name }) =>
    name === 'title' ? '50px' : name === 'iconId' ? '190px' : '60px'};

  color: var(--errorColor);
  font-size: 10px;
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
`;

export const FieldTitle = styled(Field)`
  width: 100%;

  height: 49px;
  padding: 14px 18px 14px 18px;
  margin-bottom: 24px;
  align-items: center;
  border-radius: var(--borderRadius8);
  background: var(--bgInputBoardColor);
  border: 1px solid var(--borderInputBoardColor);
  opacity: 0.4000000059604645;

  box-shadow: 0px 4px 16px 0px rgba(var(--boxShadowInputBoardColor));
  color: var(--textInputBoardColor);

  font-size: var(--fontSize14);
  font-family: var(--poppinsFont), var(--roboto);
  letter-spacing: -0.28px;

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
    outline: 1px solid var(--accentColor);
  }

  @media screen and (min-width: 768px) {
    width: 302px;
  }
`;

export const Text = styled.h3`
  color: var(--titleBoardColor);
  font-size: var(--fontSize14);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  letter-spacing: var(--letterSpacing28);
  text-align: start;
  margin-bottom: 14px;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: var(--iconBoardColor);
  transition-duration: 250ms;
  cursor: pointer;
`;

export const FormikField = styled(Field)`
  opacity: 0;
  position: absolute;
  cursor: pointer;
  transition-duration: 250ms;

  &:hover + ${Icon},
  &:focus + ${Icon} {
    stroke: var(--iconBoardActiveColor);
    transition-duration: 250ms;
 

  &:checked + ${Icon} {
    stroke: var(--iconBoardActiveColor);
    transition-duration: 250ms;
  }
`;

export const ImageContainer = styled.div`
  @media screen and (max-width: 333px) {
    margin-bottom: 20px;
  }
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 40px;

  label {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;

    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition-property: outline-color;
    transition-duration: var(--transition);
    outline: 2.5px solid rgba(0, 0, 0, 0);

    &:hover,
    &:focus,
    &:active {
      outline-color: var(--accentColor);
    }
  }
  label:first-of-type {
    background-color: var(--iconImageBGColor);
  }
`;

export const ImgBox = styled.div`
  position: relative;
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  outline: 2px solid transparent;
`;

export const FormikFieldImage = styled(Field)`
  display: none;
  

  &:checked+${ImgBox} {
    outline-color: var(--accentColor);
    outline-offset: 0;
    transition-duration: 250ms;
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

  @media screen and (min-width: 768px) {
    width: 302px;
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

export const ImgStyled = styled.img`
  object-fit: cover;
  border-radius: 8px;
`;
