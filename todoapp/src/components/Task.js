import React from 'react';

const Task = ({ task, onRemoveTask, onCompleteTask }) => {
  const handleRemoveTask = () => {
    onRemoveTask(task.id);
  };

  const handleCompleteTask = () => {
    onCompleteTask(task.id);
  };

  return (
    <div className={task {task.isComplete ? 'complete' : ''}}>
      <span>{task.name}</span>
      <button onClick={handleRemoveTask}>Remove</button>
      <button onClick={handleCompleteTask}>{task.isComplete ? 'Incomplete' : 'Complete'}</button>
    </div>
  );
}

export default Task;
