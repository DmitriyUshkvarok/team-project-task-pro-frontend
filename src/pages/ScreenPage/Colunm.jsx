import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';

import { openModal } from '../../redux/modal/modalSlice';
import { useDeleteColumnMutation } from '../../redux/boardApi/boardApi';
import TaskCard from '../../Components/TaskCard/TaskCard';

import { selectFilterValue } from '../../redux/filter/filterSelector';

import {
  BoxColumns,
  BoxColumnsTitle,
  Subject,
  AddCardBtn,
  IconStyled,
  BtnIcon,
  ListTask,
  AddCardIcon,
} from './ScreenPage.styled';

import url from '../../images/icons/sprite/icons.svg';
import { LoaderForDeleted } from '../../Components/Loader/LoaderDeleted/LoaderDeleted';

const Column = ({ _id, title, tasksList, columnsIds, index, boardId }) => {
  const [isDeletedLoad, setIsDeletedLoad] = useState({});
  const dispatch = useDispatch();
  const [deleteColumn] = useDeleteColumnMutation();

  const filter = useSelector(selectFilterValue);

  const handleClickModal = (columnId) => {
    dispatch(
      openModal({
        name: 'modalAddCard',
        boardId,
        columnId,
      })
    );
  };

  const handleEditColumn = (id, title) => {
    dispatch(
      openModal({
        name: 'editColumn',
        id,
        title,
      })
    );
  };

  const handleDeleteColumn = async (id) => {
    setIsDeletedLoad((prevIsDeletedLoad) => ({
      ...prevIsDeletedLoad,
      [id]: true,
    }));
    try {
      await deleteColumn(id);
    } catch (error) {
      console.log(error);
    } finally {
      setIsDeletedLoad((prevIsDeletedLoad) => ({
        ...prevIsDeletedLoad,
        [id]: false,
      }));
    }
  };
  return (
    <Draggable draggableId={_id} index={index}>
      {(provided) => (
        <BoxColumns {...provided.draggableProps} ref={provided.innerRef}>
          <BoxColumnsTitle {...provided.dragHandleProps}>
            <Subject>{title}</Subject>
            <BtnIcon onClick={() => handleEditColumn(_id, title)} type="button">
              <IconStyled width="16" height="16">
                <use xlinkHref={`${url}#icon-pencil-01`} />
              </IconStyled>
            </BtnIcon>
            <BtnIcon
              onClick={() => handleDeleteColumn(_id)}
              type="button"
              disabled={isDeletedLoad[_id]}
            >
              {isDeletedLoad[_id] ? (
                <LoaderForDeleted />
              ) : (
                <IconStyled width="16" height="16">
                  <use xlinkHref={`${url}#icon-trash-04`} />
                </IconStyled>
              )}
            </BtnIcon>
          </BoxColumnsTitle>

          <Droppable droppableId={_id} type="task">
            {(provided, snapshot) => (
              <ListTask
                ref={provided.innerRef}
                {...provided.droppableProps}
                // style={{
                //   backgroundColor: snapshot.isDraggingOver
                //     ? 'var(--secondarySidebarBgColor)'
                //     : // ? 'var(--primarySidebarBgColor)'
                //       'inherit',
                // }}
              >
                {tasksList &&
                  tasksList.map((task, index) => {
                    if (filter !== 'all') {
                      return (
                        filter === task.priority && (
                          <TaskCard
                            task={task}
                            columnsIdsTitles={columnsIds}
                            currentColumnId={_id}
                            key={task._id}
                            index={index}
                          />
                        )
                      );
                    } else {
                      return (
                        <TaskCard
                          task={task}
                          columnsIdsTitles={columnsIds}
                          currentColumnId={_id}
                          key={task._id}
                          index={index}
                        />
                      );
                    }
                  })}
                {provided.placeholder}
              </ListTask>
            )}
          </Droppable>

          <AddCardBtn onClick={() => handleClickModal(_id)}>
            <AddCardIcon width="28" height="28">
              <svg width="18" height="18">
                <use xlinkHref={`${url}#icon-plus`} />
              </svg>
            </AddCardIcon>
            Add another card
          </AddCardBtn>
        </BoxColumns>
      )}
    </Draggable>
  );
};

export default Column;

Column.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,

  tasksList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      priority: PropTypes.oneOf(['medium', 'without', 'high', 'low'])
        .isRequired,
      deadline: PropTypes.string.isRequired,
    })
  ),
  columnsIds: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  index: PropTypes.number.isRequired,
  boardId: PropTypes.string.isRequired,
};
