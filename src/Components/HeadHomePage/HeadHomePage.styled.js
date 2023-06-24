import styled from 'styled-components';

export const HeadHomeBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
`;
export const HeadTitle = styled.h4`
  font-family: var(--poppinsFont);
  font-size: var(--fontSize18);
  font-weight: var(--fontWeight500);
  :hover {
    color: var(--accentColor);
  }
`;
export const HeadBoxFilter = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const IconFilter = styled.svg`
  stroke: var(--whiteColor);
  opacity: 80%;
  :hover {
    stroke: var(--accentColor);
  }
`;
export const ButtonFilter = styled.button`
  background-color: transparent;
  margin-left: 8px;
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  color: var(--whiteColor);
  opacity: 80%;
  border: none;
  cursor: pointer;
  :hover {
    color: var(--accentColor);
  }
`;
