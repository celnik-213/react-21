import { useState } from 'react';
import styles from './todo.module.css';

function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Oddać projekt', completed: false },
    { id: 2, text: 'Kupić mleko', completed: true },
    { id: 3, text: 'Napisać zadanie z Reacta', completed: false },
  ]);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>Lista zadań</h2>

      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`${styles.todo} ${todo.completed ? styles.completed : ''}`}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />

          <span>{todo.text}</span>

          <button onClick={() => deleteTodo(todo.id)}>Usuń</button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
