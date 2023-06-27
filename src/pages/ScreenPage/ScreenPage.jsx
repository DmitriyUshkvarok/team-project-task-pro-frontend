import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modal/modalSlice';
import { useGetFetchBoardByIdQuery } from '../../redux/boardApi/boardApi';
import TaskCard from '../../Components/TaskCard/TaskCard';
import {
  BoxColumns,
  BoxColumnsTitle,
  Subject,
  // Icon,
  // ListCard,
  // Card,
  Btn,
  // ContainerColumns,
  // BtnAdd,
  IconStyled,
  BtnIcon,
} from './ScreenPage.styled';
import url from '../../images/icons/sprite/icons.svg';

const ScreenPage = () => {
  const { boardId } = useParams();
  const dispatch = useDispatch();
  const { data } = useGetFetchBoardByIdQuery(boardId);

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
              <BtnIcon type="button">
                <IconStyled width="16" height="16">
                  <use xlinkHref={`${url}#icon-trash-04`} />
                </IconStyled>
              </BtnIcon>
            </BoxColumnsTitle>
            <TaskCard />

            <Btn onClick={() => handlClickModal(_id)}>Add another card</Btn>
          </BoxColumns>
        ))}
    </>
  );
};

export default ScreenPage;
