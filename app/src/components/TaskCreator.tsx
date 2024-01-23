// import React, { useState } from "react";
// import { TaskState } from "../interfaces/Task";

// const TaskCreator: React.FC<TaskCreatorProps> = ({ onAdd }) => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [state, setState] = useState<TaskState>(TaskState.TODO);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!title.trim() || !description.trim()) return;
//     onAdd(title, description, state);
//     setTitle("");
//     setDescription("");
//     setState(TaskState.TODO); // Reset the state to default after submitting
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex space-x-2 items-center w-full justify-center"
//     >
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Title"
//         className="flex-0 p-2 border border-gray-300 rounded text-black bg-white"
//       />
//       <textarea
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         placeholder="Description"
//         className="flex-0 p-2 border border-gray-300 rounded text-black bg-white"
//         rows={1} 
//         style={{ resize: "none" }} 
//       />
//       <select
//         value={state}
//         onChange={(e) => setState(e.target.value as TaskState)}
//         className="flex-none p-2 border border-gray-300 rounded text-black bg-white"
//         style={{ width: "150px" }} // You can adjust this width as necessary
//       >
//         {Object.keys(TaskState).map((key) => {
//           const status = TaskState[key as keyof typeof TaskState];
//           return (
//             <option key={status} value={status}>
//               {status.replace("_", " ")}
//             </option>
//           );
//         })}
//       </select>
//       <button
//         type="submit"
//         className="flex-none bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//         style={{ width: "100px" }} // You can adjust this width as necessary
//       >
//         Add Task
//       </button>
//     </form>
//   );
// };

// export default TaskCreator;
