import {
  MainContainer,
  Container,
  Desc,
  AccentSpan,
  WrapContent,
  DescContent,
  BtnNeedHelp,
} from './CustomSupport.styled';

const CustomerSupport = () => {
  return (
    <MainContainer>
      <Container>
        <span>Img</span>
        <Desc>
          If you need help with <AccentSpan>TaskPro</AccentSpan>, check out our
          support resources or reach out to our customer support team.
        </Desc>
        <WrapContent>
          <BtnNeedHelp type="button">
            <span>?</span>
            <DescContent>Need help?</DescContent>
          </BtnNeedHelp>
        </WrapContent>
      </Container>
    </MainContainer>
  );
};

export default CustomerSupport;
