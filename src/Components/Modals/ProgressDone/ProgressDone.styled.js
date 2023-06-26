import styled from 'styled-components';

export const ProgressDoneContainer = styled.div`
  width: 135px;
  min-height: 86px;
  background-color: var(--whiteColor);
  border-radius: var(--borderRadius8);
  padding: 18px;
`;

export const ColumnStatus = styled.span`
  height: 21px;
  font-size: 14px;
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.36px;
`;

export const Button = styled.button`
  width: 99px;
  padding: 0;
  display: flex;
  align-items: start;
  justify-content: space-between;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.5);
  stroke: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  &:hover {
    color: #bedbb0;
    stroke: #bedbb0;
    // color: var(--accentColor);
  }
`;
