import { Droppable } from "react-beautiful-dnd";
import TrelloCard from "./TrelloCard";

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

function Board({ toDos, boardId }: IBoardProps) {
  return (
    <Droppable droppableId={boardId}>
      {(provided, snapshot) => (
        <div
          className='p-2 w-full rounded-5 min-h-[200px] bg-blue-gray-100'
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <span className="text-center flex justify-center items-center font-semibold mt-2 mb-4 text-lg">{boardId}</span>
          {toDos.map((toDo, index) => (
            <TrelloCard key={toDo} index={index} toDo={toDo} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default Board;
