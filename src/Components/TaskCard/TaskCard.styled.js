import styled from 'styled-components';

export const CardBg = styled.li`
  /* width: 334px;
  border-radius: 8px;
  overflow: hidden; */

  @media screen and (min-width: 320px) {
    border-radius: 8px;
    display: flex;
    flex-direction: row-reverse;
    background-color: var(--sidebarColor);
    width: 279px;
  }
  @media screen and (min-width: 375px) {
    width: 334px;
  }
`;

export const Card = styled.div`
  border-radius: 0 8px 8px 0;
  background-color: var(--headerColor);

  height: 154px;
  padding: 14px 24px;
  @media screen and (min-width: 375px) {
    width: 330px;
  }
`;

export const CardTitle = styled.h4`
  font-size: var(--fontSize14);
  color: var(--titleColor);
  letter-spacing: -0.28px;
  font-family: var(--poppinsFont);
  margin: 0px 0px 8px 0px;
`;

export const CardDescription = styled.div`
  border-bottom: 1px solid var(--borderBottomColor);
  width: 290px;
  height: 52px;
  margin-bottom: 14px;
  @media screen and (min-width: 320px) {
    width: 227px;
  }
`;

export const CardText = styled.p`
  font-size: var(--fontSize12);
  color: var(--borderTopColor); // ПОМЕНЯТЬ ЦВЕТ ТЕКСТА!!!!
  position: relative;
  font-family: var(--poppinsFont);
  text-overflow: ellipsis;
  overflow: hidden;
  letter-spacing: -0.24px;
  line-height: 16px;
  display: flex;
  width: 290;
  height: 38px;
  flex-direction: column;
`;

export const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardBottomGroup = styled.div`
  display: flex;
  gap: 14px;
  align-items: baseline;
`;

export const CardPriority = styled.div`
  width: 56px;
  height: 31px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardSubtitle = styled.p`
  color: var(--borderTopColor); // ПОМЕНЯТЬ ЦВЕТ ТЕКСТА!!!!
  font-size: var(--fontSize8);
  font-family: var(--poppinsFont);
  letter-spacing: -0.16px;
`;

export const Circle = styled.div`
  display: flex;
  gap: 4px;
  align-items: flex-end;
`;

export const Priority = styled.p`
  position: relative;
  color: var(--titleColor);
  font-size: var(--fontSize10);
  font-family: var(--poppinsFont);
  letter-spacing: -0.2px;
`;

export const CardDeadline = styled.div`
  width: 53px;
  height: 31px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Deadline = styled.p`
  position: relative;
  color: var(--titleColor);
  height: 12px;
  font-size: var(--fontSize10);
  font-family: var(--poppinsFont);
  letter-spacing: -0.2px;
`;

export const CardBtnGroup = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: row;
  align-items: flex-end;
`;

export const CardBtn = styled.button`
  width: 16px;
  height: 16px;
  padding: 0;
  display: flex;

  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const CardIcon = styled.svg`
  stroke: var(--borderTopColor); // ПОМЕНЯТЬ ЦВЕТ!!!
  width: 16px;
  height: 16px;
  fill: none;
`;
