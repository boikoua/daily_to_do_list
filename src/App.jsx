import React from 'react';
import style from './App.module.scss';
import Header from './components/Header/Header';
import NewTodo from './components/NewTodo/NewTodo';
import TodoList from './components/TodoList/TodoList';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className={style.app}>
      <Header />
      <NewTodo />
      <TodoList />
      <Footer />
    </div>
  );
};

export default App;
