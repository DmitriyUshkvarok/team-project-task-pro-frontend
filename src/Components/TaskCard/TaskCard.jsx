import {
  CardBg,
  Card,
  CardTitle,
  CardDescription,
  CardText,
  CardBottom,
  CardBottomGrop,
  CardPriority,
  CardSubtitle,
  Circle,
  Priority,
  CardDeadline,
  Deadline,
  CardBtnGrope,
  CardBtn,
  CardIcon,
} from './TaskCard.styled';
import url from '../../images/icons/sprite/icons.svg';

import { openModal } from '../../redux/modal/modalSlice';
import { useDispatch } from 'react-redux';

const TaskCard = () => {
  const dispatch = useDispatch();

  const maxLength = 97;
  const longText = `Conduct in-depth research and analysis on the project's topic, gather relevant data, and identify key insights to inform decision-making and project planning.`;
  let color;
  const priority = 'Medium'; //
  const data = '12/05/2023';

  switch (priority) {
    case 'Medium':
      color = '#e09cb5';
      break;

    case 'Without':
      color = '#1616164d';
      break;

    case 'High':
      color = '#BEDBB0';
      break;

    case 'Low':
      color = '##8FA1D0';
      break;

    default:
      console.log('Invalid subscription type');
  }

  return (
    <CardBg style={{ backgroundColor: `${color}` }}>
      <Card>
        <CardTitle>Research and Analysis</CardTitle>

        <CardDescription>
          <CardText>
            {longText.length >= maxLength
              ? `${longText.substring(0, maxLength)}...`
              : longText}
          </CardText>
        </CardDescription>

        <CardBottom>
          <CardBottomGrop>
            <CardPriority>
              <CardSubtitle>Priority</CardSubtitle>
              <Circle>
                <div
                  style={{
                    backgroundColor: `${color}`,
                    height: '12px',
                    width: '12px',
                    borderRadius: '50%',
                  }}
                ></div>
                <Priority>{priority}</Priority>
              </Circle>
            </CardPriority>
            <CardDeadline>
              <CardSubtitle>Deadline</CardSubtitle>
              <Deadline>{data}</Deadline>
            </CardDeadline>
          </CardBottomGrop>

          <CardBtnGrope>
            <CardBtn type="button">
              <CardIcon>
                <use xlinkHref={`${url}#icon-arrow-circle-broken-right`} />
              </CardIcon>
            </CardBtn>
            <CardBtn
              type="button"
              onClick={() => dispatch(openModal({ name: 'ModalEditCard' }))}
            >
              <CardIcon stroke="grey">
                <use xlinkHref={`${url}#icon-pencil-01`} />
              </CardIcon>
            </CardBtn>
            <CardBtn type="button">
              <CardIcon>
                <use xlinkHref={`${url}#icon-trash-04`} />
              </CardIcon>
            </CardBtn>
          </CardBtnGrope>
        </CardBottom>
      </Card>
    </CardBg>
  );
};

export default TaskCard;
