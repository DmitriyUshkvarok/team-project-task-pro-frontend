import styled from 'styled-components';
import { ErrorMessage, Field } from 'formik';

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  background-color: transparent;
  border: none;
  fill: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
`;

export const NeedHelpContainer = styled.div`
  position: relative;
  width: 335px;
  height: 355px;
  background-color: var(--blackColor);
  border-radius: var(--borderRadius8);
  padding: 24px;
  font-family: var(--poppinsFont);
  color: var(--whiteColor);
  margin: 0 auto;
  margin-top: 50px;

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const Title = styled.h2`
  font-size: var(--fontSize18);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.36px;
  margin-bottom: 24px;
  color: #fff;
  text-align: left;
`;

export const InputEmail = styled(Field)`
  width: 287px;
  height: 49px;
  padding: 14px 18px;
  background-color: inherit;
  border-radius: var(--borderRadius8);
  border: 1px solid #bedbb0;
  color: #fff;
  line-height: 18px;
  font-family: var(--poppinsFont);
  font-size: var(--fontSize14);
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    width: 352px;
  }
`;

export const InputComment = styled(Field)`
  width: 287px;
  height: 120px;
  padding: 14px 18px;
  background-color: inherit;
  border-radius: var(--borderRadius8);
  border: 1px solid #bedbb0;
  color: #fff;
  line-height: 18px;

  font-family: var(--poppinsFont);
  font-size: var(--fontSize14);
  letter-spacing: -0.28px;

  resize: none;

  margin-top: 14px;

  @media screen and (min-width: 768px) {
    width: 352px;
  }
`;

export const Button = styled.button`
  width: 287px;
  height: 49px;
  border-radius: var(--borderRadius8);
  background-color: #bedbb0;
  border: 0px;
  font-size: var(--fontSize14);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.28px;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    width: 352px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const StyleErrorMessage = styled(ErrorMessage)``;

export const Error = styled.p`
  position: absolute;
  width: 100%;
  color: red;
  font-size: 10px;
  bottom: -11px;
`;
