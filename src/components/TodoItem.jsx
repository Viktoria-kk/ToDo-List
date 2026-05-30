import React from 'react';
import editIcon from '../assets/edit.svg';
import trashIcon from '../assets/trash.svg';

function TodoItem({ todo, onDelete, onEdit, onToggle }) {
  return (
    <li className={todo.completed ? 'todo-item todo-item--done' : 'todo-item'}>
      <label className="todo-check">
        <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
        <span className="checkbox-face" aria-hidden="true"></span>
        <span className="todo-text">{todo.text}</span>
      </label>

      <div className="todo-actions">
        <button
          type="button"
          className="icon-button edit-button"
          onClick={() => onEdit(todo)}
          aria-label={`Edit ${todo.text}`}
          title="Edit note"
        >
          <img className="small-icon" src={editIcon} alt="" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="icon-button delete-button"
          onClick={() => onDelete(todo.id)}
          aria-label={`Delete ${todo.text}`}
          title="Delete note"
        >
          <img className="small-icon" src={trashIcon} alt="" aria-hidden="true" />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
