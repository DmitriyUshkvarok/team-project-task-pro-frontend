import styled from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as FormikError,
  Field as FormikField,
} from 'formik';

export const ModalContainer = styled.div`
  width: 350px;
  height: 221px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  box-shadow: var(--boxShadow);
  border-radius: 8px;
  border: var(----modalBorder);
  background-color: var(--modalBGC);
  position: relative;
`;

export const Title = styled.div`
  color: var(--titleColor);
  font-size: var(--fontSize18);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  letter-spacing: var(--letterSpacing36);
  margin-bottom: 24px;
  text-align: start;
`;

export const Form = styled(FormikForm)``;

export const FormFieldTitle = styled.label`
  color: var(--whiteColor);
  font-size: var(--fontSize14);
  font-family: var(--poppinsFont);
  letter-spacing: -0.28px;
`;

export const ErrorMessage = styled(FormikError)`
  position: absolute;
  top: 120px;
  color: red;
  font-size: 10px;
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
`;

export const FieldTitle = styled(FormikField)`
  width: 302px;
  height: 49px;
  padding: 14px 18px 14px 18px;
  margin-bottom: 24px;
  align-items: center;
  border-radius: var(--borderRadius8);
  border: 1px solid var(--accentColor);
  opacity: 0.4000000059604645;
  background-color: var(--helpBlockColor);
  box-shadow: 0px 4px 16px 0px rgba(var(--borderBottomColor));
  color: var(--whiteColor);

  &:hover,
  &:active {
    opacity: 1;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 287px;
  height: 49px;
  padding: 10px 0px 11px 0px;
  align-items: center;
  border-radius: var(--borderRadius8);
  border: none;
  background-color: var(--accentColor);
  color: var(--IconCloseColor);
  font-size: var(--fontSize14);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    width: 302px;
  }
`;

export const ContainerIconButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 8px;
  background-color: var(--IconCloseColor);
  border-radius: var(--borderRadius8);
`;
