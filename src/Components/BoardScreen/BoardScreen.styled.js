import styled from 'styled-components';

export const Board = styled.div`
  background-color: var(--headerPageColor);
  padding-bottom: 24px;
  height: calc(100vh - 60px);

  background-image: url(${(props) => props.boardBg?.desktop?.regular});
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 375px) {
    width: 375px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding-bottom: 32px;
    height: calc(100vh - 68px);
  }
  @media screen and (min-width: 1280px) {
    width: 100%;
    padding-bottom: 8px;
  }
`;

export const Wrap = styled.div`
  padding: 0 20px;
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

export const SidebarBoard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 24px;
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
