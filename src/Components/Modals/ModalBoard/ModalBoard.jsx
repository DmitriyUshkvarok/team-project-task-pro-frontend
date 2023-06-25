import { ModalCard } from './ModalBoard.styled';
import CloseButton from '../CloseButton/CloseButton';
import ModalFormTitle from '../ModalFormTitle/ModalFormTitle';
import ModalBoardIcons from '../ModalBoardIcons/ModalBoardIcons';

const ModalBoard = ({ modalTitle, buttonName }) => {
  return (
    <>
      <ModalCard>
        <CloseButton />
        <h2>{modalTitle}</h2>
        <ModalFormTitle buttonName={buttonName}>
          <ModalBoardIcons />
        </ModalFormTitle>
      </ModalCard>
    </>
  );
};

export default ModalBoard;
