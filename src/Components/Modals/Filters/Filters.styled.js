import styled from 'styled-components';
import { Field } from 'formik';

export const FiltersContainer = styled.div`
  @media screen and (min-width: 320px) {
    width: 80vw;
  }
  @media screen and (min-width: 375px) {
    width: 300px;
  }
  height: 367px;
  padding: 24px;
  margin-bottom: 50px;
  background-color: var(--modalBgColor);
  border-radius: 8px;
  border: 1px solid var(--borderBoardColor);
  box-shadow: 0px 4px 16px 0px var(--modalBoxShadow);
  position: relative;
`;

export const ModalTitle = styled.h2`
  text-align: start;
  color: var(--titleBoardColor);
  border-bottom: 1px solid var(--modalFilterBorderColor);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  font-size: var(--fontSize18);
  letter-spacing: var(--letterSpacing36);
  padding-bottom: 14px;
  margin-bottom: 14px;
`;

export const Text = styled.h3`
  color: var(--titleBoardColor);
  font-size: var(--fontSize14);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  letter-spacing: var(--letterSpacing28);
  text-align: start;
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  padding-bottom: 14px;
  margin-top: 14px;
  margin-bottom: 24px;

  border-bottom: 1px solid var(--modalFilterBorderColor);

  label {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;

    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition-property: outline-color;
    transition-duration: var(--transition);
    outline: 2.5px solid rgba(0, 0, 0, 0);

    &:hover,
    &:focus,
    &:active {
      outline-color: var(--accentColor);
    }
  }
  label:first-of-type {
    background-color: var(--iconImageBGColor);
  }
`;

export const FormikFieldImage = styled(Field)`
  opacity: 0;
  position: absolute;
  /* display: none; */
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const ShowAll = styled.label`
  color: var(--labelColor);
  font-size: var(--fontSize12);
  font-family: var(--poppinsFont);
  letter-spacing: var(--letterSpacing24);
  text-decoration: underline;
  background-color: var(--modalBgColor);
  cursor: pointer;
  display: flex;
  align-items: center;

  
  &:hover,
  &:focus {
    color: var(--titleBoardColor);
  }
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
    } else if (props.value === 'priority') {
      return 'var(--labelWithoutColor)';
    } else {
      return 'var(--transparentColor)';
    }
  }};

  margin-right: 8px;
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
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;

  label {
    display: flex;
    color: var(--labelColor);
    font-size: var(--fontSize12);
    font-family: Poppins;
    letter-spacing: var(--letterSpacing24);

    cursor: pointer;
    transition-property: color;
    transition-duration: var(--transition);

    &:hover,
    &:focus {
      color: var(--titleBoardColor);
    }
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
export const ImgStyled = styled.img`
  object-fit: cover;
  border-radius: 8px;
`;
