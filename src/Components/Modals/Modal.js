// import { useEffect } from 'react';
import { createPortal } from 'react-dom';
// import { Overlay, ModalStyled } from './Modal.styled';
const modalRoot = document.querySelector('#modal-root');

const Modal = () => {
  //   const handleBackdropClick = (e) => {
  //     if (e.currentTarget === e.target) {
  //       onClose();
  //     }
  //   };

    return createPortal(
      
        <p>КАКАЯ-ТО ХРЕНЬ!!!!</p>,
    // <Overlay>
    //   <ModalStyled>{children}</ModalStyled>
    // </Overlay>,
    modalRoot
  );
};

export default Modal;
