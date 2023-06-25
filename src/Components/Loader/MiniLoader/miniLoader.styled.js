import styled from '@emotion/styled';
/***
 * Ball loader
 */
export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    #bedbb0 92.19%
  );
`;

export const Box = styled.div`
  position: relative;
  width: 320px;
  height: 200px;
`;
export const Ball = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  left: 15%;
  animation: ball 0.5s alternate infinite ease;
  @keyframes ball {
    0% {
      top: 72px;
      height: 5px;
      border-radius: 50px 50px 25px 25px;
      transform: scaleX(1.7);
      background-color: #ff3ea5ff;
    }

    40% {
      height: 30px;
      border-radius: 50%;
      transform: scaleX(1);
      background-color: #fdff00ff;
    }

    100% {
      top: 0%;
      background-color: #00a4ccff;
    }
  }
  &:nth-of-type(2) {
    left: 45%;
    animation-delay: 0.2s;
  }
  &:nth-of-type(3) {
    left: auto;
    right: 15%;
    animation-delay: 0.3s;
  }
`;

export const Shadow = styled.div`
  width: 30px;
  height: 4px;
  border-radius: 50%;
  position: absolute;
  background-color: #ffffff;
  top: 72px;
  left: 15%;
  z-index: -1;
  filter: blur(1px);
  animation: shadow 0.5s alternate infinite ease;
  @keyframes shadow {
    0% {
      transform: scaleX(1.5);
      background-color: #ff3ea56b;
    }

    40% {
      transform: scaleX(1);
      opacity: 0.7;
      background-color: #edff0066;
    }
    100% {
      transform: scaleX(0.2);
      opacity: 0.4;
      background-color: #00a4cc6b;
    }
  }
  &:nth-of-type(4) {
    left: 45%;
    animation-delay: 0.2s;
  }

  &:nth-of-type(5) {
    left: auto;
    right: 15%;
    animation-delay: 0.3s;
  }
`;
