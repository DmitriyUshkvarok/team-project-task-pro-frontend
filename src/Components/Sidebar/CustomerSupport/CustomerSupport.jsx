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

import plant from '../../../images/icons/iconsPng/plant.png';
import url from '../../../images/icons/sprite/icons.svg';
import { useState } from 'react';
// import Backdrop from '../../Modals/Backdrop/Backdrop';

import { openModal } from '../../../redux/modal/modalSlice';
import { useDispatch } from 'react-redux';

const IconStyled = styled.svg`
  stroke: var(--iconSideBarColor);
  fill: transparent;
`;

const CustomerSupport = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [helpModal, setHelpModal] = useState(false);

  const handleClick = () => {
    setVisible((prev) => !prev);
    setHelpModal(true);
    console.log('click');
  };

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
            <DescContent onClick={handleClick}>Need help?</DescContent>
          </BtnNeedHelp>
        </WrapContent>
        {/* <Backdrop
          handleClose={handleClose}
          handleClick={handleClick}
          helpModal={helpModal}
          visible={visible}
        /> */}
      </Container>
    </MainContainer>
  );
};

export default CustomerSupport;
