import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <section>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </section>
  );
}
