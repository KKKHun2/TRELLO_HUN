import React from "react";
import { Draggable } from "react-beautiful-dnd";

interface IDragabbleCardProps {
  toDo: string;
  index: number;
}

function DragabbleCard({ toDo, index }: IDragabbleCardProps) {
  return (
    <Draggable draggableId={toDo} index={index}>
      {(magic) => (
        <div className="p-5  bg-gray-100 m-3 rounded-lg min-h-[200px]"
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          {toDo}
        </div>
      )}
    </Draggable>
  );
}
export default React.memo(DragabbleCard);