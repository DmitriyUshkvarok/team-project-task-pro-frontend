import CloseButton from '../CloseButton/CloseButton';
import ModalFormTitle from '../ModalFormTitle/ModalFormTitle';
import ModalBoardIcons from '../ModalBoardIcons/ModalBoardIcons';
import BackgroundImageMini from '../BackgroundImageMini/BackgroundImageMini';
import { ModalCard, Title } from './ModalBoard.styled';

const ModalBoard = ({ modalTitle, buttonName }) => {
  return (
    <>
      <ModalCard>
        <CloseButton />
        <Title>{modalTitle}</Title>
        <ModalFormTitle buttonName={buttonName}>
          <ModalBoardIcons />
          <BackgroundImageMini />
        </ModalFormTitle>
      </ModalCard>
    </>
  );
};

export default ModalBoard;
