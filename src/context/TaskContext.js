import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for managing task-related state
const TaskContext = createContext();

// Custom hook to access task-related data and functions from the context
export const useTaskContext = () => {
  return useContext(TaskContext);
};

// TaskProvider component responsible for managing task-related state
export const TaskProvider = ({ children }) => {
  // State variables for managing tasks, sorting order, status filter, and current page
  const [tasks, setTasks] = useState(() => {
    // Initialize tasks from localStorage if available
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterStatus, setFilterStatus] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 4; // Number of tasks per page

  // Effect to update localStorage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Function to add a new task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Context value containing task-related data and functions
  const value = {
    tasks,
    setTasks,
    sortOrder,
    setSortOrder,
    filterStatus,
    setFilterStatus,
    currentPage,
    setCurrentPage,
    tasksPerPage,
    addTask
  };

  // Render the TaskContext.Provider with the provided value
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

