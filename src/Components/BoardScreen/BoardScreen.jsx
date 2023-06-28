import { Outlet, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modal/modalSlice';
import {
  useGetFetchBoardsQuery,
  useGetFetchBoardByIdQuery,
} from '../../redux/boardApi/boardApi';
import {
  Board,
  Filter,
  SidebarBoard,
  Title,
  DescEmptyBoard,
  Wrap,
  AccentSpan,
} from './BoardScreen.styled';
import { FiFilter } from 'react-icons/fi';

import {
  ContainerColumns,
  BtnAdd,
} from '../../pages/ScreenPage/ScreenPage.styled';

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
        {/* <Filter> </> Filters</Filter> */}
        <Filter onClick={() => dispatch(openModal({ name: 'filter' }))}>
          <FiFilter />
          {/* <span>{Filters}</span> */}
          <span>Filters</span>
        </Filter>
      </SidebarBoard>
      {boards?.length === 0 && (
        <Wrap>
          <DescEmptyBoard>
            Before starting your project, it is essential{' '}
            <AccentSpan> to create a board</AccentSpan>
            to visualize and track all the necessary tasks and milestones. This
            board serves as a powerful tool to organize the workflow and ensure
            effective collaboration among team members.
          </DescEmptyBoard>
        </Wrap>
      )}
      <ContainerColumns>
        <Outlet />
        {boards?.length !== 0 && (
          <BtnAdd onClick={handleClickModal}>Add Columns</BtnAdd>
        )}
      </ContainerColumns>
    </Board>
  );
};

export default BoardScreen;
