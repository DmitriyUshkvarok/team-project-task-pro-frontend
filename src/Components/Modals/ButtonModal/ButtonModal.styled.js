import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 49px;

  padding: 10px 0px 11px 0px;
  margin-top: 24px;

  align-items: center;
  border-radius: var(--borderRadius8);
  border: none;

  background-color: var(--btnBoardColor);
  color: var(--btnTextBoardColor);

  font-size: var(--fontSize14);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.28px;
  cursor: pointer;
`;

export const ContainerIconButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 28px;
  height: 28px;
  margin-right: 8px;
  background-color: var(--iconBoardBgColor);
  border-radius: var(--borderRadius8);
  stroke: var(--iconPlusBoardColor);
`;
