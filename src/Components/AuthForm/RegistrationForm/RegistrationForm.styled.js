import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormRegistration = styled(Form)`
  width: 100%;
  height: 363px;
  padding: 24px;
  justify-content: center;
  flex-direction: column;
  background-color: var(--blackColor);
  border-radius: 8px;
  margin: 188px 508px;

  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 424px;
    height: 395px;
    padding: 40px;
  }
`;

export const FeedbackFormGroup = styled.div`
  width: 100%;
  margin-bottom: 14px;
  position: relative;
`;

export const PasswordWrapper = styled.div``;

export const InputForm = styled(Field)`
  padding: 14px 18px;
  width: 100%;
  height: 49px;
  border: 1px solid #bedbb0;
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  border-radius: 8px;
  background-color: var(--blackColor);
  color: #ffffff;
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

export const ToggleShowPasword = styled.span`
  position: absolute;
  top: 16px;
  right: 18px;
  height: 18px;
`;

export const Btnwrapper = styled.div`
  margin-top: 24px;
`;

export const BtnRegister = styled.button`
  width: 100%;
  height: 49px;
  background-color: #bedbb0;
  border-radius: 8px;
  cursor: pointer;
  color: var(--blackColor);
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
  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;

export const StyleErrorMessage = styled(ErrorMessage)``;

export const Error = styled.div`
  position: absolute;
  width: 100%;
  color: red;
  font-size: 10px;
  margin-top: 1px;
`;

export const Link = styled.div`
  height: 27px;
  text-align: start;
  font-family: var(--poppinsFont);
  font-size: var(--fontSize18);
  font-weight: var(--fontWeight500);
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`;
