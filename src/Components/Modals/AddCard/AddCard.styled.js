import styled from 'styled-components';
import { ErrorMessage, Field } from 'formik';

import { FaChevronDown } from 'react-icons/fa';

export const AddCardModal = styled.div`
  width: 335px;
  background-color: var(--blackColor);

  border-radius: var(--borderRadius8);
  padding: 24px;
  font-family: var(--poppinsFont);
  color: var(--whiteColor);
  margin-top: 20px;

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
  height: 49px;
  padding: 14px 18px;
  background-color: inherit;
  border-radius: var(--borderRadius8);
  border: 1px solid var(--accentColor);
  color: var(--whiteColor);
  line-height: 18px;
  font-family: var(--poppinsFont);
  font-size: var(--fontSize14);
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    width: 302px;
  }
`;

export const InputDescription = styled(Field)`
  width: 287px;
  height: 154px;
  padding: 14px 18px;
  background-color: inherit;
  border-radius: var(--borderRadius8);
  border: 1px solid var(--accentColor);
  color: var(--whiteColor);
  line-height: 18px;
  font-family: var(--poppinsFont);
  font-size: var(--fontSize14);
  letter-spacing: -0.28px;
  resize: none;
  margin-top: 14px;

  @media screen and (min-width: 768px) {
    width: 302px;
  }
`;

export const StyledPriority = styled.p`
  font-size: var(--fontSize12);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.24px;
  color: var(--opacityWhite2);
  margin-top: 24px;
  margin-bottom: 4px;
  text-align: left;
`;

export const StyledLabelDeadline = styled.p`
  font-size: var(--fontSize12);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.24px;
  color: var(--opacityWhite2);
  margin-top: 14px;
  margin-bottom: 4px;
  text-align: left;
`;

export const Button = styled.button`
  width: 287px;
  height: 49px;
  padding: 10px 0px;
  border-radius: var(--borderRadius8);
  background-color: var(--accentColor);
  border: 0px;
  font-size: var(--fontSize14);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.28px;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    width: 302px;
  }
`;

export const StyleErrorMessage = styled(ErrorMessage)`
  color: red;
  margin-top: 5px;
  font-size: var(--fontSize10);
`;

export const Span = styled.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;

  background-color: ${(props) => {
    if (props.value === 'low') {
      return '#8FA1D0';
    } else if (props.value === 'medium') {
      return '#E09CB5';
    } else if (props.value === 'high') {
      return '#BEDBB0';
    } else {
      return 'rgba(255,255,255,0.3)';
    }
  }};

  position: relative;

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 11px;
    height: 11px;
    border-radius: 50%;
    border: 2px solid var(--modalBGC);
    opacity: 0;
  }

  &:not(:last-child) {
    margin-right: 0px;
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 8px;

  label {
    color: var(--iconSideBarBoardColor);
    font-size: var(--fontSize12);
    font-family: Poppins;
    letter-spacing: var(--letterSpacing24);

    cursor: pointer;
  }

  input {
    opacity: 0;
    position: absolute;
  }

  input:checked {
    & + ${Span}::before {
      opacity: 1;
    }
  }
`;

export const CalendarContainer = styled.div`
  text-align: left;
`;
export const LabelDiv = styled.div`
  text-align: left;
`;

export const ButtonDate = styled.button`
  color: var(--accentColor);
  font-size: var(--fontSize14);
  font-family: var(--poppinsFont);
  letter-spacing: var(--letterSpacing28);
  font-weight: var(--fontWeight500);
  background: inherit;
  border: none;
  padding: 0px;
  float: left;
  position: absolute;
`;

export const ChevronDown = styled(FaChevronDown)`
  margin-top: 1px;
`;
export const BtnName = styled.span`
  display: flex;
  align-items: stretch;
  gap: 6px;
`;
