import React, {usestate} from 'react'
import "./App.css";
import TodoForm from "./components/TodoForm";
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import './styles/App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (taskName) => {
    const newTask = {
      id: new Date().getTime(),
      name: taskName,
      isComplete: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleRemoveTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleCompleteTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <AddTaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onRemoveTask={handleRemoveTask} onCompleteTask={handleCompleteTask} />
    </div>
  );
};

export default App;




