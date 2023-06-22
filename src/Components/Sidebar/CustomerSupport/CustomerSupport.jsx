import {
  MainContainer,
  Container,
  Desc,
  AccentSpan,
  WrapContent,
  DescContent,
  BtnNeedHelp,
} from './CustomSupport.styled';
import styled from 'styled-components';

import plant from '../../../icons/iconsPng/plant.png';
import url from '../../../icons/sprite/icons.svg';

const IconStyled = styled.svg`
  stroke: var(--iconSideBarColor);
  fill: transparent;
`;

const CustomerSupport = () => {
  return (
    <MainContainer>
      <Container>
        <img src={plant} alt="plant" />
        <Desc>
          If you need help with <AccentSpan>TaskPro</AccentSpan>, check out our
          support resources or reach out to our customer support team.
        </Desc>
        <WrapContent>
          <BtnNeedHelp type="button">
            <IconStyled width="20" height="20">
              <use xlinkHref={`${url}#icon-help-circle`} />
            </IconStyled>
            <DescContent>Need help?</DescContent>
          </BtnNeedHelp>
        </WrapContent>
      </Container>
    </MainContainer>
  );
};

export default CustomerSupport;
