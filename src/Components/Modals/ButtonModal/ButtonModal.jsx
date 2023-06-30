import url from '../../../images/icons/sprite/icons.svg';
import { Button, ContainerIconButton } from './ButtonModal.styled';
import { LoaderForDeleted } from '../../Loader/LoaderDeleted/LoaderDeleted';

const ButtonModal = ({ buttonName, isLoading }) => {
  return (
    <>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? (
          <LoaderForDeleted />
        ) : (
          <>
            <ContainerIconButton>
              <svg width="14" height="14">
                <use xlinkHref={`${url}#icon-plus`} />
              </svg>
            </ContainerIconButton>
            {buttonName}
          </>
        )}
      </Button>
    </>
  );
};

export default ButtonModal;
