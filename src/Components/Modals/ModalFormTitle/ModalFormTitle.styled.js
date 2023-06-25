import styled from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as FormikError,
  Field as FormikField,
} from 'formik';

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
  position: absolute;
  margin-top: 5px;

  color: red;

  font-size: 10px;

  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
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
