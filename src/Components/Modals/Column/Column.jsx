import CloseButton from '../CloseButton/CloseButton';
import ModalFormTitle from '../ModalFormTitle/ModalFormTitle';
import { Container, FormTitle } from './Column.styled';

const Column = ({ buttonName, modalTitle }) => {
  return (
    <>
      <Container>
        <CloseButton />
        <FormTitle>{modalTitle}</FormTitle>
        <ModalFormTitle buttonName={buttonName} />
      </Container>
    </>
  );
};

export default Column;
