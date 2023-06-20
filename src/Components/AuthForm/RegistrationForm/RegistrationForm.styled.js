import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormRegistration = styled(Form)``;

export const FeedbackFormGroup = styled.div``;

export const PasswordWrapper = styled.div`
  position: relative;
`;

export const InputForm = styled(Field)`
  &::placeholder {
    /* opacity: 0.4;
    font-size: 15px; */
  }
`;

export const ToggleShowPasword = styled.span``;

export const Btnwrapper = styled.div``;

export const BtnRegister = styled.button`
  &:hover {
    /* background-image: var(--background-header);
    color: var(--color); */
  }
`;

export const StyleErrorMessage = styled(ErrorMessage)``;

export const Error = styled.div`
  /* color: red;
  font-size: 15px;
  margin-top: 10px; */
`;
