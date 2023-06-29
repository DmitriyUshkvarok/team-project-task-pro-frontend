import { Outlet, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modal/modalSlice';
import {
  useGetFetchBoardsQuery,
  // useGetFetchBoardByIdQuery,
  useGetBoardBdByIdQuery,
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
  AddColumnIcon,
} from './BoardScreen.styled';
import { FiFilter } from 'react-icons/fi';
import url from '../../images/icons/sprite/icons.svg';

const BoardScreen = ({ closeSidebar }) => {
  const dispatch = useDispatch();
  const { title, boardId } = useParams();
  const { data: boards } = useGetFetchBoardsQuery();

  const handleClickModal = () => {
    dispatch(
      openModal({
        name: 'addColumn',
        boardId,
      })
    );
  };

  const bgName = boards?.find(({ _id }) => _id === boardId);

  const { data: boardBg } = useGetBoardBdByIdQuery(bgName?.backgroundId);

  return (
    <Board boardBg={bgName ? boardBg : ''} onClick={closeSidebar}>
      <SidebarBoard>
        <Title>{bgName?.title}</Title>
        <Filter onClick={() => dispatch(openModal({ name: 'filter' }))}>
          <FiFilter />
          <span>Filters</span>
        </Filter>
      </SidebarBoard>
      {boards?.length === 0 && (
        <Wrap>
          <DescEmptyBoard>
            Before starting your project, it is essential
            <AccentSpan> to create a board </AccentSpan>
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
            <AddColumnIcon>
              <svg width="18" height="18">
                <use xlinkHref={`${url}#icon-plus`} />
              </svg>
            </AddColumnIcon>
            Add Columns
          </AddColumnBtn>
        )}
      </BoardsContainer>
    </Board>
  );
};

export default BoardScreen;
