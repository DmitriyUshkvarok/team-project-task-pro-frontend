import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: relative;
  background-color: var(--modalBgColor);
  border-radius: var(--borderRadius8);
  width: 375px;
  height: 100%;
  max-height: 700px;
  overflow-y: auto;
  padding: 18px;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 18px;

  @media screen and (min-width: 768px) {
    width: 724px;
  }
  @media screen and (min-width: 1280px) {
    width: 1200px;
  }
`;

export const TeamTitle = styled.h1`
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight600);
  color: var(--primaryItemsColor);
`;

export const FirstList = styled.ul`
  display: flex;
  flex-direction: column;
  column-gap: 64px;
  row-gap: 18px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SecondList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 18px;
  column-gap: 36px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ThirdList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 18px;
  column-gap: 12px;
`;

export const User = styled.li`
  width: 300px;
  height: 370px;
  border-radius: var(--borderRadius8);
  text-align: center;
  background-color: var(--screenPageBgColor);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight400);
  font-size: var(--fontSize20);
  color: var(--primaryItemsColor);
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 4px;
  padding: 6px;
  @media screen and (min-width: 768px) {
    width: 180px;
    height: 190px;
    font-size: var(--fontSize14);
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 280px;
  border-radius: var(--borderRadius8);
  @media screen and (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
  column-gap: 20px;
`;
