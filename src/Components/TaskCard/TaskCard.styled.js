import styled from 'styled-components';

export const CardBg = styled.div`
  width: 334px;
  border-radius: 8px;
  overflow: hidden;

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
  padding: 14px 18px 14px 20px;
  @media screen and (min-width: 375px) {
    width: 330px;
  }
`;

export const CardTitle = styled.h4`
  font-size: var(--fontSize14);
  color: var(--cardTitleColor);
  letter-spacing: -0.28px;
  font-family: var(--poppinsFont), var(--roboto);
  margin: 0px 0px 8px 0px;
`;

export const CardDescription = styled.div`
  border-bottom: 1px solid var(--cardBorderBottomColor);
  width: 227px;
  height: 52px;
  margin-bottom: 14px;
  @media screen and (min-width: 375px) {
    width: 290px;
  }
`;

export const CardText = styled.p`
  font-size: var(--fontSize12);
  color: var(--cardDescriptionTextColor);
  position: relative;
  font-family: var(--poppinsFont), var(--roboto);
  text-overflow: ellipsis;
  overflow: hidden;
  letter-spacing: -0.24px;
  line-height: 16px;
  width: 290;
  height: 30px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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
  height: 31px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardSubtitle = styled.p`
  height: 12px;
  color: var(--cardSubtitleColor);
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
  color: var(--cardPriorityTextColor);
  font-size: var(--fontSize10);
  font-family: var(--poppinsFont);
  font-weight: 400;
  letter-spacing: -0.2px;
`;

export const CardDeadline = styled.div`
  height: 31px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Deadline = styled.p`
  height: 15px;
  position: relative;
  color: var(--cardPriorityTextColor);
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

export const CardIcon = styled.svg`
  stroke: var(--taskIconColor);
  width: 16px;
  height: 16px;
  fill: none;
`;

export const CardBtn = styled.button`
  width: 16px;
  height: 16px;
  padding: 0;
  display: flex;

  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--accentColor);
    ${CardIcon} {
      stroke: currentColor;
    }
  }
`;


export const BellBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  margin-right: 12px;
  margin-left: auto;
`;

export const CardIconBell = styled.svg`
  stroke: var(--taskIconBellColor);
  fill: none;
  width: 16px;
  height: 16px;

  filter: drop-shadow(0 0 6px var(--taskIconBellColor));
`;
