import React, { useEffect } from 'react';
import TaskForm from './TaskForm'; // Import the TaskForm component
import { useTaskContext } from '../../context/TaskContext'; // Import the custom hook for accessing TaskContext
import Pagination from './Pagination'; // Import the Pagination component
import TaskControls from './TaskControls'; // Import the TaskControls component
import RenderTasks from './RenderTasks'; // Import the RenderTasks component
import { toast } from 'react-toastify'; // Import toast notifications
import './main.css'; // Import main CSS file

// TaskList component responsible for managing tasks and rendering task-related components
const TaskList = () => {
  // Destructure necessary values from TaskContext
  const {
    tasks, // Array of tasks
    setTasks, // Function to set tasks
    sortOrder, // Current sorting order
    setSortOrder, // Function to set sorting order
    filterStatus, // Current status filter
    setFilterStatus, // Function to set status filter
    currentPage, // Current page number for pagination
    setCurrentPage, // Function to set current page number
    tasksPerPage, // Number of tasks to display per page
  } = useTaskContext();

  // This part of the code seems to be incomplete, let me know if you need assistance completing it.
};

// Export the TaskList component as the default export
export default TaskList;

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, [setTasks]);

  const handleSortByStatus = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    const sortedTasks = sortTasks(tasks);
    setTasks(sortedTasks);
  };

  const handleFilter = (status) => {
    setFilterStatus(status);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Editing Task
  const editTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, ...updatedTask };
      }
      return task;
    });
    const sortedTasks = sortTasks(updatedTasks);
    toast.success(`Task ${taskId} Editing successfully`);
    setTasks(sortedTasks);
  };

  // Deleting Task
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    const sortedTasks = sortTasks(updatedTasks);
    toast.success(`Task ${taskId} Deleting successfully`);
    setTasks(sortedTasks);
  };

  const sortTasks = (tasksArray) => {
    const sortedTasks = tasksArray.sort((a, b) => {
      if (a.status < b.status) return sortOrder === 'asc' ? -1 : 1;
      if (a.status > b.status) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
    return sortedTasks;
  };

  const filteredTasks = filterStatus
    ? tasks.filter((task) => task.status.toLowerCase() === filterStatus.toLowerCase())
    : tasks;

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

  return (
    <main className="main">
      <TaskForm />
      <TaskControls
        sortOrder={sortOrder}
        handleSortByStatus={handleSortByStatus}
        handleFilter={handleFilter}
      />
      <RenderTasks tasks={currentTasks} editTask={editTask} deleteTask={deleteTask} />
      <Pagination
        currentPage={currentPage}
        paginate={paginate}
        indexOfLastTask={indexOfLastTask}
        filteredTasksLength={filteredTasks.length}
      />
    </main>
  );
};

export default TaskList;
