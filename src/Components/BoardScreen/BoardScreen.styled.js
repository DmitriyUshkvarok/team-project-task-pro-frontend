import styled from 'styled-components';

export const Board = styled.div`
  background-color: var(--headerPageColor);
  padding-bottom: 24px;
  height: 100vh;
  /* height: calc(100vh - 60px); */

  @media screen and (min-width: 375px) {
    width: 375px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding-bottom: 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 100%;
    padding-bottom: 8px;
    height: calc(100vh - 68px);
  }
`;

export const Wrap = styled.div`
  padding: 0 20px;
`;

export const SidebarBoard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px 0 20px;
`;

export const BoardsContainer = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;

    overflow-x: auto;
    padding: 40px 20px 24px 20px;
  }
  @media screen and (min-width: 768px) {
    padding: 40px 32px 24px 32px;
  }
  @media screen and (min-width: 1280px) {
    width: calc(100vw - 260px);
    padding: 40px 24px 24px 24px;
  }
  ::-webkit-scrollbar {
    width: 12px;
    display: flex;
    /* margin-top: 52px; */
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 12px;
    height: 100vh;
    background-color: var(--borderBottomColor);
  }

  ::-webkit-scrollbar-track {
    @media screen and (min-width: 320px) {
      border-radius: 12px;
      /* background-color: var(--headerColor); */
      background: red;
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
  @media screen and (min-width: 320px) {
    /* position: relative;
    min-width: 292px;
    height: 478px;
    overflow-y: auto;
    position: relative; */
    display: flex;
    gap: 34px;
    /* flex-direction: column;
    gap: 8px; */
  }
  @media screen and (min-width: 375px) {
    /* width: 346px; */
  }
  @media screen and (min-width: 768px) {
    /* height: 640px; */
  }
  @media screen and (min-width: 1280px) {
    /* height: 478px; */
  }
  /* ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    width: 8px;

    border-radius: 12px;
    background-color: var(--sidebarColor);
  }

  ::-webkit-scrollbar-track {
    width: 8px;
    height: 478px;
    flex-shrink: 0;

    border-radius: 12px;

    background: var(--borderBottomColor);
    @media screen and (min-width: 768px) {
      height: 640px;
    }
    @media screen and (min-width: 1280px) {
      height: 478px;
    }
  } */
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
    margin-left: 34px;
  }
  @media screen and (min-width: 375px) {
    min-width: 334px;

    padding: 14px 78px 14px 79px;
  }
`;
export const AddIcon = styled.svg`
  margin-right: 8px;

  background-color: var(--btnIconColor);
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
`;
