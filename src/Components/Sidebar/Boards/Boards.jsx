import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetFetchBoardsQuery } from '../../../redux/boardApi/boardApi';
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

  const { data: boards, isLoading, error } = useGetFetchBoardsQuery();

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

  return (
    <ListBoard>
      {boards.map((board, index) => (
        <ItemBoard
          key={index}
          isSelected={selectedItem === index}
          onClick={() => handleItemClick(index)}
        >
          <WrapTitle>
            <IconProject isSelected={selectedItem === index}/>
            <TitleBoard isSelected={selectedItem === index}>{board}</TitleBoard>
          </WrapTitle>

            <WrapIcons isSelected={selectedItem === index}>
              <BtnIcon type="button">
                <IconStyled width="16" height="16">
                  <use xlinkHref={`${url}#icon-pencil-01`} />
                </IconStyled>
              </BtnIcon>

              <BtnIcon type="button">
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
