import styled from 'styled-components';
import { ErrorMessage, Field } from 'formik';
import { FaChevronDown } from 'react-icons/fa';

export const EditCardModal = styled.div`
  @media screen and (max-width: 374px) {
    width: 90vw;
  }
  width: 335px;
  background-color: var(--modalBgColor);
  border-radius: var(--borderRadius8);
  border: 1px solid var(--borderBoardColor);
  padding: 24px;
  font-family: var(--poppinsFont);
  color: var(--titleBoardColor);
  margin-top: 20px;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;

export const Title = styled.h2`
  font-size: var(--fontSize18);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.36px;
  margin-bottom: 24px;
  text-align: left;
`;

export const InputTitle = styled(Field)`
  width: 100%;
  height: 49px;
  padding: 14px 18px;
  background-color: var(--bgInputBoardColor);
  border-radius: var(--borderRadius8);
  border: 1px solid var(--borderInputBoardColor);
  color: var(--textInputBoardColor);
  line-height: 18px;
  font-family: var(--poppinsFont), var(--roboto);
  font-size: var(--fontSize14);
  letter-spacing: -0.28px;

  &:hover,
  &:focus,
  &:active {
    outline: 1px solid var(--borderNeedHelpColor);
  }
`;

export const InputDescription = styled(Field)`
  width: 100%;
  height: 154px;
  padding: 14px 18px;
  background-color: var(--bgInputBoardColor);
  border-radius: var(--borderRadius8);
  border: 1px solid var(--borderInputBoardColor);
  color: var(--textInputBoardColor);
  line-height: 18px;
  font-family: var(--poppinsFont), var(--roboto);
  font-size: var(--fontSize14);
  letter-spacing: -0.28px;
  resize: none;
  margin-top: 14px;

  &:hover,
  &:focus,
  &:active {
    outline: 1px solid var(--borderNeedHelpColor);
  }
`;

export const StyledPriority = styled.p`
  font-size: var(--fontSize12);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.24px;
  color: var(--labelColor);
  margin-top: 24px;
  margin-bottom: 4px;
  text-align: left;
`;

export const StyledLabelDeadline = styled.p`
  font-size: var(--fontSize12);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.24px;
  color: var(--labelColor);
  margin-top: 14px;
  margin-bottom: 4px;
  text-align: left;
`;

export const Button = styled.button`
  width: 100%;
  height: 49px;
  padding: 10px 0px;
  border-radius: var(--borderRadius8);
  background-color: var(--btnBoardColor);
  border: 0px;
  font-size: var(--fontSize14);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.28px;
  margin-top: 40px;
`;

export const StyleErrorMessage = styled(ErrorMessage)`
  color: var(--errorColor);
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
      return 'var(--labelLowColor)';
    } else if (props.value === 'medium') {
      return 'var(--labelMediumColor)';
    } else if (props.value === 'high') {
      return 'var(--labelHighColor)';
    } else {
      return 'var(--labelWithoutColor)';
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
    border: 2px solid var(--modalBgColor);
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
    color: var(--iconBoardBgColor);
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
  color: var(--boardDateColor);
  font-size: var(--fontSize14);
  font-family: var(--poppinsFont);
  letter-spacing: var(--letterSpacing28);
  font-weight: var(--fontWeight500);
  background-color: transparent;
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
