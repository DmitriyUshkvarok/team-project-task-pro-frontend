import styled, { keyframes } from 'styled-components';

export const Board = styled.div`
  background-color: var(--screenPageBgColor);
  position: relative;
  height: calc(100vh - 60px);

  background-image: url(${(props) => props.boardBg?.mobile?.regular});
  background-size: cover;
  background-position: center;

  @media (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${(props) => props.boardBg?.mobile?.retina});
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    height: calc(100vh - 68px);

    background-image: url(${(props) => props.boardBg?.tablet?.regular});

    @media (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${(props) => props.boardBg?.tablet?.retina});
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${(props) => props.boardBg?.desktop?.regular});

    @media (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${(props) => props.boardBg?.desktop?.retina});
    }
  }
`;

export const ContainerBoard = styled.div`
  padding: 14px 0px 24px 0px;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 22px 0;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    padding: 10px 0px 8px 260px;
  }
`;

export const Wrap = styled.div`
  padding: 0 20px;
`;

export const SidebarBoard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 39px;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 26px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 10px;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const BoardsContainer = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;

    overflow-x: auto;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  ::-webkit-scrollbar {
    width: 12px;
    display: flex;
    bottom: 10px;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: var(--screenPageScrollColor);
  }

  ::-webkit-scrollbar-track {
    @media screen and (min-width: 320px) {
      border-radius: 12px;
      background-color: var(--screenPageBGScroll);
      margin-left: 20px;
      margin-right: 20px;
    }

    @media screen and (min-width: 768px) {
      margin-left: 32px;
      margin-right: 32px;
    }

    @media screen and (min-width: 1280px) {
      margin-left: 24px;
      margin-right: 24px;
    }
  }
`;

export const ContainerColumns = styled.ul`
  display: flex;
  gap: 34px;

  height: calc(100vh - 268px);

  @media screen and (min-width: 320px) {
    margin-bottom: 94px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 122px;
    height: calc(100vh - 297px);
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 86px;
    height: calc(100vh - 228px);
  }
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1.03);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.03);
  }
`;

export const AddColumnBtn = styled.button`
  @media screen and (min-width: 320px) {
    background-color: var(--screenPageTitleBgColor);
    color: var(--screenPageTitleColor);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: auto;
    padding-right: auto;

    font-family: var(--poppinsFont);
    font-weight: var(--fontWeight500);
    font-size: var(--fontSize14);
    border-radius: var(--borderRadius8);
    cursor: pointer;
    border: none;
    letter-spacing: -0.28px;

    min-width: 100%;
    height: 56px;


    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: all 0.3s;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  
    &:before {
      content: '';
      position: absolute;
      width: 200%;
      height: 100%;
      background: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0)
      );
      top: 0;
      left: -100%;
      transform: rotate(45deg);
      transition: all 0.3s;
      opacity: 0;
    }
  
    &:hover,
    &:focus {
      transform: translateY(-2px);
      box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
      animation: ${pulseAnimation} 1s ease-in-out infinite;
    }
  
    &:hover:before,
    &:focus:before {
      left: 100%;
      opacity: 1;
      transition: left 2s ease-in-out, opacity 0.3s ease-in-out;
    }
  
    &:active {
      transform: translateY(1px);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    }


  }

  @media screen and (min-width: 375px) {
    min-width: 334px;

    padding-left: 79px;
    padding-right: 78px;
  }
`;

export const AddColumnIcon = styled.span`
  margin-right: 8px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  stroke: var(--addColumnBtnColor);
  background-color: var(--addColumnBtnBG);
  border-radius: var(--borderRadius8);
`;

export const BoxDescEmptyBoard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (min-width: 1280px) {
    padding-left: 260px;
  }
`;

export const DescEmptyBoard = styled.p`
  @media screen and (max-width: 374px) {
    width: 90vw;
  }

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  color: var(--screenPageTextColor);
  text-align: center;
  font-size: var(--fontSize12);
  font-family: var(--poppinsFont);
  line-height: 16px;
  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    width: 486px;
  }
`;

export const AccentSpan = styled.span`
  color: var(--screenPageSpanColor);
  cursor: pointer;
  &:hover,
  &:focus {
    font-weight: bold;
    transition: 0.5s ease;
    border-top: 1px solid var(--accentColor);
    border-bottom: 1px solid var(--accentColor);
  }
`;

export const Title = styled.h2`
  color: var(--screenPageTitleColor);
  font-size: var(--fontSize18);
  font-family: var(--poppinsFont), var(--roboto);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.36px;
`;

export const Filter = styled.p`
  color: var(--iconFilterColor);
  font-size: var(--fontSize14);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.28px;
  display: flex;
  align-items: center;
  gap: 0.5em;
  cursor: pointer;

  :hover,
  :focus {
    color: var(--accentColor);
  }
`;

export const CreatedContainer = styled.div`
  @media screen and (min-width: 1280px) {
    padding-left: 260px;
  }
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 10px;
  display: flex;

  justify-content: center;
  align-items: center;
`;

export const CreatedDescription = styled.p`
  @media screen and (max-width: 640px) {
    font-size: var(--fontSize10);
  }
  color: var(--primaryItemsColor);
  font-size: var(--fontSize14);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
`;

export const ModalTeamBtn = styled.button`
  @media screen and (max-width: 640px) {
    font-size: var(--fontSize10);
  }
  color: var(--primaryItemsColor);
  font-size: var(--fontSize14);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  text-decoration: underline;
  background-color: transparent;
  border: none;
  cursor: pointer;
  :hover {
    color: var(--accentColor);
  }
`;
