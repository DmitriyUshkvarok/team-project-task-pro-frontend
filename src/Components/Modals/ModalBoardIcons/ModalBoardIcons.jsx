import url from '../../../images/icons/sprite/icons.svg';
import { Text, Form, IconContainer } from './ModalBoardIcons.styled';

const ModalBoardIcons = () => {
  return (
    <>
      <Form>
        <Text id="my-radio-groupIcon">Icons</Text>
      </Form>
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
    </>
  );
};

export default ModalBoardIcons;
