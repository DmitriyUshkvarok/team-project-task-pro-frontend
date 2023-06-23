import styled from 'styled-components';

export const BackdropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  z-index: 999;
  opacity: 1;
  overflow: auto;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (max-width: 768px) {
    overflow-y: scroll;
  }

  &.is-hidden {
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
  }
`;
