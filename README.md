# Images from the app:

Dummy Login Page :)

![Login](https://res.cloudinary.com/dzxbbqq4l/image/upload/v1710179960/tms-login_ujfoun.png)

Detailed View: A list of all tasks with detailed information after added.

![tasks](https://res.cloudinary.com/dzxbbqq4l/image/upload/v1710179960/tms-app_bjipoa.png)

# Technical Stack:

React.js: Utilized for building the user interface and managing component-based architecture.

Context API: Used for state management, providing a centralized store for task-related data and functions.

CSS: Styled components to create visually appealing and responsive UI.

Local Storage: Leveraged for caching the list of tasks to maintain data persistence across sessions.

# Key Features:

1. Task List View: Displays tasks with detailed information, including description and status, with two tasks per row.

2. CRUD Operations: Supports Create, Read, Update, and Delete operations for tasks, enabling users to manage their tasks efficiently.

3. Color-Coded Status: Tasks are visually represented with colors corresponding to their status (Not Started, In Progress, Finished).

4. Sorting and Filtration: Provides options to sort tasks by status and filter tasks based on status, enhancing user experience and task management capabilities.

5. Pagination: Implements pagination for the list of tasks, allowing users to navigate through multiple pages of tasks conveniently.

6. Dummy Login Page: Offers a simple login page with password validation (password must be "password") for user authentication.

# Why React.js + Context API:

1. Component-Based Architecture: React.js facilitates building reusable and modular UI components, promoting code reusability and maintainability.

2. Context API for State Management: Context API simplifies state management in React applications, providing a centralized store for sharing data and functions across components without the need for prop drilling.

3. Simplicity and Flexibility: React.js offers a simple and intuitive syntax, making it easy to learn and use. Context API provides a flexible and scalable solution for managing application state, suitable for small to medium-sized projects like this task management app.

4. Performance Optimization: React's virtual DOM and efficient rendering mechanisms optimize app performance, ensuring smooth user interactions and responsiveness.

5. Community Support and Ecosystem: React.js has a vibrant community and a rich ecosystem of libraries and tools, offering extensive documentation, tutorials, and support resources for developers.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run start
```

### Compile and Minify for Production

```sh
npm run build
```
