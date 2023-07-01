import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 24px;
  padding-left: 14px;

  @media screen and (min-width: 1280px) {
    padding-left: 24px;
  }
`;

export const BtnLogOut = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  border: none;

  font-family: var(--poppinsFont);

  font-weight: var(--fontWeight500);
  font-size: var(--fontSize16);

  color: var(--primarySidebarColor);
  background-color: transparent;

  cursor: pointer;
  &:hover,
  &:focus {
    color: var(--logOutHoverColor);
  }
`;

export const IconLogOut = styled.svg`
  stroke: var(--iconLogOutColor);
`;
