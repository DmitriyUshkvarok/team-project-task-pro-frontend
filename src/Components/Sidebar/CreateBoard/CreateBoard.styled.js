import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 70px;
  padding: 0 14px;
  @media screen and (min-width: 1280px) {
    padding: 0 24px;
    margin-top: 60px;
  }
`;

export const Desc = styled.p`
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;

  letter-spacing: -0.02em;

  color: rgba(255, 255, 255, 0.5);
`;

export const WrapTitleContent = styled.div`
  display: flex;
  gap: 77px;

  padding-bottom: 17px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  margin-top: 14px;
`;

export const Title = styled.h2`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;

  color: #ffffff;
`;

export const BtnCreateBoard = styled.button`
  width: 46px;
  height: 36px;
  background: #bedbb0;
  border-radius: 6px;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;
