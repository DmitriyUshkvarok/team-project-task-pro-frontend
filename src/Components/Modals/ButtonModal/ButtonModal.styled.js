import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;

  width: 287px;
  height: 49px;

  padding: 10px 0px 11px 0px;
  margin-top: 24px;

  align-items: center;
  border-radius: var(--borderRadius8);
  border: none;

  background-color: var(--accentColor);
  color: var(--IconCloseColor);

  font-size: var(--fontSize14);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    width: 302px;
  }
`;

export const ContainerIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 28px;
  height: 28px;
  margin-right: 8px;
  background-color: var(--IconCloseColor);

  border-radius: var(--borderRadius8);
`;
