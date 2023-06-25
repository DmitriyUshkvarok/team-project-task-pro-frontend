import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/modal/modalSlice';

import {
  Container,
  Desc,
  WrapTitleContent,
  Title,
  BtnCreateBoard,
  IconStyled,
} from './CreateBoard.styled';

import url from '../../../images/icons/sprite/icons.svg';

const CreateBoards = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal({ name: 'modalBoard' }));
  };
  return (
    <Container>
      <Desc>My boards</Desc>
      <WrapTitleContent>
        <Title>Create a new board</Title>

        <BtnCreateBoard onClick={handleOpenModal} type="buttom">
          <IconStyled width="20" height="20">
            <use xlinkHref={`${url}#icon-plus`} />
          </IconStyled>
        </BtnCreateBoard>
      </WrapTitleContent>
    </Container>
  );
};

export default CreateBoards;