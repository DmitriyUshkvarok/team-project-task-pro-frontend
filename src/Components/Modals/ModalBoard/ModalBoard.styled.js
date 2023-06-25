import styled from 'styled-components';

export const ModalCard = styled.div`
  width: 350px;
  height: 433px;

  background-color: var(--modalBGC);
  box-shadow: var(--boxShadow);
  border-radius: 8px;

  position: relative;
  padding: 24px;
`;

export const Title = styled.h2`
  color: var(--titleColor);
  font-size: var(--fontSize18);
  font-family: var(--poppinsFont);
  font-weight: (--fontWeight500);
  letter-spacing: var(--letterSpacing36);

  text-align: start;

  margin-bottom: 24px;
`;
