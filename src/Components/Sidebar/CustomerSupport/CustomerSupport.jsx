import {
  MainContainer,
  Container,
  Desc,
  AccentSpan,
  WrapContent,
  BtnNeedHelp,
  IconStyled,
} from './CustomSupport.styled';

import plant from '../../../images/icons/iconsPng/plant.png';
import url from '../../../images/icons/sprite/icons.svg';

import { openModal } from '../../../redux/modal/modalSlice';
import { useDispatch } from 'react-redux';

const CustomerSupport = () => {
  const dispatch = useDispatch();

  return (
    <MainContainer>
      <Container>
        <img src={plant} alt="plant" />
        <Desc>
          If you need help with <AccentSpan>TaskPro</AccentSpan>, check out our
          support resources or reach out to our customer support team.
        </Desc>
        <WrapContent
          onClick={() => dispatch(openModal({ name: 'needhelpmodal' }))}
        >
          <BtnNeedHelp type="button">
            <IconStyled width="20" height="20">
              <use xlinkHref={`${url}#icon-help-circle`} />
            </IconStyled>
            Need help?
          </BtnNeedHelp>
        </WrapContent>
      </Container>
    </MainContainer>
  );
};

export default CustomerSupport;
