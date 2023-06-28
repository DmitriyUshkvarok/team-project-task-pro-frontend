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

const TaskCard = ({ task }) => {
  const maxLength = 97;

  function colorSwitch(priority) {
    let color;
    switch (priority) {
      case 'medium':
        color = '#e09cb5';
        break;

      case 'without':
        color = '#1616164d';
        break;

      case 'high':
        color = '#BEDBB0';
        break;

      case 'low':
        color = '#8FA1D0';
        break;
    }

    return color;
  }

  return (
    <CardBg style={{ backgroundColor: `${colorSwitch(task.priority)}` }}>
      <Card key={task._id}>
        <CardTitle>{task.title}</CardTitle>

        <CardDescription>
          <CardText>
            {task.description.length >= maxLength
              ? `${task.description.substring(0, maxLength)}...`
              : task.description}
          </CardText>
        </CardDescription>

        <CardBottom>
          <CardBottomGrop>
            <CardPriority>
              <CardSubtitle>Priority</CardSubtitle>
              <Circle>
                <div
                  style={{
                    backgroundColor: `${colorSwitch(task.priority)}`,
                    height: '12px',
                    width: '12px',
                    borderRadius: '50%',
                  }}
                ></div>
                <Priority>{task.priority}</Priority>
              </Circle>
            </CardPriority>
            <CardDeadline>
              <CardSubtitle>Deadline</CardSubtitle>
              <Deadline>{task.deadline}</Deadline>
            </CardDeadline>
          </CardBottomGrop>

          <CardBtnGrope>
            <CardBtn type="button">
              <CardIcon>
                <use xlinkHref={`${url}#icon-arrow-circle-broken-right`} />
              </CardIcon>
            </CardBtn>
            <CardBtn type="button">
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
