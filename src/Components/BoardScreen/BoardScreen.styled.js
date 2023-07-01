import styled from 'styled-components';

export const Board = styled.div`
  background-color: var(--headerPageColor);

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
    background-color: var(--borderBottomColor);
  }

  ::-webkit-scrollbar-track {
    @media screen and (min-width: 320px) {
      border-radius: 12px;
      background-color: var(--headerColor);
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

export const AddColumnBtn = styled.button`
  @media screen and (min-width: 320px) {
    background-color: var(--sidebarColor);
    color: var(--titleColor);
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: var(--poppinsFont);
    font-weight: var(--fontWeight500);
    font-size: var(--fontSize14);
    border-radius: var(--borderRadius8);
    cursor: pointer;
    border: none;

    min-width: 100%;
    height: 56px;
    padding: 14px 70px 14px 75px;
  }
  @media screen and (min-width: 375px) {
    min-width: 334px;

    padding: 14px 78px 14px 79px;
  }
`;
export const AddColumnIcon = styled.span`
  margin-right: 8px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  stroke: var(--IconCloseColor);
  background-color: var(--iconBoardBgColor);
  border-radius: var(--borderRadius8);
`;

export const DescEmptyBoard = styled.p`
  margin: 292px auto;

  color: var(--titleColor);
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
  color: var(--accentColor);
`;

export const Title = styled.h2`
  color: #fff;
  font-size: var(--fontSize18);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.36px;
`;

export const Filter = styled.p`
  color: var(--borderTopColor);
  font-size: var(--fontSize14);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.28px;
  display: flex;
  align-items: center;
  gap: 0.5em;
  cursor: pointer;
  :hover {
    color: var(--accentColor);
  }
`;
