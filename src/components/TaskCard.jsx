import React from 'react';

const TaskCard = ({ task, onDone, onDelete }) => (
  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
    <span className="text-white">{task.name}</span>
    <div className="flex space-x-2">
      <button onClick={() => onDone(task.id)} className="text-green-400 hover:text-green-600">
        ✓
      </button>
      <button onClick={() => onDelete(task.id)} className="text-green-400 hover:text-green-600">
        🗑️
      </button>
    </div>
  </div>
);

export default TaskCard;
