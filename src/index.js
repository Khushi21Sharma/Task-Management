// Create a root to render the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application within React.StrictMode
root.render(
  <React.StrictMode>
    {/* Provide the context for tasks throughout the application */}
    <TaskProvider>
      {/* Enable client-side routing using React Router */}
      <BrowserRouter>
        {/* Wrap the application with authentication logic */}
        <AuthWrapper />
      </BrowserRouter> 
    </TaskProvider>
    {/* Display toast notifications throughout the application */}
    <ToastContainer />
  </React.StrictMode>
);
