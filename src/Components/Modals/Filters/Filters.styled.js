import styled from 'styled-components';

export const FiltersContainer = styled.div`
  width: 300px;
  height: 367px;

  padding: 24px;
  background-color: var(--modalBGC);

  border-radius: 8px;
  border: var(--modalBorder);
  box-shadow: var(--boxShadow);

  position: relative;

  p {
    text-align: start;
    color: var(--whiteColor);
    font-size: var(--fontSize14);
    font-family: var(--poppinsFont);
    font-weight: var(--fontWeight500);
    letter-spacing: var(--letterSpacing28);
    margin-bottom: 14px;
    margin-top: 24px;
  }

  button {
    display: inline-block;
    color: var(--iconSideBarBoardColor);
    font-size: var(--fontSize12);
    font-family: var(--poppinsFont);
    letter-spacing: var(--letterSpacing24);
    text-decoration: underline;
    border: none;
    background-color: inherit;
    cursor: pointer;
    padding: 0;
  }
`;

export const ModalTitle = styled.h2`
  text-align: start;
  border-bottom: 1px solid var(--borderBottomColor);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  font-size: var(--fontSize18);
  letter-spacing: var(--letterSpacing36);
  padding-bottom: 14px;
  margin-bottom: 14px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  border-top: 1px solid var(--borderBottomColor);
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
      return '#1616164D';
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
    border: 2px solid var(--modalBGC);

    opacity: 0;
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;

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
