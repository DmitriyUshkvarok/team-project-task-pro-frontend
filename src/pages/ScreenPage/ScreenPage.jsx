import { useParams } from 'react-router-dom';
import {
  useGetFetchBoardByIdQuery,
  useMoveColumnMutation,
} from '../../redux/boardApi/boardApi';
import Column from './Colunm';

import { DragDropContext } from 'react-beautiful-dnd';
import { StrictModeDroppable } from '../../services/StrictModeDroppable';

const ScreenPage = () => {
  const { boardId } = useParams();
  const { data } = useGetFetchBoardByIdQuery(boardId);
  const [moveColumn] = useMoveColumnMutation();

  const onDragEnd = async (result) => {
    const { destination, source, draggableId, type } = result;
    if (type === 'column') {
      const value = {
        indexStart: source.index,
        indexFinish: destination.index,
      };

      try {
        await moveColumn({ values: value, idColumn: draggableId });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StrictModeDroppable
        droppableId="all-columns"
        direction="horizontal"
        type="column"
      >
        {(provided) => (
          <div
            style={{ display: 'flex' }}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {data?.columns.length > 0 &&
              data.columns.map(({ _id, title, tasksList }, index) => (
                <Column
                  key={_id}
                  _id={_id}
                  title={title}
                  tasksList={tasksList}
                  columnsIds={data.columnsIds}
                  index={index}
                />
              ))}
            {provided.placeholder}
          </div>
        )}
      </StrictModeDroppable>
    </DragDropContext>
  );
};

export default ScreenPage;
