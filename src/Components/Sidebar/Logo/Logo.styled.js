import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  padding-left: 14px;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 1280px) {
    padding-left: 24px;
  }
`;

export const ContainerIcon = styled.span`
  display: flex;
  width: 32px;
  height: 32px;
  background-color: var(--logoFonColor);
  justify-content: center;
  align-items: center;
  border-radius: var(--borderRadius8);
`;

export const IconStyled = styled.svg`
  fill: var(--logoIconColor);
`;

export const LogoText = styled.a`
  font-family: var(--poppinsFont);

  font-weight: var(--fontWeight600);
  font-size: var(--fontSize16);
  line-height: 1.5em;

  letter-spacing: -0.04em;

  color: var(--whiteColor);
`;
