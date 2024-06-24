// Import necessary hooks and functions from React and React Router
import { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
// Import authentication context and toast notification
import { AuthData } from "../../context/AuthWrapper";
import { toast } from "react-toastify";

// Define the Login component
const Login = () => {
  // Hook to navigate programmatically
  const navigate = useNavigate();
  // Extract login function from AuthData context
  const { login } = AuthData();

  // useReducer hook to manage form data state
  const [formData, setFormData] = useReducer(
    (formData, newItem) => ({ ...formData, ...newItem }),
    { userName: "", password: "" }
  );

  // Extract user object from AuthData context
  const { user } = AuthData();

  // Redirect to "/tasklist" if user is already authenticated
  useEffect(() => {
    if (user.isAuthenticated) {
      navigate("/tasklist");
    }
  }, [user, navigate]);

  // Function to handle form submission
  const doLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      // Attempt to log in with provided credentials
      await login(formData.userName, formData.password);
      // Navigate to task list page on successful login
      navigate("/tasklist");
    } catch (error) {
      // Display error message using toast notifications
      toast.error(error.message);
    }
  };

  return (
    <section className="login-page">
      <h2>Login</h2>
      <p>Enter Any UserName / Password must be "password"</p>
      {/* Form to handle user login */}
      <form onSubmit={doLogin} className="inputs">
        <div className="input">
          <input
            placeholder="Username"
            value={formData.userName}
            onChange={(e) => setFormData({ userName: e.target.value })}
            type="text"
          />
        </div>
        <div className="input mt-2">
          <input
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ password: e.target.value })}
            type="password"
          />
        </div>
        <div className="button">
          <input type="submit" className="btn btn-danger mt-2" value="Log in" />
        </div>
      </form>
    </section>
  );
};

// Export the Login component as the default export of this module
export default Login;
