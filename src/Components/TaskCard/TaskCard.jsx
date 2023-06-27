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

const TaskCard = ({ data, id }) => {
  const maxLength = 97;
  // const longText = `Conduct in-depth research and analysis on the project's topic, gather relevant data, and identify key insights to inform decision-making and project planning.`;
  const color = '#e09cb5';

  return (
    <CardBg style={{ backgroundColor: `${color}` }}>
      {data.tasks
        .filter((task) => id === task.column)
        .map((task) => {
          return (
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
                          backgroundColor: `${color}`,
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
                      <use
                        xlinkHref={`${url}#icon-arrow-circle-broken-right`}
                      />
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
          );
        })}
    </CardBg>
  );
};

export default TaskCard;
