import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../../redux/modal/modalSlice';
import authSelector from '../../../redux/auth/authSelector';
import {
  useGetFetchBoardsQuery,
  useDeleteBoardMutation,
} from '../../../redux/boardApi/boardApi';
import url from '../../../images/icons/sprite/icons.svg';
import icons from '../../icons.json';
import {
  BoxBoard,
  StyledLink,
  ListBoard,
  ItemBoard,
  WrapTitle,
  TitleBoard,
  WrapIcons,
  BtnIcon,
  IconStyled,
  IconProject,
} from './Boards.styled';
import { LoaderForDeleted } from '../../Loader/LoaderDeleted/LoaderDeleted';
import { useScrollbar } from './use-scrollbar';
import { useRef } from 'react';
import 'overlayscrollbars/overlayscrollbars.css';

const Boards = ({ currentBg }) => {
  const [isDeletedLoad, setIsDeletedLoad] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, boardId } = useParams();

  const boards = useSelector(authSelector.getBoards);
  const currentBoard = useSelector(authSelector.getCurrentBoard);

  const { data } = useGetFetchBoardsQuery();
  const [deleteBoard] = useDeleteBoardMutation();

  const boardWrapper = useRef(null);

  useEffect(() => {
    if (boards?.length > 0) {
      const currentUserBoard = boards.find(
        (board) => board?._id === currentBoard
      );
      const currentIndex = boards.findIndex(
        (item) => item._id === currentUserBoard._id
      );
      setSelectedItem(currentIndex);
      navigate(`/${currentUserBoard._id}/${currentUserBoard.title}`, {
        replace: true,
      });
    }
  }, []);

  useEffect(() => {
    const currentIndex = data?.findIndex((item) => item._id === boardId);

    setSelectedItem(currentIndex);
  }, [title, boardId, data]);

  const findIconsUser = (iconId) => {
    const findIcon = icons.find((icon) => icon.id === iconId);
    if (findIcon) {
      return `${url}${findIcon.path}`;
    }
  };

  const handleEditBoard = (id, title, iconId) => {
    dispatch(
      openModal({
        name: 'editBoard',
        id,
        title,
        iconId,
        backgroundId: currentBg,
      })
    );
  };

  const handleDeleteBoard = async (id) => {
    setIsDeletedLoad((prevIsDeletedLoad) => ({
      ...prevIsDeletedLoad,
      [id]: true,
    }));
    try {
      await deleteBoard(id);
    } catch (error) {
      console.log(error);
    } finally {
      setIsDeletedLoad((prevIsDeletedLoad) => ({
        ...prevIsDeletedLoad,
        [id]: false,
      }));
    }

    if (data.length <= 1) {
      return navigate(`/`, { replace: true });
    }

    const currentBoard = data.find((board) => board?._id !== id);

    navigate(`/${currentBoard?._id}/${currentBoard.title}`, { replace: true });
  };

  const hasScroll = window.setTimeout(function () {
    data > 2;
  }, 500);
  useScrollbar(boardWrapper, hasScroll);

  return (
    <BoxBoard ref={boardWrapper}>
      <ListBoard>
        {data?.map(({ _id, title, iconId }, index) => (
          <ItemBoard isSelected={selectedItem === index} key={_id}>
            <StyledLink to={`/${_id}/${title}`}>
              <WrapTitle>
                <IconProject isSelected={selectedItem === index}>
                  <use xlinkHref={findIconsUser(iconId)} />
                </IconProject>
                <TitleBoard isSelected={selectedItem === index}>
                  {title}
                </TitleBoard>
              </WrapTitle>

              <WrapIcons isSelected={selectedItem === index}>
                <BtnIcon
                  onClick={() => handleEditBoard(_id, title, iconId)}
                  type="button"
                >
                  <IconStyled width="16" height="16">
                    <use xlinkHref={`${url}#icon-pencil-01`} />
                  </IconStyled>
                </BtnIcon>

                <BtnIcon
                  onClick={() => handleDeleteBoard(_id)}
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
              </WrapIcons>
            </StyledLink>
          </ItemBoard>
        ))}
      </ListBoard>
    </BoxBoard>
  );
};

export default Boards;
