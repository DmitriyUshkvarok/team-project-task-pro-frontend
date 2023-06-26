import { useState } from 'react';
import Column from '../Modals/Column/Column';
import Card from '../Modals/Card/Card';
import {
  ToDoBox,
  AddColumnBtn,
  AddIcon,
  TitleBox,
  TitleColumn,
  TitleIcons,
  ColumnEditBtn,
  ColumnDeleteBtn,
  ColumnsIcon,
  AddCardBtn,
  AddCardIcon,
} from './ToDoList.styles';
import url from '../../images/icons/sprite/icons.svg';
import { openModal } from '../../redux/modal/modalSlice';
import { useDispatch } from 'react-redux';
import { IconStyled } from '../Sidebar/Boards/Boards.styled';

const ToDoList = () => {
  const [columns, setColumns] = useState([]);
  const [showColumnModal, setShowColumnModal] = useState(false);
  const [showCardModal, setShowCardModal] = useState(false);
  const [currentColumn, setCurrentColumn] = useState(null);
  const [currentColumnName, setCurrentColumnName] = useState('');

  const dispatch = useDispatch();

  const handleAddColumn = (title) => {
    const newColumn = {
      id: Date.now(),
      title: title,
      cards: [],
    };
    setColumns([...columns, newColumn]);
    setCurrentColumnName(title);
    setShowColumnModal(false);
  };

  const handleAddCard = (title) => {
    const newCard = {
      id: Date.now(),
      title: title,
    };

    const updatedColumns = columns.map((column) => {
      if (column.id === currentColumn.id) {
        return {
          ...column,
          cards: [...column.cards, newCard],
        };
      }
      return column;
    });
    setColumns(updatedColumns);
    setShowCardModal(false);
  };

  const handleOpenCardModal = (column) => {
    setCurrentColumn(column);
    setShowCardModal(true);
  };

  return (
    <ToDoBox>
      <AddColumnBtn
        type="button"
        onClick={() => {
          setShowColumnModal(true);
          dispatch(openModal({ name: 'column' }));
        }}
      >
        <AddIcon width="28" height="28">
          <use xlinkHref={`${url}#icon-plus`} />
        </AddIcon>
        Add new column
      </AddColumnBtn>

      {showColumnModal && (
        <Column
          buttonName="Add Column"
          onSubmit={handleAddColumn}
          currentColumnName={currentColumnName}
        />
      )}

      {columns.map((column) => (
        <div key={column.id}>
          <TitleBox>
            <TitleColumn>{column.title}</TitleColumn>
            <TitleIcons>
              <ColumnEditBtn>
                <ColumnsIcon width={16} height={16}>
                  <use xlinkHref={`${url}#icon-pencil-01`} />
                </ColumnsIcon>
              </ColumnEditBtn>
              <ColumnDeleteBtn>
                <ColumnsIcon width={16} height={16}>
                  <use xlinkHref={`${url}#icon-trash-04`} />
                </ColumnsIcon>
              </ColumnDeleteBtn>
            </TitleIcons>
          </TitleBox>
          <div>
            <AddCardBtn onClick={() => handleOpenCardModal(column)}>
              <AddCardIcon width="28" height="28">
                <use xlinkHref={`${url}#icon-plus`} />
              </AddCardIcon>
              Add another card
            </AddCardBtn>
          </div>
          <ul>
            {column.cards.map((card) => (
              <li key={card.id}>{card.title}</li>
            ))}
          </ul>
        </div>
      ))}

      {showCardModal && (
        <Card
          buttonName="Add Card"
          onClose={() => setShowCardModal(false)}
          onSubmit={handleAddCard}
        />
      )}
    </ToDoBox>
  );
};

export default ToDoList;
