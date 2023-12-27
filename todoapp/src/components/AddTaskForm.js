import React from 'react'
import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleAddTask = (event) => {
    event.preventDefault();
    if (taskName.trim() === '') {
      return;
    }
    onAddTask(taskName);
    setTaskName('');
  };

  return (
    <form onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="Enter task name"
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;





