import { Outlet, useParams } from 'react-router-dom';
import { useGetFetchBoardsQuery } from '../../redux/boadrApi/boardApi';
import {
  Board,
  Filter,
  SidebarBoard,
  Title,
  DescEmptyBoard,
  Wrap,
  AccentSpan,
} from '../../pages/HomePage/HomePage.styled';

const BoardScreen = ({ closeSidebar }) => {
  const { data: boards } = useGetFetchBoardsQuery();

  const { title } = useParams();
  return (
    <Board style={{ height: '100vh' }} onClick={closeSidebar}>
      <SidebarBoard>
        <Title>{title}</Title>
        <Filter> Icon Filters</Filter>
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

      <Outlet />
    </Board>
  );
};

export default BoardScreen;
