import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modal/modalSlice';
import {
  useGetFetchBoardByIdQuery,
  useDeleteColumnMutation,
} from '../../redux/boardApi/boardApi';
import TaskCard from '../../Components/TaskCard/TaskCard';
import {
  BoxColumns,
  BoxColumnsTitle,
  Subject,
  Btn,
  IconStyled,
  BtnIcon,
} from './ScreenPage.styled';
import url from '../../images/icons/sprite/icons.svg';

const ScreenPage = () => {
  const { boardId } = useParams();
  const dispatch = useDispatch();
  const { data } = useGetFetchBoardByIdQuery(boardId);
  const [deleteColumn] = useDeleteColumnMutation();
  const [value, setValue] = useState();
  const [filteredTasks, setFilteredTasks] = useState();

  useEffect(() => {
    if (data) {
      setValue(data.tasks);
      setFilteredTasks(data.tasks);
    }
  }, [data]);

  const handlClickModal = (columnId) => {
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
    await deleteColumn(id);
  };

  const handleFilteredPriority = () => {
    // if (priority !== '_____') {
    setFilteredTasks(value.filter((task) => task.priority === 'high'));
    // } else return;
  };

  console.log(`filteredTasks`, filteredTasks);

  return (
    <>
      //===============delete start=================== */
      <button onClick={handleFilteredPriority} type="button">
        qqqqqqqq
      </button>
      //===============delete end================== */
      {data?.columns &&
        data.columns.map(({ _id, title }) => (
          <BoxColumns key={_id}>
            <BoxColumnsTitle>
              <Subject>{title}</Subject>
              <BtnIcon
                onClick={() => handleEditColumn(_id, title)}
                type="button"
              >
                <IconStyled width="16" height="16">
                  <use xlinkHref={`${url}#icon-pencil-01`} />
                </IconStyled>
              </BtnIcon>
              <BtnIcon onClick={() => handleDeleteColumn(_id)} type="button">
                <IconStyled width="16" height="16">
                  <use xlinkHref={`${url}#icon-trash-04`} />
                </IconStyled>
              </BtnIcon>
            </BoxColumnsTitle>
            {filteredTasks &&
              filteredTasks.map(
                (task) =>
                  task.column === _id && <TaskCard task={task} key={task._id} />
              )}
            ;<Btn onClick={() => handlClickModal(_id)}>Add another card</Btn>
          </BoxColumns>
        ))}
    </>
  );
};

export default ScreenPage;
