// Import the Task component
import Task from "./Task";

// Define the RenderTasks component
const RenderTasks = ({ tasks, editTask, deleteTask }) => {
  return (
    <>
      {/* Check if there are any tasks */}
      {tasks.length > 0 ? (
        <div className="row">
          {/* Iterate over the tasks array and render each task */}
          {tasks.map((task) => (
            <div className="col-md-6 mb-2" key={task.id}>
              {/* Render the Task component for each task */}
              <Task 
                task={task} 
                // Pass the onUpdate prop to handle task editing
                onUpdate={(updatedTask) => editTask(task.id, updatedTask)} 
                // Pass the onDelete prop to handle task deletion
                onDelete={() => deleteTask(task.id)} 
              />
            </div>
          ))}
        </div>
      ) : (
        // Show a message if no tasks are found
        <span className="no-found">No tasks found - please add tasks to test the functionality.</span>
      )}
    </>
  );
};

// Export the RenderTasks component as the default export
export default RenderTasks;
