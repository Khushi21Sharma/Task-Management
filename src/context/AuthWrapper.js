import { createContext, useContext, useEffect, useState } from "react";
import Header from "../components/header/Header"; // Import the Header component
import { RenderMenu, RenderRoutes } from "../components/login-structure/RenderNavigation"; // Import RenderMenu and RenderRoutes components for navigation
import { toast } from "react-toastify"; // Import toast notifications

// Create an authentication context
const AuthContext = createContext();

// Custom hook to access authentication data from the context
export const AuthData = () => useContext(AuthContext);

// AuthWrapper component responsible for managing authentication state
export const AuthWrapper = () => {
    // State variable to store user authentication information
    const [user, setUser] = useState(() => {
        // Initialize user state from localStorage if available
        const userData = localStorage.getItem("user");
        return userData ? JSON.parse(userData) : { name: "", isAuthenticated: false };
    });

    // Effect to update localStorage whenever user state changes
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    // Function to handle user login
    const login = (userName, password) => {
        return new Promise((resolve, reject) => {
            // Check if the provided password is correct
            if (password === "password") {
                // Update user state to indicate authentication
                setUser({ name: userName, isAuthenticated: true });
                // Show success toast notification
                toast.success(`Welcome Back ${userName}`);
                resolve("success");
            } else {
                // Reject the promise if the password is incorrect
                reject("Password must be - 'password' to login");
            }
        });
    };

    // Function to handle user logout
    const logout = () => {
        // Reset user state to indicate logout
        setUser({ name: "", isAuthenticated: false });
        // Show success toast notification
        toast.success('Logout successful');
    };

    // Render the authentication context provider with authentication data and functions
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {/* Render the Header component */}
            <Header />
            {/* Render the navigation menu */}
            <RenderMenu />
            {/* Render the routes for different pages */}
            <RenderRoutes />
        </AuthContext.Provider>
    );
};

