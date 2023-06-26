import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import CloseButton from '../CloseButton/CloseButton';
import ModalFormTitle from '../ModalFormTitle/ModalFormTitle';
import { Container, FormTitle } from './Column.styled';
import { closeModal } from '../../../redux/modal/modalSlice';

const Column = ({ buttonName, modalTitle, onSubmit, setCurrentColumnName }) => {
  const dispatch = useDispatch();

  const handleSubmit = (title) => {
    onSubmit(title);
    setCurrentColumnName(title);
  };

  const modalRef = useRef(null);

  return (
    <>
      <Container ref={modalRef}>
        <CloseButton onClick={() => dispatch(closeModal())} />
        <FormTitle>{modalTitle}</FormTitle>
        <ModalFormTitle
          buttonName={buttonName}
          onSubmit={handleSubmit}
          title={modalTitle}
        />
      </Container>
    </>
  );
};

export default Column;
