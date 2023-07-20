import { useParams } from 'react-router-dom';
import {
  useGetFetchBoardByIdQuery,
  useMoveTaskMutation,
  useMoveColumnMutation,
} from '../../redux/boardApi/boardApi';
import Column from './Colunm';

import { DragDropContext } from 'react-beautiful-dnd';
import { StrictModeDroppable } from '../../services/StrictModeDroppable';

const ScreenPage = () => {
  const { boardId } = useParams();
  const { data } = useGetFetchBoardByIdQuery(boardId);
  const [moveTask] = useMoveTaskMutation();
  const [moveColumn] = useMoveColumnMutation();

  const onDragEnd = async (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === 'task') {
      const value = {
        columnStart: source.droppableId,
        columnFinish: destination.droppableId,
        indexFinish: destination.index,
      };

      try {
        await moveTask({ values: value, idTask: draggableId });
      } catch (error) {
        console.log(error);
      }
    }

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
                  boardId={boardId}
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
