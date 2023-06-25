import { useState } from 'react';
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

  const handleItemClick = (index) => {
    setSelectedItem((prevSelectedItem) =>
      prevSelectedItem === index ? null : index
    );
  };
  const boards = [
    'Board 1',
    'Board 2',
    'Board 1',
    'Board 2',
    'Board 1',
    'Board 2',
  ];
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
      ))}
    </ListBoard>
  );
};

export default Boards;
