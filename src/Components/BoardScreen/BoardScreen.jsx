import { Outlet, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useEffect } from 'react';
import { openModal } from '../../redux/modal/modalSlice';
import {
  useGetFetchBoardsQuery,
  useGetBoardBdByIdQuery,
} from '../../redux/boardApi/boardApi';

import {
  Board,
  ContainerBoard,
  Filter,
  SidebarBoard,
  Title,
  DescEmptyBoard,
  Wrap,
  BoxDescEmptyBoard,
  AccentSpan,
  BoardsContainer,
  ContainerColumns,
  AddColumnBtn,
  AddColumnIcon,
  CreatedContainer,
  CreatedDescription,
  ModalTeamBtn,
} from './BoardScreen.styled';
import { FiFilter } from 'react-icons/fi';
import url from '../../images/icons/sprite/icons.svg';
import PropTypes from 'prop-types';

const BoardScreen = ({ closeSidebar, handleOpenModal, selectedBg }) => {
  const dispatch = useDispatch();
  const { boardId } = useParams();
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

  const boardBgQuery = useGetBoardBdByIdQuery(bgName?.backgroundId, {
    skip: !bgName?.backgroundId,
    refetchOnMountOrArgChange: true,
  });

  const { data: boardBg } = boardBgQuery;

  useEffect(() => {
    selectedBg(boardBg);
  }, [boardBg]);

  const handleClickTeamButton = () => {
    dispatch(
      openModal({
        name: 'team',
      })
    );
  };

  return (
    <Board boardBg={bgName ? boardBg : ''} onClick={closeSidebar}>
      <ContainerBoard>
        <SidebarBoard>
          <Title>{bgName?.title}</Title>
          <Filter
            onClick={() => dispatch(openModal({ name: 'filter', boardId }))}
          >
            <FiFilter />
            <span>Filters</span>
          </Filter>
        </SidebarBoard>
        {boards?.length === 0 && (
          <Wrap>
            <BoxDescEmptyBoard>
              <DescEmptyBoard>
                Before starting your project, it is essential
                <AccentSpan onClick={handleOpenModal}>
                  {' '}
                  to create a board{' '}
                </AccentSpan>
                to visualize and track all the necessary tasks and milestones.
                This board serves as a powerful tool to organize the workflow
                and ensure effective collaboration among team members.
              </DescEmptyBoard>
            </BoxDescEmptyBoard>
            <CreatedContainer>
              <CreatedDescription>© 2023 - TaskPro.</CreatedDescription>
              <ModalTeamBtn onClick={handleClickTeamButton}>
                Created by TaskProTeam
              </ModalTeamBtn>
            </CreatedContainer>
          </Wrap>
        )}
        <BoardsContainer>
          {boards?.length !== 0 && (
            <>
              <ContainerColumns>
                <Outlet />
              </ContainerColumns>

              <AddColumnBtn onClick={handleClickModal}>
                <AddColumnIcon>
                  <svg width="14" height="14">
                    <use xlinkHref={`${url}#icon-plus`} />
                  </svg>
                </AddColumnIcon>
                Add another column
              </AddColumnBtn>
            </>
          )}
        </BoardsContainer>
      </ContainerBoard>
    </Board>
  );
};

BoardScreen.propTypes = {
  closeSidebar: PropTypes.func.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
  selectedBg: PropTypes.func.isRequired,
};

export default BoardScreen;
