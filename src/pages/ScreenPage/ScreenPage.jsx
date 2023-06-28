import { useParams } from 'react-router-dom';
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
  AddCardBtn,
  IconStyled,
  BtnIcon,
  ListTask,
  // Btn,
  // AddCardIcon,
} from './ScreenPage.styled';
import url from '../../images/icons/sprite/icons.svg';

const ScreenPage = () => {
  const { boardId } = useParams();
  const dispatch = useDispatch();
  const { data } = useGetFetchBoardByIdQuery(boardId);
  const [deleteColumn] = useDeleteColumnMutation();

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
              <BtnIcon onClick={() => handleDeleteColumn(_id)} type="button">
                <IconStyled width="16" height="16">
                  <use xlinkHref={`${url}#icon-trash-04`} />
                </IconStyled>
              </BtnIcon>
            </BoxColumnsTitle>

            <ListTask>
              {data?.tasks &&
                data.tasks.map(
                  (task) =>
                    task.column === _id && (
                      <TaskCard task={task} key={task._id} />
                    )
                )}
            </ListTask>
            <AddCardBtn onClick={() => handlClickModal(_id)}>
              <svg width="28" height="28">
                <use xlinkHref={`${url}#icon-plus`} />
              </svg>
              Add another card
            </AddCardBtn>
          </BoxColumns>
        ))}
    </>
  );
};

export default ScreenPage;
