import { Wrap, ContainerIcon, LogoText, IconStyled, LinkBox } from './Logo.styled';

import url from '../../../images/icons/sprite/icons.svg';

const Logo = () => {

  return (
    <Wrap>
      <LinkBox  to="/">
        <ContainerIcon>
          <IconStyled width="16" height="16">
            <use xlinkHref={`${url}#icon-Vector-1`} />
          </IconStyled>
        </ContainerIcon>
        <LogoText>Task Pro</LogoText>
      </LinkBox>
    </Wrap>
  );
};

export default Logo;
