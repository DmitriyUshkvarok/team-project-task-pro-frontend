import styled from 'styled-components';
import { Form as FormikForm, Field as FormikField } from 'formik';

export const Form = styled(FormikForm)`
  margin: 24px 0px;
`;

export const Text = styled.h4`
  color: var(--whiteColor);
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

  label {
    cursor: pointer;
    fill: none;
    stroke: var(--iconBoardColor);
    transition-duration: 250ms;

    &:hover,
    &:focus {
      stroke: black;
      transition-duration: 250ms;
    }
  }
`;

export const Field = styled(FormikField)`
  opacity: 0;
  position: absolute;
`;
