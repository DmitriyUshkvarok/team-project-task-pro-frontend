import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const FormikStyle = styled(Formik)``;

export const FormLogin = styled(Form)``;

export const FeedbackFormGroup = styled.div``;

export const PasswordWrapper = styled.div`
  position: relative;
`;

export const ToggleShowPasword = styled.span`
  /* position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(-50%, -10px);
  -webkit-transform: translate(-50%, -10px);
  -moz-transform: translate(-50%, -10px);
  -ms-transform: translate(-50%, -10px);
  -o-transform: translate(-50%, -10px); */
`;

export const InputEmail = styled(Field)`
  &::placeholder {
    /* opacity: 0.4;
    font-size: 15px; */
  }
`;

export const InputPassword = styled(Field)`
  &::placeholder {
    /* opacity: 0.4;
    font-size: 15px; */
  }
`;

export const StyleErrorMessage = styled(ErrorMessage)``;

export const Error = styled.div`
  /* color: red;
  font-size: 15px;
  margin-top: 10px; */
`;

export const Btnwrapper = styled.div``;

export const BtnLogIn = styled.button`
  &:hover {
    /* background-image: var(--background-header); */
    /* color: var(--color); */
  }
`;
