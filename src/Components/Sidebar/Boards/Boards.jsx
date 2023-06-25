import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetFetchBoardsQuery } from '../../../redux/boadrApi/boardApi';
import url from '../../../images/icons/sprite/icons.svg';
import {
  ListBoard,
  ItemBoard,
  WrapTitle,
  IconProject,
  TitleBoard,
  WrapIcons,
  BtnIcon,
  IconStyled,
} from './Boards.styled';

const Boards = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const { data: boards } = useGetFetchBoardsQuery();

  const handleItemClick = (index) => {
    setSelectedItem((prevSelectedItem) =>
      prevSelectedItem === index ? null : index
    );
  };

  return (
    <ListBoard>
      {boards?.map(({ _id, title }, index) => (
        <Link to={`/${_id}?title=${title}`} key={_id}>
          <ItemBoard
            isSelected={selectedItem === index}
            onClick={() => handleItemClick(index)}
          >
            <WrapTitle>
              <IconProject />
              <TitleBoard>{title}</TitleBoard>
            </WrapTitle>

            <WrapIcons isSelected={selectedItem === index}>
              <BtnIcon type="buttom">
                <IconStyled width="16" height="16">
                  <use xlinkHref={`${url}#icon-pencil-01`} />
                </IconStyled>
              </BtnIcon>

              <BtnIcon type="buttom">
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
