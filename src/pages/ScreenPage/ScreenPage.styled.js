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

//-----Sidebar
export const ContainerColumns = styled.ul`
  @media screen and (min-width: 320px) {
    display: flex;
    gap: 18px;
    overflow-x: auto;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1180px;
    padding-left: 24px;
    padding-right: 24px;
  }
  ::-webkit-scrollbar {
    width: 12px;
    display: flex;
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
    @media screen and (min-width: 1440px) {
      margin-left: 24px;
      margin-right: 24px;
    }
  }
`;
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

export const ListCard = styled.ul`
  @media screen and (min-width: 320px) {
    position: relative;
    min-width: 292px;
    height: 478px;
    overflow-y: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  @media screen and (min-width: 375px) {
    width: 346px;
  }
  @media screen and (min-width: 768px) {
    height: 640px;
  }
  @media screen and (min-width: 1440px) {
    height: 478px;
  }
  ::-webkit-scrollbar {
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
    @media screen and (min-width: 1440px) {
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

export const Btn = styled.button`
  margin-top: 14px;
  margin-bottom: 24px;
  border-radius: 8px;
  background-color: var(--iconSideBarLogOutColor);
  display: inline-flex;
  padding: 14px 89px;
  justify-content: center;
  align-items: center;
`;
