import styled from 'styled-components';

export const Box = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BoxWave = styled.div`
  position: relative;
  width: 5em;
  height: 5em;
  font-size: 34px;
  overflow: hidden;
`;
export const Wave = styled.div`
  border-radius: 50%;
  border: 10px dotted var(--accentWave1);
  width: 150px;
  height: 150px;
  animation-name: rotate;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes rotate {
    from {
      transform: rotate(-360deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
