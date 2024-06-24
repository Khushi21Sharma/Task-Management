import React, { useState } from 'react';

// Task component responsible for rendering individual tasks
const Task = ({ task, onUpdate, onDelete }) => {
  // State variables for managing edit mode and edited task
  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  // Function to handle entering edit mode
  const handleEdit = () => {
    setEditMode(true);
  };

  // Function to handle saving changes to the task
  const handleSave = () => {
    onUpdate(editedTask); // Call the onUpdate function with the edited task
    setEditMode(false); // Exit edit mode
  };

  // Function to handle deleting the task
  const handleDelete = () => {
    onDelete(task.id); // Call the onDelete function with the task ID
  };

  // Function to handle changes in input fields
  const handleChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value }); // Update the edited task state with the changed value
  };

  return (
    <div className="task">
      {/* Render task information or editing fields based on edit mode */}
      {!editMode ? (
        // Display task information if not in edit mode
        <>
          <div className="task-info">
            {/* Display task description */}
            <div className="description">{task.description}</div>
            {/* Display task status */}
            <div className={`status ${task.status.toLowerCase()}`}>{task.status}</div>
          </div>
          {/* Render task actions */}
          <div className="task-actions">
            {/* Button to enter edit mode */}
            <button className="btn btn-outline-primary btn-sm mr-10" onClick={handleEdit}>Edit</button>
            {/* Button to delete the task */}
            <button className="btn btn-outline-danger btn-sm" onClick={handleDelete}>Delete</button>
          </div>
        </>
      ) : (
        // Display editing fields if in edit mode
        <div className="edit-task">
          {/* Input field to edit task description */}
          <input type="text" className="form-control" name="description" value={editedTask.description} onChange={handleChange} />
          {/* Dropdown to select task status */}
          <select className="form-control" name="status" value={editedTask.status} onChange={handleChange}>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Finished">Finished</option>
          </select>
          {/* Button to save changes */}
          <button className="btn btn-success btn-sm" onClick={handleSave}>Save</button>
        </div>
      )}
    </div>
  );
};

// Export the Task component as the default export
export default Task;

export default Task;
