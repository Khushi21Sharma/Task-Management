// Import necessary React components
import React from "react";
import Login from "./LoginPage";
import TaskList from "../main/TaskList";

// Define the navigation configuration as an array of route objects
export const nav = [
  {
    path: "/",               // URL path for the route
    name: "Home",            // Name of the route
    element: <Login />,      // React component to render for this route
    isMenu: false,           // Indicates if the route should appear in the menu
    isPrivate: false         // Indicates if
