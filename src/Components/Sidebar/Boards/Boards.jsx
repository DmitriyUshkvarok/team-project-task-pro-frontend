import { useState } from 'react';

import {
  ListBoard,
  ItemBoard,
  WrapTitle,
  IconProject,
  TitleBoard,
  WrapIcons,
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
            <IconProject />
            <TitleBoard>{board}</TitleBoard>
          </WrapTitle>

          <WrapIcons isSelected={selectedItem === index}>
            <span>e</span>
            <span>d</span>
          </WrapIcons>
        </ItemBoard>
      ))}
    </ListBoard>
  );
};

export default Boards;
