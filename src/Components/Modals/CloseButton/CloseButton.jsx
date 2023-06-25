import url from '../../../images/icons/sprite/icons.svg';
import { closeModal } from '../../../redux/modal/modalSlice.js';
import { useDispatch } from 'react-redux';
import { IconButton } from './CloseButton.styled';

const CloseButton = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <IconButton onClick={handleClose}>
        <svg width="18" height="18">
          <use xlinkHref={`${url}#icon-x-close`} />
        </svg>
      </IconButton>
    </>
  );
};

export default CloseButton;
