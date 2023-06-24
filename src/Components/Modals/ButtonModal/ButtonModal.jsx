import url from '../../../images/icons/sprite/icons.svg';
import { Button, ContainerIcon } from './ButtonModal.styled';

const ButtonModal = ({ buttonName }) => {
  return (
    <>
      <Button type="submit">
        <ContainerIcon>
          <svg width="14" height="14">
            <use xlinkHref={`${url}#icon-plus`} />
          </svg>
        </ContainerIcon>
        {buttonName}
      </Button>
    </>
  );
};

export default ButtonModal;
