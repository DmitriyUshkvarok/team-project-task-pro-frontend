import styled from 'styled-components';

export const MainContainer = styled.div`
  padding: 0 14px;
  margin-top: 116px;
  @media screen and (min-width: 768px) {
    margin-top: 290px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 40px;
    padding: 0 24px;
  }
`;

export const Container = styled.div`
  padding: 14px;
  background: #1f1f1f;
  border-radius: 8px;
  @media screen and (min-width: 1280px) {
    padding: 20px;
  }
`;

export const Desc = styled.p`
  margin-top: 14px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  letter-spacing: -0.02em;

  color: #ffffff;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const AccentSpan = styled.span`
  color: #bedbb0;
`;

export const WrapContent = styled.div`
  display: flex;
  margin-top: 19px;
`;

export const BtnNeedHelp = styled.button`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: white;
`;

export const DescContent = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;

  letter-spacing: -0.02em;

  color: #ffffff;
`;
