import url from '../../../images/icons/sprite/icons.svg';
import { Text, Container, IconContainer } from './ModalBoardIcons.styled';

const ModalBoardIcons = () => {
  return (
    <>
      <Container>
        <Text>Icons</Text>
        <IconContainer>
          <svg width="18" height="18">
            <use xlinkHref={`${url}#icon-board-1`} />
          </svg>
          <svg width="18" height="18">
            <use xlinkHref={`${url}#icon-board-2`} />
          </svg>
          <svg width="18" height="18">
            <use xlinkHref={`${url}#icon-board-3`} />
          </svg>
          <svg width="18" height="18">
            <use xlinkHref={`${url}#icon-board-4`} />
          </svg>
          <svg width="18" height="18">
            <use xlinkHref={`${url}#icon-board-5`} />
          </svg>
          <svg width="18" height="18">
            <use xlinkHref={`${url}#icon-board-6`} />
          </svg>
          <svg width="18" height="18">
            <use xlinkHref={`${url}#icon-board-7`} />
          </svg>
          <svg width="18" height="18">
            <use xlinkHref={`${url}#icon-board-8`} />
          </svg>
        </IconContainer>
      </Container>
    </>
  );
};

export default ModalBoardIcons;
