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
  width: 10em;
  height: 5em;
  font-size: 25px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    font-size: 45px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 65px;
  }
`;

export const Wave = styled.div`
  border-width: 0.1em;
  border-style: solid;

  position: absolute;
  animation: wave 1500ms infinite alternate;
  transform: rotate(-35deg);

  &:nth-child(1) {
    width: 9.5125em;
    height: 9.5125em;
    bottom: -4.75625em;
    left: 0.24375em;
    animation-delay: 75ms;
    border-color: transparent transparent #5255bc #6e71d5;

    border-radius: 9.5125em;
  }

  &:nth-child(2) {
    width: 9.025em;
    height: 9.025em;
    bottom: -4.5125em;
    left: 0.4875em;
    animation-delay: 150ms;
    border-color: transparent transparent #5255bc #6e71d5;
    border-radius: 9.025em;
  }

  &:nth-child(3) {
    width: 8.5375em;
    height: 8.5375em;
    bottom: -4.26875em;
    left: 0.73125em;
    animation-delay: 225ms;
    border-color: transparent transparent #6e71d5 #8083e7;
    border-radius: 8.5375em;
  }

  &:nth-child(4) {
    width: 8.05em;
    height: 8.05em;
    bottom: -4.025em;
    left: 0.975em;
    animation-delay: 300ms;
    border-color: transparent transparent #6e71d5 #8083e7;
    border-radius: 8.05em;
  }
  &:nth-child(5) {
    width: 7.5625em;
    height: 7.5625em;
    bottom: -3.78125em;
    left: 1.21875em;
    animation-delay: 375ms;
    border-color: transparent transparent #8083e7 #9699f4;
    border-radius: 7.5625em;
  }

  &:nth-child(6) {
    width: 7.075em;
    height: 7.075em;
    bottom: -3.5375em;
    left: 1.4625em;
    animation-delay: 450ms;
    border-color: transparent transparent #8083e7 #9699f4;
    border-radius: 7.075em;
  }
  &:nth-child(7) {
    width: 6.5875em;
    height: 6.5875em;
    bottom: -3.29375em;
    left: 1.70625em;
    animation-delay: 525ms;
    border-color: transparent transparent #8083e7 #9699f4;
    border-radius: 6.5875em;
  }
  &:nth-child(8) {
    width: 6.1em;
    height: 6.1em;
    bottom: -3.05em;
    left: 1.95em;
    animation-delay: 600ms;
    border-color: transparent transparent #9699f4 #bdbffb;
    border-radius: 6.1em;
  }
  &:nth-child(9) {
    width: 5.6125em;
    height: 5.6125em;
    bottom: -2.80625em;
    left: 2.19325em;
    animation-delay: 675ms;
    border-color: transparent transparent #9699f4 #bdbffb;
    border-radius: 5.6125em;
  }
  &:nth-child(10) {
    width: 5.125em;
    height: 5.125em;
    bottom: -2.5625em;
    left: 2.4375em;
    animation-delay: 750ms;
    border-color: transparent transparent #bdbffb #d5d6fa;
    border-radius: 5.125em;
  }

  &:nth-child(11) {
    width: 4.6375em;
    height: 4.6375em;
    bottom: -2.31875em;
    left: 2.68125em;
    animation-delay: 825ms;
    border-color: transparent transparent #bdbffb #d5d6fa;
    border-radius: 4.6375em;
  }
  &:nth-child(12) {
    width: 4.15em;
    height: 4.15em;
    bottom: -2.075em;
    left: 2.925em;
    animation-delay: 900ms;
    border-color: transparent transparent #d5d6fa #eaebfe;
    border-radius: 4.15em;
  }
  &:nth-child(13) {
    width: 3.6625em;
    height: 3.6625em;
    bottom: -1.83125em;
    left: 3.16875em;
    animation-delay: 975ms;
    border-color: transparent transparent #d5d6fa #eaebfe;
    border-radius: 3.6625em;
  }
  &:nth-child(14) {
    width: 3.175em;
    height: 3.175em;
    bottom: -1.5875em;
    left: 3.4125em;
    animation-delay: 1050ms;
    border-color: transparent transparent #eaebfe #f5f5fe;
    border-radius: 3.175em;
  }
  &:nth-child(15) {
    width: 2.6875em;
    height: 2.6875em;
    bottom: -1.34375em;
    left: 3.65625em;
    animation-delay: 1125ms;
    border-color: transparent transparent #eaebfe #f5f5fe;
    border-radius: 2.6875em;
  }
  &:nth-child(16) {
    width: 2.2em;
    height: 2.2em;
    bottom: -1.1em;
    left: 3.9em;
    animation-delay: 1200ms;
    border-color: transparent transparent #eaebfe #f5f5fe;
    border-radius: 2.2em;
  }
  &:nth-child(17) {
    width: 1.7125em;
    height: 1.7125em;
    bottom: -0.85625em;
    left: 4.14375em;
    animation-delay: 1275ms;
    border-color: transparent transparent #eeeeee #f0f0f0;
    border-radius: 1.7125em;
  }
  &:nth-child(18) {
    width: 1.225em;
    height: 1.225em;
    bottom: -0.6125em;
    left: 4.3875em;
    animation-delay: 1350ms;
    border-color: transparent transparent #f9f9fd #f0f0f0;
    border-radius: 1.225em;
  }
  &:nth-child(19) {
    width: 0.7375em;
    height: 0.7375em;
    bottom: -0.36875em;
    left: 4.63125em;
    animation-delay: 1425ms;
    border-color: transparent transparent #eeeeee #f0f0f0;
    border-radius: 0.7375em;
  }
  &:nth-child(20) {
    width: 0.25em;
    height: 0.25em;
    bottom: -0.125em;
    left: 4.875em;
    animation-delay: 1500ms;
    border-color: transparent transparent #eeeeee #f0f0f0;
    border-radius: 0.25em;
  }

  @keyframes wave {
    to {
      transform: rotate(130deg);
    }
  }
`;
