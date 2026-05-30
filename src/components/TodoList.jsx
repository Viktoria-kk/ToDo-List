import React from 'react';
import EmptyState from './EmptyState.jsx';
import TodoItem from './TodoItem.jsx';

function TodoList({ todos, onDelete, onEdit, onToggle }) {
  return (
    <div className="list-area">
      {todos.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              onEdit={onEdit}
              onToggle={onToggle}
            />
          ))}
        </ul>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}

export default TodoList;
