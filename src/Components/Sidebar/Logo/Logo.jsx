import { Wrap, ContainerIcon, LogoText } from './Logo.styled';

import url from '../../../icons/sprite/icons.svg';

const Logo = () => {
  return (
    <Wrap>
      <ContainerIcon>
        <svg width="16" height="16">
          <use xlinkHref={`${url}#icon-Vector-1`} />
        </svg>
      </ContainerIcon>

      <LogoText href="#">Task Pro</LogoText>
    </Wrap>
  );
};

export default Logo;
