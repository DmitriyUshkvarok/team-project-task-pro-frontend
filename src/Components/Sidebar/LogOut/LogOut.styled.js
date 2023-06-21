import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 24px;
  padding-left: 14px;

  @media screen and (min-width: 1280px) {
    padding-left: 24px;
  }
`;

export const BtnLogOut = styled.button`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;

  color: #ffffff;
  background-color: transparent;

  cursor: pointer;
`;
