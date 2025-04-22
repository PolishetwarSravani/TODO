import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import './App.css';

const API_URL = 'https://your-render-backend-url/api/todos'; // Replace with your actual Render backend URL

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [deadlineDate, setDeadlineDate] = useState('');
  const [deadlineTime, setDeadlineTime] = useState('');

  const fetchTodos = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (!newTodo.trim()) return;
    let deadline = null;
    if (deadlineDate) {
      deadline = deadlineTime ? new Date(`${deadlineDate}T${deadlineTime}`) : new Date(deadlineDate);
    }
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: newTodo, deadline }),
    });
    const data = await response.json();
    setTodos([data, ...todos]);
    setNewTodo('');
    setDeadlineDate('');
    setDeadlineTime('');
  };

  const toggleComplete = async (id) => {
    const todo = todos.find((t) => t._id === id);
    if (!todo) return;
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !todo.completed }),
    });
    const data = await response.json();
    setTodos(todos.map((t) => (t._id === id ? data : t)));
  };

  const deleteTodo = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    setTodos(todos.filter((t) => t._id !== id));
  };

  // Check deadlines and alert if near and not completed
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      todos.forEach(todo => {
        if (todo.deadline && !todo.completed) {
          const deadline = new Date(todo.deadline);
          const diff = deadline - now;
          if (diff > 0 && diff <= 60000) { // 1 minute before deadline
            alert(`Task "${todo.text}" is nearing its deadline!`);
          }
        }
      });
    }, 30000); // check every 30 seconds
    return () => clearInterval(interval);
  }, [todos]);

  return (
    <div className="container">
      <h1>Todo App</h1>
      <div className="input-group">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <input
          type="date"
          value={deadlineDate}
          onChange={(e) => setDeadlineDate(e.target.value)}
          style={{ marginLeft: '10px' }}
        />
        <input
          type="time"
          value={deadlineTime}
          onChange={(e) => setDeadlineTime(e.target.value)}
          style={{ marginLeft: '10px' }}
        />
        <button onClick={addTodo} style={{ marginLeft: '10px' }}>Add</button>
      </div>
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
