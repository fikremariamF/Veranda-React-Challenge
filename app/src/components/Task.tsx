import React from "react";
import { Task as TaskInterface } from "../interfaces/Task";

interface TaskProps {
  task: TaskInterface;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <div className="bg-white rounded shadow-lg p-4 mb-2 hover:bg-gray-50 cursor-pointer">
      <h3 className="text-md font-bold text-gray-900 truncate">{task.title}</h3>
      <p className="text-sm text-gray-600 mt-2">{task.description}</p>
    </div>
  );
};

export default Task;
