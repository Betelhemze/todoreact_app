import React from 'react';
import Task from './Task';



const TaskList = ({ tasks, onRemoveTask, onCompleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onRemoveTask={onRemoveTask} onCompleteTask={onCompleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
