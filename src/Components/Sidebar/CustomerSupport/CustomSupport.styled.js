import styled from 'styled-components';

export const MainContainer = styled.div`
  @media screen and (min-width: 320px) {
    padding: 0 10px;
    margin-top: auto;
  }

  @media screen and (min-width: 375px) {
    padding: 0 14px;
  }

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    padding: 0 24px;
  }
`;

export const Container = styled.div`
  padding: 14px;
  background-color: var(--customerSupportBgColor);
  border-radius: var(--borderRadius8);
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`;

export const Desc = styled.p`
  margin-top: 14px;
  font-family: var(--poppinsFont);

  font-size: var(--fontSize14);
  line-height: 1.33em;

  letter-spacing: -0.02em;

  color: var(--primarySidebarColor);

  @media screen and (max-width: 767px) {
    font-size: var(--fontSize14);
    line-height: 1.43em;
  }
`;

export const AccentSpan = styled.span`
  color: var(--accentColor);
`;

export const WrapContent = styled.div`
  display: flex;
  margin-top: 19px;
`;

export const IconStyled = styled.svg`
  stroke: var(--primarySidebarColor);
`;

export const BtnNeedHelp = styled.button`
  display: flex;
  gap: 8px;
  padding: 0;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  font-size: var(--fontSize12);
  line-height: 1.5em;
  letter-spacing: -0.24px;
  color: var(--primarySidebarColor);
  &:hover,
  &:focus {
    color: var(--accentColor);
    ${IconStyled} {
      stroke: currentColor;
    }
  }
`;
