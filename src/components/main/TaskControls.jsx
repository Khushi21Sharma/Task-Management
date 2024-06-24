// TaskControls component responsible for rendering sorting and filtering controls for tasks
const TaskControls = ({ sortOrder, handleSortByStatus, handleFilter }) => {
  return (
    <div className="controls mb-2">
      {/* Container for sorting control */}
      <div className="select-container">
        <label htmlFor="sortBy">Sort By:</label>
        {/* Custom select dropdown for sorting */}
        <div className="custom-select">
          {/* Select element for sorting */}
          <select id="sortBy" onChange={handleSortByStatus}>
            {/* Option for no sorting */}
            <option value="">None</option>
            {/* Option for sorting by task status */}
            <option value="status">Status</option>
          </select>
          {/* Select arrow */}
          <div className="select-arrow"></div>
        </div>
      </div>
      {/* Container for filtering control */}
      <div className="select-container">
        <label htmlFor="filterBy">Filter By Status:</label>
        {/* Custom select dropdown for filtering */}
        <div className="custom-select">
          {/* Select element for filtering */}
          <select id="filterBy" onChange={(e) => handleFilter(e.target.value)}>
            {/* Option for filtering all tasks */}
            <option value="">All</option>
            {/* Options for filtering by task status */}
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Finished">Finished</option>
          </select>
          {/* Select arrow */}
          <div className="select-arrow"></div>
        </div>
      </div>
    </div>
  );
};

  export default TaskControls;
