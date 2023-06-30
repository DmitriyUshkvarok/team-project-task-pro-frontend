import styled from 'styled-components';

export const Board = styled.div`
  @media screen and (min-width: 320px) {
    background-color: var(--helpBlockColor);
    width: 320px;
    padding-bottom: 24px;
  }
  @media screen and (min-width: 375px) {
    width: 375px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding-bottom: 32px;
    margin: 100px;
  }
  @media screen and (min-width: 1280px) {
    width: 1180px;
    padding-bottom: 8px;
  }
`;

export const BtnAdd = styled.button`
  display: flex;
  padding: 14px 78px 14px 79px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: var(--sidebarColor);
  width: 177px;
  height: 53px;
  border: none;
  color: #fff;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
`;

// Sidebar

//--Sidebar

export const BoxColumns = styled.li``;

export const BoxColumnsTitle = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    align-items: center;
    padding: 18px 20px 17px 20px;
    border-radius: 8px;
    background-color: var(--sidebarColor);
    margin-bottom: 14px;
    width: 279px;
  }
  @media screen and (min-width: 375px) {
    width: 334px;
  }
`;
export const Subject = styled.h3`
  margin-right: auto;
  color: #fff;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
`;
export const Icon = styled.p`
  color: #ffffff80;
`;

export const ListTask = styled.ul`
  @media screen and (min-width: 320px) {
    position: relative;
    min-width: 292px;
    height: fit-content;
    max-height: calc(100vh - 340px);
    overflow-y: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 14px;
  }
  @media screen and (min-width: 375px) {
    width: 346px;
  }
  @media screen and (min-width: 768px) {
    max-height: calc(100vh - 372px);
    /* height: 640px; */
  }
  @media screen and (min-width: 1280px) {
    /* height: 478px; */
  }
  ::-webkit-scrollbar {
    background: red;
    color: red;
    width: 8px;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    width: 8px;
    background: red;
    color: red;

    border-radius: 12px;
    background-color: var(--sidebarColor);
  }

  ::-webkit-scrollbar-track {
    width: 8px;
    height: 478px;
    flex-shrink: 0;
    background: red;
    color: red;

    border-radius: 12px;

    background: var(--borderBottomColor);
    @media screen and (min-width: 768px) {
      height: 640px;
    }
    @media screen and (min-width: 1280px) {
      height: 478px;
    }
  }
`;

export const Card = styled.li`
  @media screen and (min-width: 320px) {
    border-radius: 8px;
    background-color: var(--sidebarColor);
    width: 279px;
  }
  @media screen and (min-width: 375px) {
    width: 334px;
  }
`;

export const AddCardBtn = styled.button`
  background-color: var(--accentColor);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  min-width: 279px;
  height: 56px;
  border: none;
  color: var(--addCardIconColor);
  font-family: var(-poppinsFont);
  font-weight: var(--fontWeight500);
  font-size: var(--fontSize14);
  border-radius: var(--borderRadius8);
  cursor: pointer;
  @media screen and (min-width: 375px) {
    min-width: 334px;
  }
`;
export const AddCardIcon = styled.span`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  stroke: var(--IconCloseColor);
  background-color: var(--iconBoardBgColor);
  border-radius: var(--borderRadius8);
  stroke: var(--IconCloseColor);
`;

export const IconStyled = styled.svg`
  stroke: var(--secondarySidebarColor);
`;

export const BtnIcon = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
