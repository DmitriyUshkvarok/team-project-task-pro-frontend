import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--modalBackdropColor);
  z-index: 1200;
`;

export const ModalStyled = styled.div`
  max-height: calc(100vh - 24px);
`;
