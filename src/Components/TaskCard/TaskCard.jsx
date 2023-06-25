import { CardBg, Card, CardTitle, CardText } from './TaskCard.styled';
import url from '../../images/icons/sprite/icons.svg';

const TaskCard = () => {
  return (
    <CardBg>
      <Card>
        <CardTitle>Research and Analysis</CardTitle>
        <CardText>
          Conduct in-depth research and analysis on the project's topic, gather
          relevant data, and identify... ::after обрезает до 100знаков
        </CardText>
        <div>
          <p>Priority</p>
          <p>::before</p>
        </div>
        <div>
          <p>Deadline</p>
          <p></p>
        </div>

        <button type="button" style={{ backgroundColor: 'black' }}>
          <svg width="20" height="20">
            <use
              xlinkHref={`${url}#icon-arrow-circle-broken-right`}
              style={{ stroke: 'grey' }}
            />
          </svg>
        </button>
        <button type="button" style={{ backgroundColor: 'black' }}>
          <svg width="20" height="20">
            <use
              xlinkHref={`${url}#icon-trash-04`}
              style={{ stroke: 'grey' }}
            />
          </svg>
        </button>
        <button type="button" style={{ backgroundColor: 'black' }}>
          <svg width="20" height="20">
            <use
              xlinkHref={`${url}#icon-pencil-01`}
              style={{ stroke: 'grey' }}
            />
          </svg>
        </button>
      </Card>
    </CardBg>
  );
};

export default TaskCard;
