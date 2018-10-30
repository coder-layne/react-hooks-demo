import React from 'react';

export default function TodoItem({ todo, toggleTodo, removeTodo }) {
  const { complete, text } = todo;

  function handleRemove(ev) {
    ev.stopPropagation();
    removeTodo(todo);
  }

  return (
    <li
      style={{ textDecoration: complete ? 'line-through' : '' }}
      onClick={() => toggleTodo(todo)}
    >
      {text}
      <button style={{ float: 'right' }} onClick={handleRemove}>
        X
      </button>
    </li>
  );
}
