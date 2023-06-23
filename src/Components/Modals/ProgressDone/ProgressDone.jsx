import url from '../../../images/icons/sprite/icons.svg';

import {
  ProgressDoneContainer,
  ColumnStatus,
  Button,
} from './ProgressDone.styled';

const ProgressDoneModal = () => {
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
