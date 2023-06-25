import {
  Container,
  Desc,
  WrapTitleContent,
  Title,
  BtnCreateBoard,
  IconStyled
} from './CreateBoard.styled';

import url from '../../../images/icons/sprite/icons.svg';

const CreateBoards = () => {
  return (
    <Container>
      <Desc>My boards</Desc>
      <WrapTitleContent>
        <Title>Create a new board</Title>
        <BtnCreateBoard type="button">
          <IconStyled width="20" height="20">
            <use xlinkHref={`${url}#icon-plus`} />
          </IconStyled>
        </BtnCreateBoard>
      </WrapTitleContent>
    </Container>
  );
};

export default CreateBoards;
