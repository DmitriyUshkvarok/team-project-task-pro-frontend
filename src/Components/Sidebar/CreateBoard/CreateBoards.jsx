import {
  Container,
  Desc,
  WrapTitleContent,
  Title,
  BtnCreateBoard,
} from './CreateBoard.styled';

const CreateBoards = () => {
  return (
    <Container>
      <Desc>My boards</Desc>
      <WrapTitleContent>
        <Title>Create a new board</Title>
        <BtnCreateBoard type="buttom">+</BtnCreateBoard>
      </WrapTitleContent>
    </Container>
  );
};

export default CreateBoards;
