import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modal/modalSlice';
import { useGetFetchBoardByIdQuery } from '../../redux/boardApi/boardApi';
import TaskCard from '../../Components/TaskCard/TaskCard';
import {
  BoxColumns,
  BoxColumnsTitle,
  Subject,
  Icon,
  // ListCard,
  // Card,
  Btn,
  // ContainerColumns,
  // BtnAdd,
} from './ScreenPage.styled';

const ScreenPage = () => {
  const { boardId } = useParams();
  const dispatch = useDispatch();
  const { data } = useGetFetchBoardByIdQuery(boardId);

  // const handlClickModal = (columnId) => {
  //   dispatch(
  //     openModal({
  //       name: 'addCard',
  //       boardId,
  //       columnId,
  //     })
  //   );
  // };

  return (
    <>
      {data?.columns &&
        data.columns.map((column) => (
          <BoxColumns key={column._id}>
            <BoxColumnsTitle>
              <Subject>{column.title}</Subject>
              <Icon>icon</Icon>
              <Icon>icon</Icon>
            </BoxColumnsTitle>
            <TaskCard />

            <Btn onClick={() => handlClickModal(column._id)}>
              Add another card
            </Btn>
          </BoxColumns>
        ))}
    </>
  );
};

export default ScreenPage;
