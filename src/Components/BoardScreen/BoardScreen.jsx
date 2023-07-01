import { Outlet, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { openModal } from '../../redux/modal/modalSlice';
import {
  useGetFetchBoardsQuery,
  // useGetFetchBoardByIdQuery,
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

const BoardScreen = ({ closeSidebar, handleOpenModal, selectedBg }) => {
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
          <Filter onClick={() => dispatch(openModal({ name: 'filter' }))}>
            <FiFilter />
            <span>Filters</span>
          </Filter>
        </SidebarBoard>
        {boards?.length === 0 && (
          <Wrap>
            <DescEmptyBoard>
              Before starting your project, it is essential
              <AccentSpan onClick={handleOpenModal}>
                {' '}
                to create a board{' '}
              </AccentSpan>
              to visualize and track all the necessary tasks and milestones.
              This board serves as a powerful tool to organize the workflow and
              ensure effective collaboration among team members.
            </DescEmptyBoard>
            <CreatedContainer>
              <CreatedDescription>© 2023 - TaskPro.</CreatedDescription>
              <ModalTeamBtn onClick={handleClickTeamButton}>
                Created by TaskProTeam
              </ModalTeamBtn>
            </CreatedContainer>
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
      </ContainerBoard>
    </Board>
  );
};

export default BoardScreen;
