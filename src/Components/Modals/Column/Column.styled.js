import styled from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as FormikError,
  Field as FormikField,
} from 'formik';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 350px;
  height: 221px;

  border-radius: var(--borderRadius8);
  border: 1px solid rgba(190, 219, 176, 0.5);

  background-color: var(--blackColor);

  padding: 24px;
`;

export const FormTitle = styled.p`
  color: var(--whiteColor);

  font-size: var(--fontSize18);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.36px;

  margin-bottom: 24px;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
`;

export const FormFieldTitle = styled.label`
  color: var(--whiteColor);
  font-size: var(--fontSize14);
  font-family: var(--poppinsFont);
  letter-spacing: -0.28px;
`;

export const ErrorMessage = styled(FormikError)`
  color: red;
`;

export const FieldTitle = styled(FormikField)`
  width: 302px;
  height: 49px;
  padding: 14px 18px 14px 18px;

  align-items: center;

  border-radius: var(--borderRadius8);
  border: 1px solid var(--accentColor);

  opacity: 0.4000000059604645;

  background-color: var(--helpColor);
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

  width: 302px;
  height: 49px;

  padding: 10px 0px 11px 0px;
  margin-top: 24px;

  align-items: center;
  border-radius: var(--borderRadius8);

  background-color: var(--accentColor);
  color: var(--headerColor);

  font-size: var(--fontSize14);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.28px;
`;

export const ContainerIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 28px;
  height: 28px;
  margin-right: 8px;
  background-color: var(--headerColor);

  border-radius: var(--borderRadius8);
`;
