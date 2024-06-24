import React, { useState } from 'react';
import { useTaskContext } from '../../context/TaskContext'; // Import the custom hook for accessing TaskContext
import { toast } from 'react-toastify'; // Import toast notifications
import 'react-toastify/dist/ReactToastify.css'; // Import toast notification styles

// TaskForm component responsible for rendering a form to add new tasks
const TaskForm = () => {
  // Access addTask function from TaskContext using custom hook useTaskContext
  const { addTask } = useTaskContext();
  
  // State variables for managing task description and status
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate if description and status are provided
    if (!description || !status) {
      toast.error('Please choose a task description & status.'); // Show error toast notification if fields are empty
      return;
    }
    // Create a new task object
    const newTask = {
      id: Date.now(), // Generate unique ID using current timestamp
      description,
      status
    };
    // Call addTask function from TaskContext to add the new task
    addTask(newTask);
    // Reset input fields after adding task
    setDescription('');
    setStatus('');
    // Show success toast notification
    toast.success('Task added successfully');
  };

  return (
    // Task form element
    <form className="task-form justify-content-center row mb-2" onSubmit={handleSubmit}>
      {/* Form title */}
      <h2 className='text-center'>Add Tasks</h2>
      {/* Input field for task description */}
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description"
        className="task-input col-lg-3"
      />
      {/* Dropdown to select task status */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="task-select col-lg-3"
      >
        <option value="">Select status</option>
        <option value="Not Started">Not Started</option>
        <option value="In Progress">In Progress</option>
        <option value="Finished">Finished</option>
      </select>
      {/* Button to submit the form */}
      <button type="submit" className="task-button col-lg-3">Add Task</button>
    </form>
  );
};

// Export the TaskForm component as the default export
export default TaskForm;

