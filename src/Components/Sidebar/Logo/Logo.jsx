import { Wrap, ContainerIcon, LogoText, IconStyled } from './Logo.styled';

import url from '../../../images/icons/sprite/icons.svg';

const Logo = () => {
  return (
    <Wrap>
      <ContainerIcon>
        <IconStyled width="16" height="16">
          <use xlinkHref={`${url}#icon-Vector-1`} />
        </IconStyled>
      </ContainerIcon>

      <LogoText href="#">Task Pro</LogoText>
    </Wrap>
  );
};

export default Logo;
