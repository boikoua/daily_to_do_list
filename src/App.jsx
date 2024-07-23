import React, { useState } from 'react';
import style from './App.module.scss';
import Header from './components/Header/Header';
import NewTodo from './components/NewTodo/NewTodo';
import TodoList from './components/TodoList/TodoList';
import Footer from './components/Footer/Footer';
import todosFromServer from './api/todos';

const App = () => {
  const [todos, setTodos] = useState(todosFromServer || []);

  return (
    <div className={style.app}>
      <Header />
      <NewTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
