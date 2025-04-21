# MERN Todo App with Deadline Feature

This is a full-stack MERN (MongoDB, Express, React, Node.js) application for managing a todo list with deadline support and alerts.

## Features

- Add, update, delete, and mark todos as completed.
- Set a deadline (date and time) for each todo.
- Receive alerts when a task's deadline is approaching and it is not yet completed.
- Responsive and user-friendly React frontend.
- RESTful API backend with Express and MongoDB for data persistence.

## Technologies Used

- **Frontend:** React, JavaScript, CSS
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Database:** MongoDB (local or cloud)
- **Other:** CORS for cross-origin requests, Nodemon for development

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running locally or accessible remotely

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/PolishetwarSravani/TODO.git
   cd TODO
   ```

2. Install backend dependencies and start the server:

   ```bash
   cd backend
   npm install
   npm run dev
   ```

3. Install frontend dependencies and start the React app:

   ```bash
   cd ../frontend
   npm install
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to use the app.

## Usage

- Add a new todo with an optional deadline.
- Todos nearing their deadline will trigger an alert if not completed.
- Mark todos as completed or delete them as needed.

## Project Structure

- `backend/` - Express server, API routes, MongoDB models
- `frontend/` - React app with components and styles

## License

This project is open source and available under the MIT License.
