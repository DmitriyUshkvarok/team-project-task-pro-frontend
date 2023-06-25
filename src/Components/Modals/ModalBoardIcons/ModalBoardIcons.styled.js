import styled from 'styled-components';

export const Container = styled.div`
  margin: 24px 0px;
`;

export const Text = styled.p`
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

  svg {
    cursor: pointer;
    fill: none;
    stroke: var(--iconBoardColor);
    transition-duration: 250ms;

    &:hover {
      stroke: black;
      transition-duration: 250ms;
    }
  }
`;
