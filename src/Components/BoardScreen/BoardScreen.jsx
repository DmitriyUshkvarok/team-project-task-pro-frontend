import { Outlet, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modal/modalSlice';
import {
  useGetFetchBoardsQuery,
  // useGetFetchBoardByIdQuery,
} from '../../redux/boardApi/boardApi';
import {
  Board,
  Filter,
  SidebarBoard,
  Title,
  DescEmptyBoard,
  Wrap,
  AccentSpan,
  BoardsContainer,
  ContainerColumns,
  AddColumnBtn,
  AddIcon,
} from './BoardScreen.styled';
import url from '../../images/icons/sprite/icons.svg';
// ../../images/icons/sprite/icons.svg
const BoardScreen = ({ closeSidebar }) => {
  const dispatch = useDispatch();
  const { title, boardId } = useParams();
  const { data: boards } = useGetFetchBoardsQuery();
  // const { data } = useGetFetchBoardByIdQuery(boardId);

  const handleClickModal = () => {
    dispatch(
      openModal({
        name: 'addColumn',
        boardId,
      })
    );
  };

  return (
    <Board onClick={closeSidebar}>
      <SidebarBoard>
        <Title>{title}</Title>
        <Filter> Icon Filters</Filter>
      </SidebarBoard>
      {boards?.length === 0 && (
        <Wrap>
          <DescEmptyBoard>
            Before starting your project, it is essential
            <AccentSpan> to create a board</AccentSpan>
            to visualize and track all the necessary tasks and milestones. This
            board serves as a powerful tool to organize the workflow and ensure
            effective collaboration among team members.
          </DescEmptyBoard>
        </Wrap>
      )}
      <BoardsContainer>
        <ContainerColumns>
          <Outlet />
        </ContainerColumns>
        {boards?.length !== 0 && (
          <AddColumnBtn onClick={handleClickModal}>
            <AddIcon width="28" height="28">
              <use xlinkHref={`${url}#icon-plus`} />
            </AddIcon>
            Add Columns
          </AddColumnBtn>
        )}
      </BoardsContainer>
    </Board>
  );
};

export default BoardScreen;
