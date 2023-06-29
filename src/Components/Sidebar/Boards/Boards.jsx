import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  ListBoard,
  ItemBoard,
  WrapTitle,
  TitleBoard,
  WrapIcons,
  BtnIcon,
  IconStyled,
} from './Boards.styled';

import { useScrollbar } from './use-scrollbar';
import { useRef } from 'react';
import 'overlayscrollbars/overlayscrollbars.css';

const Boards = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const boards = useSelector(authSelector.getBoards);

  const { data } = useGetFetchBoardsQuery();
  const [deleteBoard] = useDeleteBoardMutation();

  const boardWrapper = useRef(null);

  const findIconsUser = (iconId) => {
    const findIcon = icons.find((icon) => icon.id === iconId);
    if (findIcon) {
      return `${url}${findIcon.path}`;
    }
  };

  const handleItemClick = async (index) => {
    setSelectedItem((prevSelectedItem) =>
      prevSelectedItem === index ? null : index
    );
  };

  const handleEditBoard = (id, title, iconId) => {
    dispatch(
      openModal({
        name: 'editBoard',
        id,
        title,
        iconId,
      })
    );
  };

  const handleDeleteBoard = async (id) => {
    await deleteBoard(id);

    if (data.length <= 1) {
      return navigate(`/`, { replace: true });
    }

    navigate(`/${data[0]._id}/${data[0].title}`, { replace: true });

    // navigate(-1, { replace: true });
  };
  useEffect(() => {
    if (boards?.length > 0) {
      navigate(`/${boards[0]._id}/${boards[0].title}`, { replace: true });
    }
  }, []);

  const hasScroll = window.setTimeout(function () {
    data > 2;
  }, 500);
  useScrollbar(boardWrapper, hasScroll);

  return (
    <div style={{ height: hasScroll ? '130px' : 'auto' }} ref={boardWrapper}>
      <ListBoard>
        {data?.map(({ _id, title, iconId }, index) => (
          <Link to={`/${_id}/${title}`} key={_id}>
            <ItemBoard
              isSelected={selectedItem === index}
              onClick={() => handleItemClick(index, _id)}
            >
              <WrapTitle>
                <IconStyled width="18" height="18">
                  <use xlinkHref={findIconsUser(iconId)} />
                </IconStyled>
                <TitleBoard>{title}</TitleBoard>
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

                <BtnIcon onClick={() => handleDeleteBoard(_id)} type="button">
                  <IconStyled width="16" height="16">
                    <use xlinkHref={`${url}#icon-trash-04`} />
                  </IconStyled>
                </BtnIcon>
              </WrapIcons>
            </ItemBoard>
          </Link>
        ))}
      </ListBoard>
    </div>
  );
};

export default Boards;
