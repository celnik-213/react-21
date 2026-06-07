import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import Button from './components/Button/Button.jsx';
import Card from './components/Card/Card.jsx';
import Todo from './components/Todo/Todo.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      zad2
      <Button />
      <Card />
      zad3
      <Todo />
    </>
  );
}

export default App;
