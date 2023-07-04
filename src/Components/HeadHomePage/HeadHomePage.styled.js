import styled from 'styled-components';

export const HeadHomeBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
  background-color: var(--headerPageColor);
`;

export const HeadTitle = styled.h4`
  font-family: var(--poppinsFont);
  font-size: var(--fontSize18);
  font-weight: var(--fontWeight500);
  color: var(--logoHeaderColor);
  &:hover,
  &:focus {
    color: var(--accentColor);
  }
`;

export const HeadBoxFilter = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const IconFilter = styled.svg`
  stroke: var(--logoHeaderColor);
  opacity: 80%;
  &:hover,
  &:focus {
    stroke: var(--accentColor);
  }
`;

export const ButtonFilter = styled.button`
  background-color: transparent;
  margin-left: 8px;
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  color: var(--logoHeaderColor);
  opacity: 80%;
  border: none;
  cursor: pointer;
  &:hover,
  &:focus {
    color: var(--accentColor);
  }
`;
