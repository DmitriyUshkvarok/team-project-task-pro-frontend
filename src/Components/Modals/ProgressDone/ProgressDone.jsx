import url from '../../../images/icons/sprite/icons.svg';

import {
  ProgressDoneContainer,
  ColumnStatus,
  Button,
} from './ProgressDone.styled';
// import { openModal } from '../../../redux/modal/modalSlice'; //для закрытия модалки расскоментировать код
// import { useDispatch } from 'react-redux'; //для закрытия модалки расскоментировать код


// onClick={() => dispatch(closeModal())}  // для закрытия модального окна, добавить в код  после того как данные передадуться в карту 

const ProgressDoneModal = () => {
  // const dispatch = useDispatch(); //для закрытия модалки расскоментировать код
  return (
    <ProgressDoneContainer>
      <Button type="button">
        <ColumnStatus>In progress</ColumnStatus>
        <svg width={16} height={16}>
          <use xlinkHref={`${url}#icon-arrow-circle-broken-right`} />
        </svg>
      </Button>
      <Button type="button">
        <ColumnStatus>Done</ColumnStatus>
        <svg width={16} height={16}>
          <use xlinkHref={`${url}#icon-arrow-circle-broken-right`} />
        </svg>
      </Button>
    </ProgressDoneContainer>
  );
};

export default ProgressDoneModal;
