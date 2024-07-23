import React from 'react';
import style from './TodoList.module.scss';

import Todo from './Todo/Todo';

const TodoList = ({ todos, setTodos }) => {
  const toggleTodoState = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, state: !todo.state } : todo
      )
    );
  };

  const todoList = todos.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      title={todo.title}
      state={todo.state}
      toggleTodoState={toggleTodoState}
    />
  ));

  return (
    <section className={style.list}>
      {todos.length ? (
        todoList
      ) : (
        <h2 className={style.message}>You don't have any to-do list yet!</h2>
      )}
    </section>
  );
};

export default TodoList;
