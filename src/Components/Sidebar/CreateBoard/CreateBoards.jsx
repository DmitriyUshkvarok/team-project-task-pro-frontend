import {
  Container,
  Desc,
  WrapTitleContent,
  Title,
  BtnCreateBoard,
} from './CreateBoard.styled';

import url from '../../../icons/sprite/icons.svg';

const CreateBoards = () => {
  return (
    <Container>
      <Desc>My boards</Desc>
      <WrapTitleContent>
        <Title>Create a new board</Title>
        <BtnCreateBoard type="buttom">
          <svg width="20" height="20">
            <use xlinkHref={`${url}#icon-plus`} />
          </svg>
        </BtnCreateBoard>
      </WrapTitleContent>
    </Container>
  );
};

export default CreateBoards;
