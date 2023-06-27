import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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

const Boards = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const { data: boards, isLoading, error } = useGetFetchBoardsQuery();
  const [deleteBoard] = useDeleteBoardMutation();

  const findIconsUser = (iconId) => {
    const findIcon = icons.find((icon) => icon.id === iconId);
    if (findIcon) {
      return `${url}${findIcon.path}`;
    }
  };

  const handleItemClick = async (index, boardId) => {
    setSelectedItem((prevSelectedItem) =>
      prevSelectedItem === index ? null : index
    );
  };

  const handleDeleteBoard = async (id) => {
    const { data } = await deleteBoard(id);

    if (data.message === 'Board deleted') {
      navigate('/', { replace: true });
    }
  };

  return (
    <ListBoard>
      {boards?.map(({ _id, title, iconId }, index) => (
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
              <BtnIcon type="button">
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
  );
};

export default Boards;
