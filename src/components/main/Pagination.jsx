// Define the Pagination component
const Pagination = ({ currentPage, paginate, indexOfLastTask, filteredTasksLength }) => {
  return (
    <div className="pagination">
      {/* Previous button */}
      <button
        onClick={() => paginate(currentPage - 1)} // Call paginate function with the previous page number
        disabled={currentPage === 1} // Disable the button if the current page is 1 (no previous page)
        className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`} // Apply 'disabled' class if button is disabled
      >
        Previous
      </button>
      
      {/* Next button */}
      <button
        onClick={() => paginate(currentPage + 1)} // Call paginate function with the next page number
        disabled={indexOfLastTask >= filteredTasksLength} // Disable the button if the last task index exceeds or equals the total tasks length
        className={`pagination-button ${indexOfLastTask >= filteredTasksLength ? 'disabled' : ''}`} // Apply 'disabled' class if button is disabled
      >
        Next
      </button>
    </div>
  );
};

// Export the Pagination component as the default export
export default Pagination;


  export default Pagination;
