import styled, { css } from 'styled-components';
import { ErrorMessage, Formik, Form, Field } from 'formik';

export const AddCardModal = styled.div`
  width: 335px;
  height: 522px;
  background-color: var(--blackColor);
  border-radius: var(--borderRadius8);
  padding: 24px;

  font-family: var(--poppinsFont);

  color: var(--whiteColor);

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;

export const Title = styled.h2`
  font-size: var(--fontSize18);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.36px;

  margin-bottom: 24px;
  text-align: left;
`;

export const InputTitle = styled(Field)`
  width: 287px;
  padding: 14px 18px;

  background-color: inherit;
  border-radius: var(--borderRadius8);
  border: 1px solid var(--accentColor);
  color: var(--whiteColor);
  line-height: 18px;

  font-family: var(--poppinsFont);
  font-size: var(--fontSize14);
  letter-spacing: -0.28px;

  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    width: 302px;
  }
`;

export const InputDescription = styled(Field)`
  width: 287px;
  height: 154px;
  padding: 14px 18px 30px;

  background-color: inherit;
  border-radius: var(--borderRadius8);
  border: 1px solid var(--accentColor);
  color: var(--whiteColor);
  line-height: 18px;

  font-family: var(--poppinsFont);
  font-size: var(--fontSize14);
  letter-spacing: -0.28px;

  resize: none;

  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 302px;
  }
`;

export const StyledLabel = styled.p`
  font-size: var(--fontSize12);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.24px;
  color: var(--opacityWhite2);

  margin-bottom: 4px;
  text-align: left;
`;

export const RadioBtn = styled.div`
  text-align: left;
  margin-bottom: 14px;
`;

export const Button = styled.button`
  width: 287px;
  padding: 10px 0px;
  border-radius: var(--borderRadius8);

  background-color: var(--accentColor);

  font-size: var(--fontSize14);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.28px;

  margin-top: 40px;

  @media screen and (min-width: 768px) {
    width: 302px;
  }
`;
