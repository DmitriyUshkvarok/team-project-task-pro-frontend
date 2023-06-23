import url from '../../../images/icons/sprite/icons.svg';
import { IconButton } from './CloseButton.styled';

const CloseButton = () => {
  return (
    <>
      <IconButton>
        <svg width="18" height="18">
          <use xlinkHref={`${url}#icon-x-close`} />
        </svg>
      </IconButton>
    </>
  );
};

export default CloseButton;
