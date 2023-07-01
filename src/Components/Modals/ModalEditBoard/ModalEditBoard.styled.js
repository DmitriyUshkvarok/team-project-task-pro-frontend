import styled from 'styled-components';
import { Form, ErrorMessage as FormikError, Field } from 'formik';

export const ModalCard = styled.div`
  @media screen and (max-width: 374px) {
    width: 90vw;
  }
  width: 335px;
  height: 433px;
  background-color: var(--modalBgColor);
  border-radius: var(--borderRadius8);
  border: 1px solid var(--borderBoardColor);
  position: relative;
  padding: 24px;

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
  top: 120px;
  /* margin-top: 5px; */
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
  border: 1px solid var(--borderInputBoardColor);
  opacity: 0.4000000059604645;
  background-color: var(--bgInputBoardColor);
  box-shadow: 0px 4px 16px 0px rgba(var(--boxShadowInputBoardColor));

  color: var(--textInputBoardColor);
  font-size: var(--fontSize14);
  font-family: var(--poppinsFont);
  letter-spacing: -0.28px;

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
    outline: 1px solid var(--borderNeedHelpColor);
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

  label {
    cursor: pointer;

    &:hover,
    &:focus {
      stroke: var(--iconBoardActiveColor);
      transition-duration: 250ms;
    }
  }
`;

export const Icon = styled.svg`
  fill: none;
  stroke: var(--iconBoardColor);
  transition-duration: 250ms;
`;

export const FormikField = styled(Field)`
  opacity: 0;
  position: absolute;

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
    transition-property: outline;
    transition-duration: var(--transition);

    &:hover,
    &:focus,
    &:active {
      outline: 2px solid var(--accentColor);
      transition-duration: 250ms;
    }
  }
  label:first-of-type {
    background-color: var(--iconImageBGColor);
  }
`;
export const Img = styled.svg`
  width: 28px;
  height: 28px;
  border-radius: 8px;
`;

export const ImgBox = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 8px;
`;

export const FormikFieldImage = styled(Field)`
  display: none;

  &:checked + ${ImgBox} {
    outline: 2px solid var(--accentColor);
    transition-duration: 250ms;
  }

  &:checked + ${Img} {
    outline: 2px solid var(--accentColor);
    transition-duration: 250ms;
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
