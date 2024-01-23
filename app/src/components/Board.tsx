// "use client";

// import React, { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
// import { Task as TaskInterface, TaskState } from "../interfaces/Task";
// import TaskCreator from "./TaskCreator";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const Board: React.FC = () => {
//   const [tasks, setTasks] = useState<TaskInterface[]>(() => {
//     const storedTasks = localStorage.getItem("tasks");
//     return storedTasks ? JSON.parse(storedTasks) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   const addTask = (
//     title: string,
//     description: string,
//     status: TaskState = TaskState.TODO
//   ) => {
//     const newTask: TaskInterface = {
//       id: uuidv4(),
//       title,
//       description,
//       state: status,
//     };

//     setTasks((prevTasks) => [...prevTasks, newTask]);
//   };

//   return (
//     <DragDropContext
//       onDragEnd={(result) => {
//         console.log(result);
//       }}
//     >
//       <div className="flex flex-col items-center h-screen">
//         <h1 className="text-2xl font-bold mb-4">Trello</h1>
//         <TaskCreator onAdd={addTask} />
//         <div className="flex flex-row gap-2 p-2 overflow-x-auto w-full">
//           <div className="flex flex-nowrap gap-2 p-2 overflow-x-auto w-full">
//             <Droppable key="0" droppableId="0">
//               {(provided) => (
//                 <div
//                   className="flex-1 min-w-[320px] bg-gray-100 p-5 rounded-md shadow"
//                   {...provided.droppableProps}
//                   ref={provided.innerRef}
//                 >
//                   <h2 className="text-center font-bold mb-6 text-black">
//                     To Do
//                   </h2>
//                   {tasks
//                     .filter((task) => task.state === TaskState.TODO)
//                     .map((component, index) => (
//                       <Draggable
//                         key={component.id}
//                         draggableId={component.id}
//                         index={index}
//                       >
//                         {(provided) => (
//                           <div
//                             className="bg-gray-200 mx-1 px-4 py-3 my-3"
//                             {...provided.dragHandleProps}
//                             {...provided.draggableProps}
//                             ref={provided.innerRef}
//                           >
//                             {component.title}
//                           </div>
//                         )}
//                       </Draggable>
//                     ))}
//                   {provided.placeholder}
//                 </div>
//               )}
//             </Droppable>

//             <Droppable key="1" droppableId="1">
//               {(provided) => (
//                 <div
//                   className="flex-1 min-w-[320px] bg-gray-100 p-5 rounded-md shadow"
//                   {...provided.droppableProps}
//                   ref={provided.innerRef}
//                 >
//                   <h2 className="text-center font-bold mb-6 text-black">
//                     In Progress
//                   </h2>
//                   {tasks
//                     .filter((task) => task.state === TaskState.IN_PROGRESS)
//                     .map((component, index) => (
//                       <Draggable
//                         key={component.id}
//                         draggableId={component.id}
//                         index={index}
//                       >
//                         {(provided) => (
//                           <div
//                             className="bg-gray-200 mx-1 px-4 py-3 my-3"
//                             {...provided.dragHandleProps}
//                             {...provided.draggableProps}
//                             ref={provided.innerRef}
//                           >
//                             {component.title}
//                           </div>
//                         )}
//                       </Draggable>
//                     ))}
//                   {provided.placeholder}
//                 </div>
//               )}
//             </Droppable>

//             <Droppable key="2" droppableId="2">
//               {(provided) => (
//                 <div
//                   className="flex-1 min-w-[320px] bg-gray-100 p-5 rounded-md shadow"
//                   {...provided.droppableProps}
//                   ref={provided.innerRef}
//                 >
//                   <h2 className="text-center font-bold mb-6 text-black">
//                     Done
//                   </h2>
//                   {tasks
//                     .filter((task) => task.state === TaskState.DONE)
//                     .map((component, index) => (
//                       <Draggable
//                         key={component.id}
//                         draggableId={component.id}
//                         index={index}
//                       >
//                         {(provided) => (
//                           <div
//                             className="bg-gray-200 mx-1 px-4 py-3 my-3"
//                             {...provided.dragHandleProps}
//                             {...provided.draggableProps}
//                             ref={provided.innerRef}
//                           >
//                             {component.title}
//                           </div>
//                         )}
//                       </Draggable>
//                     ))}
//                   {provided.placeholder}
//                 </div>
//               )}
//             </Droppable>
//           </div>
//         </div>
//       </div>
//     </DragDropContext>
//   );
// };

// export default Board;
