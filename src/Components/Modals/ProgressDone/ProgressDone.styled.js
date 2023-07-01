import styled from 'styled-components';

export const ProgressDoneContainer = styled.ul`
  min-width: 135px;
  min-height: 86px;
  background-color: var(--modalBgColor);
  border-radius: var(--borderRadius8);
  padding: 18px;
  box-shadow: 0px 4px 16px 0px var(--modalPDBoxShadow);
`;

export const ColumnName = styled.span`
  height: 21px;
  font-size: 14px;
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.36px;
  
`;

export const ColumnMoveTo = styled.li`
  width: 99px;
  padding: 0;
  display: flex;
  align-items: start;
  justify-content: space-between;
  background-color: transparent;
  color: var(--textPDBoxColor);
  stroke: var(--textPDBoxColor);
  fill: transparent;
  border: none;
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  &:hover,
  &:focus {
    color: var(--accentColor);
    stroke: var(--accentColor);
  }
`;

export const Message = styled.div`
  color: var(--accentColor);
`;
