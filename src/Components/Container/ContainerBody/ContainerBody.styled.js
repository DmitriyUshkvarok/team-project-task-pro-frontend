import styled from 'styled-components';

export const StyleContainer = styled.div`
  margin: 0 auto;
  padding: 14px 20px 24px 20px;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 22px 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 1180px;
    padding: 10px 24px 8px 24px;
  }
`;
