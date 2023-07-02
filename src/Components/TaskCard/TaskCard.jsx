import {
  CardBg,
  Card,
  CardTitle,
  CardDescription,
  CardText,
  CardBottom,
  CardBottomGroup,
  CardPriority,
  CardSubtitle,
  Circle,
  Priority,
  CardDeadline,
  Deadline,
  CardBtnGroup,
  CardBtn,
  CardIconBell,
  CardIcon,
  BellBox,
} from './TaskCard.styled';
import url from '../../images/icons/sprite/icons.svg';
import PropTypes from 'prop-types';
import { LoaderForDeleted } from '../Loader/LoaderDeleted/LoaderDeleted';

import { openModal } from '../../redux/modal/modalSlice';
import { useDispatch, useSelector } from 'react-redux';

import { useDeleteTaskMutation } from '../../redux/boardApi/boardApi';
import { useState } from 'react';

const TaskCard = ({ task, columns }) => {
  const [isLoading, setIsLoading] = useState({});
  const [deleteTask] = useDeleteTaskMutation();
  const dispatch = useDispatch();

  const { themeColor } = useSelector((store) => store.theme);

  const date = new Date(task.deadline);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  const theme = themeColor === 'dark';

  function colorSwitch(priority) {
    let color;
    switch (priority) {
      case 'medium':
        color = '#e09cb5';
        break;

      case 'without':
        color = theme ? '#FFFFFF4D' : '#1616164d';
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

  const handleDeleteTask = async (id) => {
    try {
      setIsLoading((prevDelete) => ({
        ...prevDelete,
        [id]: true,
      }));
      await deleteTask(id);
      setIsLoading((prevDelete) => ({
        ...prevDelete,
        [id]: false,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li>
      <CardBg style={{ backgroundColor: `${colorSwitch(task.priority)}` }}>
        <Card>
          <CardTitle>{task.title}</CardTitle>

          <CardDescription>
            <CardText>{task.description}</CardText>
          </CardDescription>
          <CardBottom>
            <CardBottomGroup>
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
                  <Priority>
                    {task.priority.charAt(0).toUpperCase() +
                      task.priority.slice(1)}
                  </Priority>
                </Circle>
              </CardPriority>
              <CardDeadline>
                <CardSubtitle>Deadline</CardSubtitle>
                <Deadline>{formattedDate}</Deadline>
              </CardDeadline>
            </CardBottomGroup>

            {new Date() >= new Date(task.deadline) ? (
              <BellBox>
                <CardIconBell>
                  <use xlinkHref={`${url}#icon-bell`} />
                </CardIconBell>
              </BellBox>
            ) : null}

            <CardBtnGroup>
              <CardBtn
                type="button"
                onClick={() =>
                  dispatch(
                    openModal({
                      name: 'progressDoneModal',
                      currentColumnId: task.column,
                      currentTaskId: task._id,
                      columns,
                    })
                  )
                }
              >
                <CardIcon>
                  <use xlinkHref={`${url}#icon-arrow-circle-broken-right`} />
                </CardIcon>
              </CardBtn>
              <CardBtn
                type="button"
                onClick={() =>
                  dispatch(
                    openModal({
                      name: 'modalEditCard',
                      task,
                    })
                  )
                }
              >
                <CardIcon>
                  <use xlinkHref={`${url}#icon-pencil-01`} />
                </CardIcon>
              </CardBtn>
              <CardBtn type="button" disabled={isLoading[task._id]}>
                {isLoading[task._id] ? (
                  <LoaderForDeleted />
                ) : (
                  <CardIcon onClick={() => handleDeleteTask(task._id)}>
                    <use xlinkHref={`${url}#icon-trash-04`} />
                  </CardIcon>
                )}
              </CardBtn>
            </CardBtnGroup>
          </CardBottom>
        </Card>
      </CardBg>
    </li>
  );
};

export default TaskCard;

TaskCard.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    priority: PropTypes.oneOf(['medium', 'without', 'high', 'low']).isRequired,
    deadline: PropTypes.string.isRequired,
    column: PropTypes.string.isRequired,
  }).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      board: PropTypes.string.isRequired,
    }).isRequired
  ),
};
