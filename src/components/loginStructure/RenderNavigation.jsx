// Import necessary components and hooks from React Router
import { Link, Navigate, Route, Routes } from "react-router-dom";
// Import authentication context
import { AuthData } from "../../context/AuthWrapper";
// Import navigation configuration
import { nav } from "./navigation";

// Component to render routes based on navigation configuration
export const RenderRoutes = () => {
  // Extract user object from AuthData context
  const { user } = AuthData();

  return (
    // Define routes using the Routes component from React Router
    <Routes>
      { nav.map((r, i) => {
        // Check if the route is private and user is authenticated
        if (r.isPrivate && user.isAuthenticated) {
          return <Route key={i} path={r.path} element={r.element}/>;
        // If the route is not private, render it regardless of authentication
        } else if (!r.isPrivate) {
          return <Route key={i} path={r.path} element={r.element}/>;
        } else {
          return false;
        }
      })}
    </Routes>
  );
};

// Component to render the menu based on navigation configuration
export const RenderMenu = () => {
  // Extract user object and logout function from AuthData context
  const { user, logout } = AuthData();

  // Component for rendering individual menu items
  const MenuItem = ({ r }) => {
    return (
      <div className="menuItem"><Link to={r.path}>{r.name}</Link></div>
    );
  };

  return (
    <div className="menu">
      { nav.map((r, i) => {
        // Render menu item if it is not private and should be in the menu
        if (!r.isPrivate && r.isMenu) {
          return (
            <MenuItem key={i} r={r}/>
          );
        // Render menu item if user is authenticated and it should be in the menu
        } else if (user.isAuthenticated && r.isMenu) {
          return (
            <MenuItem key={i} r={r}/>
          );
        } else {
          return false;
        }
      })}

      {/* Show user info and logout option if authenticated, otherwise redirect to home */}
      { user.isAuthenticated ? 
        <div className="menuItem text-center">
          <span className="inline-block mr-10">Hello {user.name}</span>
          <Link to={'/'} onClick={logout}>Log out</Link>
        </div>
        : 
        <Navigate to="/" replace={true} /> 
      }
    </div>
  );
};
