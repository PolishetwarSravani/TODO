import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  const deadlineString = todo.deadline ? new Date(todo.deadline).toLocaleString() : null;

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo._id)}
      />
      <div style={{ flexGrow: 1 }}>
        <div>{todo.text}</div>
        {deadlineString && <div style={{ fontSize: '0.8em', color: '#666' }}>Deadline: {deadlineString}</div>}
      </div>
      <button onClick={() => deleteTodo(todo._id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
