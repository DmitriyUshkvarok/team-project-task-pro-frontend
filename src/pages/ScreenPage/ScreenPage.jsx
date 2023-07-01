import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/modal/modalSlice';
import {
  useGetFetchBoardByIdQuery,
  useDeleteColumnMutation,
} from '../../redux/boardApi/boardApi';
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

const ScreenPage = () => {
  const [isDeletedLoad, setIsDeletedLoad] = useState({});
  const { boardId } = useParams();
  const dispatch = useDispatch();
  const { data } = useGetFetchBoardByIdQuery(boardId);
  const [deleteColumn] = useDeleteColumnMutation();
  const [value, setValue] = useState();
  const [filteredTasks, setFilteredTasks] = useState();
  const filter = useSelector(selectFilterValue);

  useEffect(() => {
    if (data) {
      setValue(data.tasks);
      setFilteredTasks(data.tasks);
    }
  }, [data]);

  useEffect(() => {
    if (filter && data) {
      handleFilteredPriority();
    }
  }, [filter]);

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

  const handleFilteredPriority = () => {
    if (filter !== 'all') {
      setFilteredTasks(value?.filter((task) => task.priority === filter));
    } else setFilteredTasks(value);
  };

  return (
    <>
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

            <ListTask>
              {filteredTasks &&
                filteredTasks.map(
                  (task) =>
                    task.column === _id && (
                      <TaskCard
                        task={task}
                        columns={data.columns}
                        key={task._id}
                      />
                    )
                )}
            </ListTask>
            <AddCardBtn onClick={() => handleClickModal(_id)}>
              <AddCardIcon width="28" height="28">
                <svg width="18" height="18">
                  <use xlinkHref={`${url}#icon-plus`} />
                </svg>
              </AddCardIcon>
              Add another card
            </AddCardBtn>
          </BoxColumns>
        ))}
    </>
  );
};

export default ScreenPage;
