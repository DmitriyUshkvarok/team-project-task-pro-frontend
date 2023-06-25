import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalStyled } from './Modal.styled.jsx';

const modalRoot = document.querySelector('#modal-root');

import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../redux/modal/modalSlice.js';

import EditProfile from '../../Modals/EditProfile/EditProfile.jsx';
import NeedHelpModal from '../NeedHelp/NeedHelp.jsx';
import ModalBoard from '../ModalBoard/ModalBoard';

const Modal = () => {
  const { componentName } = useSelector((store) => store.modal);

  const componentsLoopUp = {
    editprofile: EditProfile,
    needhelpmodal: NeedHelpModal,
    modalBoard: ModalBoard,
  };
  let renderComponent;

  if (componentName) {
    const SelectComponent = componentsLoopUp[componentName];
    if (SelectComponent) {
      renderComponent = <SelectComponent />;
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const dispatch = useDispatch();
  const handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      dispatch(closeModal());
    }
  };

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      dispatch(closeModal());
    }
  };
  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalStyled>{renderComponent}</ModalStyled>
    </Overlay>,
    modalRoot
  );
};

export default Modal;