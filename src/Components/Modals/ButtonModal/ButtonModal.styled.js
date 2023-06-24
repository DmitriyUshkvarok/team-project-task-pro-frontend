import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;

  width: 302px;
  height: 49px;

  padding: 10px 0px 11px 0px;
  margin-top: 24px;

  align-items: center;
  border-radius: var(--borderRadius8);

  background-color: var(--accentColor);
  color: var(--headerColor);

  font-size: var(--fontSize14);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.28px;
`;

export const ContainerIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 28px;
  height: 28px;
  margin-right: 8px;
  background-color: var(--headerColor);

  border-radius: var(--borderRadius8);
`;
