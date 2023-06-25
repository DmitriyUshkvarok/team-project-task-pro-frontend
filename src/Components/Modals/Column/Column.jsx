import CloseButton from '../CloseButton/CloseButton';
import ModalFormTitle from '../ModalFormTitle/ModalFormTitle';
import { Container, FormTitle } from './Column.styled';

const Column = ({ title }) => {
  return (
    <>
      <Container>
        <CloseButton />
        <FormTitle>{title}</FormTitle>
        <ModalFormTitle />
      </Container>
    </>
  );
};

export default Column;
