import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 350px;
  height: 221px;

  border-radius: var(--borderRadius8);
  border: 1px solid rgba(190, 219, 176, 0.5);

  background-color: var(--headerColor);

  padding: 24px;
`;

export const FormTitle = styled.h2`
  color: var(--whiteColor);

  font-size: var(--fontSize18);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.36px;

  margin-bottom: 24px;
`;
