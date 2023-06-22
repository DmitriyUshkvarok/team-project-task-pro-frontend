import {
  MainContainer,
  Container,
  Desc,
  AccentSpan,
  WrapContent,
  DescContent,
  BtnNeedHelp,
} from './CustomSupport.styled';

import plant from '../../../icons/iconsPng/plant.png';
import url from '../../../icons/sprite/icons.svg';

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
            <svg width="20" height="20">
              <use xlinkHref={`${url}#icon-help-circle`} />
            </svg>
            <DescContent>Need help?</DescContent>
          </BtnNeedHelp>
        </WrapContent>
      </Container>
    </MainContainer>
  );
};

export default CustomerSupport;
