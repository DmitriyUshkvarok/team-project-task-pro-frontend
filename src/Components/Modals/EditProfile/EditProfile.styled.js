import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormUpdateUser = styled(Form)``;

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
  border: 1px solid var(--accentColor);
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  border-radius: 8px;
  background-color: var(--headerColor);
  color: var(--logoHeaderColor);
  font-family: var(--poppinsFont);
  font-size: var(--fontSize14);
  letter-spacing: -0.28px;

  outline: none;

  @media screen and (min-width: 375px) {
    width: 287px;
  }

  @media screen and (min-width: 768px) {
    width: 352px;
  }

  &::placeholder {
    font-size: var(--fontSize14);
  }
`;

export const ToggleShowPassword = styled.span`
  position: absolute;
  top: 16px;
  right: 18px;
  height: 18px;
`;

export const BtnWrapper = styled.div`
  margin-top: 24px;
`;

export const BtnUpdate = styled.button`
  width: 100%;
  height: 49px;
  background-color: var(--accentColor);
  border-radius: 8px;
  cursor: pointer;
  color: var(--whiteColor);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  border: none;
  transition: var(--transition);

  @media screen and (min-width: 375px) {
    width: 287px;
  }

  @media screen and (min-width: 768px) {
    width: 352px;
  }

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;

export const StyleErrorMessage = styled(ErrorMessage)``;

export const Error = styled.p`
  position: absolute;
  width: 100%;
  color: var(--errorColor);
  font-size: 10px;
  margin-top: 1px;
`;

export const Edit = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  width: 100%;
  height: 440px;
  padding: 24px;
  background-color: var(--headerColor);
  border-radius: 8px;
  z-index: 1200;

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 440px;
    padding: 24px;
  }
`;
export const EditTitle = styled.h3`
  color: var(--logoHeaderColor);

  text-align: start;

  width: 100%;
  height: 26px;

  font-family: var(--poppinsFont);
  font-size: var(--fontSize18);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.36px;

  margin-bottom: 24px;
`;
export const BtnClose = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

//===for avatar===/
export const ProfilePhotoBlock = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
export const PhotoUser = styled.img`
  width: 68px;
  height: 68px;
  border-radius: var(--borderRadius8);
  display: block;
  object-fit: cover;
`;

export const PhotoBox = styled.div`
  position: relative;
  margin-bottom: 25px;
`;

export const SpanErrorImg = styled.span`
  position: absolute;
  top: 12%;
  font-size: 10px;
  color: var(--errorColor);
  width: 100%;
`;

export const LabelEditPhoto = styled.label`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  background-color: var(--accentColor);
  justify-content: center;
  align-items: center;
  border-radius: var(--borderRadius8);
  cursor: pointer;
`;

export const InputEditPhoto = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const BtnSaveFotoUser = styled.button`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  background-color: var(--accentColor);
  justify-content: center;
  align-items: center;
  border-radius: var(--borderRadius8);
  border: none;
  padding: 0px;
  cursor: pointer;
`;
