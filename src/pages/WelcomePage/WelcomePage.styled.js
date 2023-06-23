import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyleSectionWelcomePage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 473px;
  height: 100vh;
  flex-shrink: 0;
  margin: 0 auto;

  > nav {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 767px) {
    width: 335px;
  }

  @media screen and (max-width: 374px) {
    max-width: 100%;
  }
`;

export const LogoBlock = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const Logo = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;

  color: var(--logoColor:);
  font-size: var(--fontSize40);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight600);
  letter-spacing: -1.6px;

  @media screen and (max-width: 767px) {
    font-size: var(--fontSize28);
    letter-spacing: -1.12px;
  }
`;

export const ImgLogo = styled.img`
  width: 162px;
  height: 162px;

  @media screen and (max-width: 767px) {
    width: 124px;
    height: 124px;
  }

  @media screen and (max-width: 374px) {
    max-width: 100%;
    max-height: 100%;
  }

`;

export const ImgIcon = styled.svg`
  width: 48px;
  height: 48px;

  @media screen and (max-width: 767px) {
    width: 40px;
    height: 40px;
  }

  @media screen and (max-width: 374px) {
    max-width: 100%;
  }
`;

export const Content = styled.p`
  display: flex;
  width: 473px;
  flex-direction: column;
  flex-shrink: 0;
  margin-bottom: 48px;

  color: var(--contentColor);
  text-align: center;
  font-size: var(--fontSize14);
  font-family: var(--poppinsFont);
  line-height: 18px;
  letter-spacing: -0.28px;

  @media screen and (max-width: 767px) {
    width: 335px;
  }
  @media screen and (max-width: 374px) {
    max-width: 100%;
  }
`;
export const Link = styled(NavLink)`
  display: flex;

  width: 344px;
  padding: 14px 0px;
  justify-content: center;
  align-items: center;

  color: var(--linkColor);
  font-size: var(--fontSize14);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.28px;
  border-radius: 8px;
  transition-property: background, color;
  transition-duration: var(--transition);

  &:hover {
    background: var(--backgroundLinkColor);

    color: var(--linkHoverColor);
    text-align: center;
  }

  @media screen and (max-width: 767px) {
    width: 335px;
  }

  @media screen and (max-width: 374px) {
    max-width: 100%;
  }
`;
