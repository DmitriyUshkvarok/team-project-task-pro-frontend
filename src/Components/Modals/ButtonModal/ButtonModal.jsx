import url from '../../../images/icons/sprite/icons.svg';
import { Button, ContainerIconButton } from './ButtonModal.styled';

const ButtonModal = ({ buttonName }) => {
  return (
    <>
      <Button type="submit">
        <ContainerIconButton>
          <svg width="14" height="14">
            <use xlinkHref={`${url}#icon-plus`} />
          </svg>
        </ContainerIconButton>
        {buttonName}
      </Button>
    </>
  );
};

export default ButtonModal;
