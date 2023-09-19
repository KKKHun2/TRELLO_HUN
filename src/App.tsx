import { DragDropContext, Droppable, Draggable,DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { toDoState } from "./atoms";


function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return;
    setToDos((oldToDos) => {
      const toDosCopy = [...oldToDos];
      console.log("Delete item on", source.index);
      console.log(toDosCopy);
      toDosCopy.splice(source.index, 1);
      console.log("Deleted item");
      console.log(toDosCopy);

      console.log("Put back", draggableId, "on ", destination.index);
      toDosCopy.splice(destination?.index, 0, draggableId);
      console.log(toDosCopy);
      return toDosCopy;
    });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      
      <div className="flex justify-center items-center h-screen max-w-screen-sm mx-auto bg-blue-gray-100">
        <div className="grid grid-cols-1 w-full">
          <Droppable droppableId="one">
            {(magic) => (
              <div className="p-[30px] bg-gray-100 m-5 rounded-[5px] min-h-[200px]" ref={magic.innerRef} {...magic.droppableProps}>
                {toDos.map((toDo, index) => (
                  <Draggable key={toDo} draggableId={toDo} index={index}>
                    {(magic) => (
                      <div className="rounded-md mb-5 mt-5 p-[10px] bg-white-800 border border-black "
                        ref={magic.innerRef}
                        {...magic.dragHandleProps}
                        {...magic.draggableProps}
                      >
                        {toDo}
                      </div>
                    )}
                  </Draggable>
                ))}
                {magic.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
}
export default App;