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
  font-size: var(--fontSize14);
  line-height: 1.5em;

  color: var(--whiteColor);
  background-color: transparent;

  cursor: pointer;
`;
