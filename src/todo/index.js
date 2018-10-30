import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default function Todo() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    setTodos([{ text, complete: false }, ...todos]);
  }

  function toggleTodo(todo) {
    const nextTodos = todos.map(t => {
      if (t === todo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      } else {
        return t;
      }
    });

    setTodos(nextTodos);
  }

  function removeTodo(todo) {
    const nextTodos = todos.filter(t => t !== todo);

    setTodos(nextTodos);
  }

  return (
    <main>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </main>
  );
}
